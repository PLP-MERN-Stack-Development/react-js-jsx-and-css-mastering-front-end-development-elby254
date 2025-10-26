import { createContext, useState, useEffect } from "react";

// Create context
export const ThemeContext = createContext();

// Provider component to wrap the app
export function ThemeProvider({ children }) {
  // State to track theme: 'light' or 'dark'
  const [theme, setTheme] = useState("light");

  // On mount, check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Whenever theme changes, save to localStorage and toggle 'dark' class on <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
