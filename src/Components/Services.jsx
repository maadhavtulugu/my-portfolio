export default function Services() {
  const services = [
    { title: "Web Development", desc: "Building responsive and fast websites using modern tools." },
    { title: "UI/UX Design", desc: "Creating intuitive and beautiful user interfaces." },
    { title: "React Applications", desc: "Developing interactive and high-performance React apps." },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Servicesss
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
