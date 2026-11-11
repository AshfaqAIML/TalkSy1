"use client";

import type {
  ExerciseFeedback,
  Lesson,
  SafeExercise,
  SentenceStructure,
} from "@/data/curriculum/types";
import type {
  AnnotatedWord,
  ChallengeRunDto,
  ChallengeStartDto,
  ChallengeSubmitDto,
  FlashcardSessionDto,
  ReviewOutcomeDto,
  SentenceDto,
  SentenceSubmitDto,
  VocabOverviewDto,
  VocabSettingsDto,
  WordDetailDto,
  WordListDto,
} from "@/lib/vocab/dto";
import type { SrsConfigOverrides } from "@/lib/vocab/srs";
import type { ChallengeKind } from "@/data/vocabulary/types";

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
  /** Sentence-build only: structure of the canonical answer, sent after grading. */
  structure?: SentenceStructure;
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

export interface ClinicIssue {
  ruleId: string;
  category: string;
  original: string;
  suggestion: string;
  explanation: string;
  lessonSlug?: string;
}

export interface ClinicCheckResult {
  original: string;
  corrected: string;
  clean: boolean;
  issues: ClinicIssue[];
  categories: string[];
}

export interface ClinicHistoryResult {
  submissions: {
    id: string;
    sentence: string;
    corrected: string;
    issues: ClinicIssue[];
    categories: string[];
    createdAt: string;
  }[];
  recurring: { category: string; count: number }[];
  recommendedLessons: {
    slug: string;
    title: string;
    description: string;
    estimatedMinutes: number;
  }[];
}

export interface VocabCategoriesDto {
  categories: {
    id: string;
    name: string;
    description: string;
    icon: string;
    total: number;
    contextCount: number;
    subcategories: { id: string; name: string; total: number }[];
  }[];
}

export interface DailyWordDto {
  dateKey: string;
  word: AnnotatedWord["word"];
  bookmarked: boolean;
  progress: AnnotatedWord["progress"];
}

export interface DailyWordsDto {
  today: DailyWordDto;
  archive: DailyWordDto[];
}

export interface WordSearchParams {
  q?: string;
  category?: string;
  sub?: string;
  difficulty?: string;
  status?: string;
  flag?: string;
  bookmarked?: string;
  ids?: string[];
  sort?: string;
  limit?: number;
  offset?: number;
}

