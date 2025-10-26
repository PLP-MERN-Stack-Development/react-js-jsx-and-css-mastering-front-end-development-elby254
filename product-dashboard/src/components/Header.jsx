import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-800 border-b shadow-sm transition-colors duration-300">
      <div className="mx-auto max-w-5xl p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Product Dashboard</h1>

        {/* Dark/Light toggle button */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded text-sm bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
        >
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>

        <span className="text-slate-600 dark:text-slate-300 text-sm">
          MERN Week 3 Assignment
        </span>
      </div>
    </header>
  );
}

