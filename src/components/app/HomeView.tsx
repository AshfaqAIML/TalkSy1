"use client";

import {
  ArrowRight,
  BookOpen,
  Brain,
  ClipboardCheck,
  GraduationCap,
  Headphones,
  PenLine,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";

export function HomeView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);

  const features = [
    {
      icon: BookOpen,
      title: "Structured lessons",
      text: "16 block types — vocabulary, dialogues, grammar rules, tables, diagrams and more — rendered by one reusable engine.",
    },
    {
      icon: Brain,
      title: "15 exercise types",
      text: "From multiple choice to dictation, drag-and-drop and speaking — every answer graded with full feedback.",
    },
    {
      icon: Headphones,
      title: "Listen & speak daily",
      text: "Audio for every dialogue and word, dictation and speaking practice built on your browser's voice.",
    },
    {
      icon: ClipboardCheck,
      title: "Real assessments",
      text: "End-of-lesson tests drawn from approved question banks, with a personal performance summary.",
    },
    {
      icon: PenLine,
      title: "Notes & bookmarks",
      text: "Bookmark lessons, keep per-section notes, toggle translations — your workspace, your rules.",
    },
    {
      icon: Trophy,
      title: "Progress that counts",
      text: "Lessons are completed by finishing sections and passing assessments — never just by opening a page.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <GraduationCap className="size-3.5" aria-hidden />
            From your first English word to confident communication.
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Your journey to confident English starts here.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn English step by step, practise every day, and build the
            confidence to communicate in real life.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => navigate(user ? { name: "library" } : { name: "register" })}
            >
              Start Learning Free <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ name: "library" })}
            >
              Explore Learning Path
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Free while we grow · no credit card · 6 beginner lessons live today
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          A complete learning engine
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          Everything below is live in the app right now — built for beginners,
          ready for every level.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col gap-2.5 p-5">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="size-5 text-primary" aria-hidden />
                </span>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Levels */}
      <section className="border-t bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Your learning path
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                level: "Pre-A1 · First Words",
                lessons: "4 lessons live",
                text: "Greetings, numbers, colors and family — your very first words.",
                live: true,
              },
              {
                level: "A1 · Building Blocks",
                lessons: "2 lessons live",
                text: "The verb 'to be' and your first real café conversation.",
                live: true,
              },
              {
                level: "A2 · Growing Skills",
                lessons: "Coming soon",
                text: "Past tense, travel English and longer conversations.",
                live: false,
              },
            ].map((item) => (
              <Card
                key={item.level}
                className={item.live ? "" : "border-dashed opacity-70"}
              >
                <CardContent className="flex flex-col gap-1.5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.lessons}
                  </p>
                  <h3 className="font-semibold">{item.level}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