export interface WordsResultDto {
  words: AnnotatedWord[];
  total: number;
  libraryTotal: number;
  limit: number;
  offset: number;
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
    context?: "practice" | "assessment" | "challenge";
  }) =>
    request<AttemptResult>("/api/exercises/attempt", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  clinicCheck: (body: { sentence: string }) =>
    request<ClinicCheckResult>("/api/grammar/clinic", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  clinicHistory: () => request<ClinicHistoryResult>("/api/grammar/clinic"),

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

  // -------------------------------------------------------------------------
  // Vocabulary system
  // -------------------------------------------------------------------------

  vocabCategories: () => request<VocabCategoriesDto>("/api/vocabulary/categories"),
  vocabDaily: () => request<DailyWordsDto>("/api/vocabulary/daily"),
  vocabWord: (id: string) => request<WordDetailDto>(`/api/vocabulary/words/${id}`),
  vocabWords: (params: WordSearchParams = {}) => {
    const search = new URLSearchParams();
    if (params.q) search.set("q", params.q);
    if (params.category) search.set("category", params.category);
    if (params.sub) search.set("sub", params.sub);
    if (params.difficulty) search.set("difficulty", params.difficulty);
    if (params.status) search.set("status", params.status);
    if (params.flag) search.set("flag", params.flag);
    if (params.bookmarked) search.set("bookmarked", params.bookmarked);
    if (params.ids && params.ids.length > 0) search.set("ids", params.ids.join(","));
    if (params.sort) search.set("sort", params.sort);
    if (params.limit) search.set("limit", String(params.limit));
    if (params.offset) search.set("offset", String(params.offset));
    const qs = search.toString();
    return request<WordsResultDto>(`/api/vocabulary/words${qs ? `?${qs}` : ""}`);
  },

  vocabOverview: () => request<VocabOverviewDto>("/api/vocabulary/overview"),
  vocabFlashcards: (study = "queue") =>
    request<FlashcardSessionDto>(`/api/vocabulary/flashcards?study=${encodeURIComponent(study)}`),
  vocabReview: (body: {
    action: "grade" | "known" | "snooze" | "flag";
    wordId: string;
    rating?: "again" | "hard" | "good" | "easy";
    source?: "flashcard" | "challenge" | "sentence" | "daily" | "explore";
    hours?: number;
    difficult?: boolean;
  }) =>
    request<ReviewOutcomeDto>("/api/vocabulary/review", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  vocabBookmarks: () => request<{ words: AnnotatedWord[] }>("/api/vocabulary/bookmarks"),
  vocabToggleBookmark: (wordId: string) =>
    request<{ wordId: string; bookmarked: boolean }>("/api/vocabulary/bookmarks", {
      method: "POST",
      body: JSON.stringify({ wordId }),
    }),

  vocabLists: () => request<{ lists: WordListDto[] }>("/api/vocabulary/lists"),
  vocabCreateList: (body: { name: string; description?: string }) =>
    request<{ list: WordListDto }>("/api/vocabulary/lists", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  vocabList: (id: string) =>
    request<{ list: WordListDto; words: AnnotatedWord[] }>(`/api/vocabulary/lists/${id}`),
  vocabUpdateList: (id: string, body: { name?: string; description?: string }) =>
    request<{ list: { id: string; name: string; description: string } }>(
      `/api/vocabulary/lists/${id}`,
      { method: "PATCH", body: JSON.stringify(body) },
    ),
  vocabAddToList: (id: string, wordId: string) =>
    request<{ wordId: string; added: boolean }>(`/api/vocabulary/lists/${id}`, {
      method: "POST",
      body: JSON.stringify({ wordId }),
    }),
  vocabRemoveFromList: (id: string, wordId: string) =>
    request<{ wordId: string; removed: boolean }>(
      `/api/vocabulary/lists/${id}?wordId=${encodeURIComponent(wordId)}`,
      { method: "DELETE" },
    ),
  vocabDeleteList: (id: string) =>
    request<{ deleted: boolean }>(`/api/vocabulary/lists/${id}`, { method: "DELETE" }),

  vocabSentences: (wordId?: string) =>
    request<{ sentences: SentenceDto[] }>(
      `/api/vocabulary/sentences${wordId ? `?wordId=${encodeURIComponent(wordId)}` : ""}`,
    ),
  vocabSubmitSentence: (wordId: string, sentence: string) =>
    request<SentenceSubmitDto>("/api/vocabulary/sentences", {
      method: "POST",
      body: JSON.stringify({ wordId, sentence }),
    }),

  vocabChallengeHistory: () => request<{ runs: ChallengeRunDto[] }>("/api/vocabulary/challenges"),
  vocabStartChallenge: (body: { kind: ChallengeKind; categoryId?: string; size?: number }) =>
    request<ChallengeStartDto>("/api/vocabulary/challenges", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  vocabSubmitChallenge: (
    runId: string,
    answers: Record<string, unknown>,
    durationMs: number,
  ) =>
    request<ChallengeSubmitDto>(`/api/vocabulary/challenges/${runId}/submit`, {
      method: "POST",
      body: JSON.stringify({ answers, durationMs }),
    }),

  vocabSettings: () => request<VocabSettingsDto>("/api/vocabulary/settings"),
  vocabUpdateSettings: (overrides: SrsConfigOverrides) =>
    request<VocabSettingsDto>("/api/vocabulary/settings", {
      method: "PUT",
      body: JSON.stringify({ overrides }),
    }),
  vocabResetSettings: () =>
    request<VocabSettingsDto>("/api/vocabulary/settings", { method: "DELETE" }),
};
