import Header from "./components/Header";
import Home from "./components/Home";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      {/* Apply background classes that respect Tailwind's dark mode */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}
