"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getIsDark = () => document.documentElement.classList.contains("dark");

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getIsDark, () => false);

  function toggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-lg shadow-sm transition hover:border-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-neutral-700 dark:bg-neutral-900"
    >
      <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
