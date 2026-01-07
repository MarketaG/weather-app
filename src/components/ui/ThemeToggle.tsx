import { useTheme } from "../../context/ThemeContext";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { SunIcon } from "../../assets/icons/SunIcon";
import "./ThemeToggle.scss";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="nav-theme">
      {theme === "dark" ? (
        <MoonIcon className="icons-sm" />
      ) : (
        <SunIcon className="icons-sm" />
      )}
    </button>
  );
}
