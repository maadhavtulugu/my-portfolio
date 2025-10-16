export default function Footer() {
  return (
    <footer className="py-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center text-gray-700 dark:text-gray-300 shadow-inner">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">Madhav Portfolio</span> — Made with ❤️ and React
      </p>
    </footer>
  );
}
