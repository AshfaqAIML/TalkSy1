import { db } from "@/lib/db";
import { getExercise } from "@/data/curriculum";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson, updateStats } from "@/lib/api-helpers";
import { validateAnswer } from "@/lib/engine/validators";
import { DIFFICULTY_POINTS } from "@/data/curriculum/types";

interface AttemptBody {
  exerciseId?: unknown;
  lessonSlug?: unknown;
  answer?: unknown;
  hintsUsed?: unknown;
  durationMs?: unknown;
  context?: unknown;
}

/**
 * POST /api/exercises/attempt
 * Grades a submitted answer server-side (the client never sees the key),
 * persists the attempt with hints/duration, updates performance stats, and
 * returns the full feedback payload.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to save your answers.", 401);

  const body = await readJson<AttemptBody>(req);
  if (!body) return jsonError("Invalid request body.");

  const exerciseId = typeof body.exerciseId === "string" ? body.exerciseId : "";
  const lessonSlug = typeof body.lessonSlug === "string" ? body.lessonSlug : "";
  if (!exerciseId || !lessonSlug) {
    return jsonError("exerciseId and lessonSlug are required.", 422);
  }

  const exercise = getExercise(exerciseId);
  if (!exercise) return jsonError("Exercise not found.", 404);

  const hintsUsed = Math.max(0, Math.min(10, Number(body.hintsUsed) || 0));
  const durationMs = Math.max(0, Math.min(3_600_000, Number(body.durationMs) || 0));
  const context = body.context === "assessment" ? "assessment" : "practice";

  const result = validateAnswer(exercise, body.answer);
  const points = result.correct ? DIFFICULTY_POINTS[exercise.difficulty] : 0;

  await db.exerciseAttempt.create({
    data: {
      userId: user.id,
      exerciseId,
      lessonSlug,
      type: exercise.type,
      difficulty: exercise.difficulty,
      skill: exercise.skill,
      context,
      isCorrect: result.correct,
      score: result.score,
      hintsUsed,
      durationMs,
      answer: JSON.stringify(body.answer ?? null).slice(0, 2000),
    },
  });

  await updateStats(user.id, {
    correct: result.correct,
    hintsUsed,
    durationMs,
    type: exercise.type,
    difficulty: exercise.difficulty,
    skill: exercise.skill,
  });

  return json({
    exerciseId,
    correct: result.correct,
    score: result.score,
    invalid: result.invalid,
    points,
    totalPoints: DIFFICULTY_POINTS[exercise.difficulty],
    feedback: result.invalid
      ? {
          correctAnswer: exercise.feedback.correctAnswer,
          explanation:
            "We could not read your answer. Please try again with the expected answer format.",
          whyWrong: exercise.feedback.whyWrong,
          grammarRule: exercise.feedback.grammarRule,
          similarExample: exercise.feedback.similarExample,
        }
      : exercise.feedback,
  });
}
