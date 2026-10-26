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
      className="flex size-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-base shadow-sm backdrop-blur-xl transition duration-300 hover:bg-white/65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
    >
      <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}
