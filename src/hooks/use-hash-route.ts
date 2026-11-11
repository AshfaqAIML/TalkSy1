"use client";

import { useCallback, useSyncExternalStore } from "react";

export type AppRoute =
  | { name: "home" }
  | { name: "library" }
  | { name: "login" }
  | { name: "register" }
  | { name: "dashboard" }
  | { name: "lesson"; slug: string };

/**
 * ADR-003: the whole learner app lives on the single public `/` route and
 * navigates with the URL hash. This keeps one deployable entry point while
 * behaving like a multi-page app.
 */
export function parseHash(hash: string): AppRoute {
  const clean = hash.replace(/^#\/?/, "").split("?")[0];
  const parts = clean.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  switch (parts[0]) {
    case "library":
      return { name: "library" };
    case "login":
      return { name: "login" };
    case "register":
      return { name: "register" };
    case "dashboard":
      return { name: "dashboard" };
    case "lesson": {
      const slug = parts[1] ?? "";
      return slug ? { name: "lesson", slug } : { name: "library" };
    }
    default:
      return { name: "home" };
  }
}

export function routeToHash(route: AppRoute): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "library":
      return "#/library";
    case "login":
      return "#/login";
    case "register":
      return "#/register";
    case "dashboard":
      return "#/dashboard";
    case "lesson":
      return `#/lesson/${route.slug}`;
  }
}

const HOME_ROUTE: AppRoute = { name: "home" };

function subscribe(callback: () => void): () => void {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

// Snapshot cache: useSyncExternalStore requires a stable reference while the
// hash is unchanged.
let cachedHash = "";
let cachedRoute: AppRoute = HOME_ROUTE;

function getSnapshot(): AppRoute {
  const hash = window.location.hash;
  if (hash !== cachedHash) {
    cachedHash = hash;
    cachedRoute = parseHash(hash);
  }
  return cachedRoute;
}

function getServerSnapshot(): AppRoute {
  return HOME_ROUTE;
}

/**
 * Hash router built on useSyncExternalStore so that SSR renders the home
 * route and hydration never mismatches; after hydration the real hash is
 * applied without a full re-mount.
 */
export function useHashRoute(): {
  route: AppRoute;
  navigate: (route: AppRoute) => void;
} {
  const route = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const navigate = useCallback((next: AppRoute) => {
    window.location.hash = routeToHash(next);
  }, []);

  return { route, navigate };
}
