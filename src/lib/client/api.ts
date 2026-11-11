"use client";

import type {
  ExerciseFeedback,
  Lesson,
  SafeExercise,
} from "@/data/curriculum/types";

/** Typed client for the TalkSy API. All calls are same-origin, relative. */

export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
}

export interface LessonProgressDto {
  lessonSlug: string;
  status: "in-progress" | "completed";
  sectionsCompleted: string[];
  lastSectionId: string | null;
  bookmarked: boolean;
  completedAt: string | null;
}

export interface CompletionDto {
  completed: boolean;
  sectionsDone: number;
  sectionsTotal: number;
}

export interface NoteDto {
  sectionId: string;
  content: string;
  updatedAt: string;
}

export interface BestAssessmentDto {
  id: string;
  score: number;
  passed: boolean;
  correct: number;
  total: number;
  completedAt: string | null;
}

export interface LessonBundle {
  lesson: Lesson;
  exercises: SafeExercise[];
  exercisePoints: number;
  progress: LessonProgressDto | null;
  notes: NoteDto[];
  bestAssessment: BestAssessmentDto | null;
  completion: CompletionDto;
}

export interface CurriculumLessonMeta {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  sectionCount: number;
  hasAssessment: boolean;
}

export interface CurriculumDto {
  levels: {
    id: string;
    name: string;
    tagline: string;
    units: {
      number: number;
      title: string;
      description: string;
      lessons: CurriculumLessonMeta[];
    }[];
  }[];
  totals: {
    lessons: number;
    blocks: number;
    blockTypes: number;
    exerciseTypes: number;
  };
}

export interface AttemptResult {
  exerciseId: string;
  correct: boolean;
  score: number;
  invalid: boolean;
  points: number;
  totalPoints: number;
  feedback: ExerciseFeedback;
}

export interface AssessmentSummaryDto {
  scorePercent: number;
  passed: boolean;
  total: number;
  correct: number;
  passMarkPercent: number;
  byDifficulty: { difficulty: string; attempts: number; correct: number }[];
  bySkill: { skill: string; attempts: number; correct: number }[];
  wrongExerciseIds: string[];
  recommendation: string;
}

export interface AssessmentReviewItem {
  exerciseId: string;
  type: string;
  difficulty: string;
  skill: string;
  correct: boolean;
  invalid: boolean;
  prompt: string;
  submitted: unknown;
  feedback: ExerciseFeedback;
}

export interface AssessmentSubmitResult {
  assessmentId: string;
  lessonSlug: string;
  lessonTitle: string;
  summary: AssessmentSummaryDto;
  review: AssessmentReviewItem[];
  completion: CompletionDto;
}

export interface StartAssessmentResult {
  assessmentId: string;
  lessonSlug: string;
  passScore: number;
  total: number;
  questions: SafeExercise[];
}

export interface ProgressItem {
  lessonSlug: string;
  lessonTitle: string;
  levelId: string | null;
  status: "in-progress" | "completed";
  bookmarked: boolean;
  lastSectionId: string | null;
  updatedAt: string;
  completedAt: string | null;
  completion: CompletionDto;
  bestAssessment: { score: number; passed: boolean; correct: number; total: number } | null;
  nextLessonSlug: string | null;
}

export interface StatsDto {
  totals: {
    attempts: number;
    correct: number;
    accuracy: number;
    hintsUsed: number;
    timeSpentMinutes: number;
    streakDays: number;
  };
  byType: Record<string, { attempts: number; correct: number }>;
  byDifficulty: Record<string, { attempts: number; correct: number }>;
  bySkill: Record<string, { attempts: number; correct: number }>;
  recentAttempts: {
    exerciseId: string;
    lessonSlug: string;
    type: string;
    difficulty: string;
    skill: string;
    isCorrect: boolean;
    hintsUsed: number;
    context: string;
    createdAt: string;
  }[];
  assessments: {
    id: string;
    lessonSlug: string;
    score: number;
    passed: boolean;
    correct: number;
    total: number;
    completedAt: string | null;
  }[];
}

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; error: string; status: number }> {
  try {
    const res = await fetch(path, {
      ...init,
      headers: { "content-type": "application/json", ...(init?.headers ?? {}) },
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    if (!res.ok) {
      const message =
        typeof data?.error === "string" ? data.error : `Request failed (${res.status}).`;
      return { ok: false, error: message, status: res.status };
    }
    return { ok: true, data: data as T };
  } catch {
    return { ok: false, error: "Network error. Is the server running?", status: 0 };
  }
}

export const api = {
  me: () => request<{ user: SessionUser | null }>("/api/auth/me"),
  register: (body: { email: string; name: string; password: string }) =>
    request<{ user: SessionUser }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  login: (body: { email: string; password: string }) =>
    request<{ user: SessionUser }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  logout: () => request<{ ok: boolean }>("/api/auth/logout", { method: "POST" }),

  curriculum: () => request<CurriculumDto>("/api/curriculum"),
  lesson: (slug: string) => request<LessonBundle>(`/api/curriculum/${slug}`),

  attempt: (body: {
    exerciseId: string;
    lessonSlug: string;
    answer: unknown;
    hintsUsed: number;
    durationMs: number;
    context?: "practice" | "assessment";
  }) =>
    request<AttemptResult>("/api/exercises/attempt", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  lessonState: (
    slug: string,
    body:
      | { action: "position"; sectionId: string }
      | { action: "complete-section"; sectionId: string }
      | { action: "bookmark"; bookmarked: boolean }
      | { action: "note"; sectionId: string; content: string },
  ) =>
    request<{ progress: LessonProgressDto; completion: CompletionDto }>(
      `/api/lessons/${slug}/state`,
      { method: "POST", body: JSON.stringify(body) },
    ),

  startAssessment: (lessonSlug: string) =>
    request<StartAssessmentResult>("/api/assessments", {
      method: "POST",
      body: JSON.stringify({ lessonSlug }),
    }),
  submitAssessment: (
    assessmentId: string,
    answers: { exerciseId: string; answer: unknown }[],
  ) =>
    request<AssessmentSubmitResult>(`/api/assessments/${assessmentId}/submit`, {
      method: "POST",
      body: JSON.stringify({ answers }),
    }),

  progress: () => request<{ items: ProgressItem[] }>("/api/progress"),
  stats: () => request<StatsDto>("/api/stats"),
};
