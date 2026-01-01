import { useState } from "react";

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
          Madhav Portfolio
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-200 font-medium">
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact
          </a>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden px-3 py-1 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-2 p-4 bg-blue-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-b-lg shadow-inner">
          <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
}
