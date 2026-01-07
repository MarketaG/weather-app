import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { Theme } from "../context/ThemeContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("weather-theme");
    return (saved as Theme) || "light";
  });

  useEffect(() => {
    localStorage.setItem("weather-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
