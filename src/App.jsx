import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Header with dark mode toggle */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main content */}
      <main className="min-h-screen text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <Hero 
          className="bg-gradient-to-b from-blue-200 via-white to-blue-100 dark:from-gray-800 dark:to-gray-900"
        />

        {/* Services Section */}
        <Services 
          className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        />

        {/* Portfolio Section */}
        <Portfolio 
          className="py-20 bg-gradient-to-r from-teal-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        />

        {/* Testimonials Section */}
        <Testimonials 
          className="py-20 bg-gradient-to-r from-pink-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        />

        {/* Contact Section */}
        <Contact 
          className="py-20 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
        />

        {/* Footer */}
        <Footer className="bg-gradient-to-r from-gray-200 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"/>
      </main>
    </div>
  );
}

export default App;
