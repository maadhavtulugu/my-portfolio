export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company",
      text: "Madhav is amazing! Delivered on time and with excellent quality."
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      text: "Creative, efficient, and very professional."
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Testimonials
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base relative">
              <span className="text-blue-500 dark:text-blue-400 text-2xl mr-2">“</span>
              {t.text}
            </p>
            <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
