import { createEffect, Show } from "solid-js";
import { createSignal } from "solid-js";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
export default function ThemeToggler() {
  const [darkMode, setDarkMode] = createSignal(false);

  const applyDarkMode = () => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  };

  const applyLightMode = () => {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  };

  createEffect(() => {
    const hasThemeKey = "theme" in localStorage;
    const darkInStorage = localStorage.theme === "dark";
    const darkColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    darkInStorage || (!hasThemeKey && darkColorScheme)
      ? applyDarkMode()
      : applyLightMode();
  });
  const handleToggle = () => {
    darkMode() ? applyLightMode() : applyDarkMode();
  };
  return (
    <button onClick={handleToggle}>
      <Show when={darkMode()} fallback={<MoonIcon />}>
        <SunIcon />
      </Show>
    </button>
  );
}
