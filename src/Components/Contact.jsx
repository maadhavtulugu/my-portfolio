export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto px-4">
        <form className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition transform font-medium"
          >
            Send Me Message
          </button>
        </form>
      </div>
    </section>
  );
}
