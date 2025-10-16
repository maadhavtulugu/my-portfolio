import pro1 from "../assets/pro1.jpg";
import pro2 from "../assets/pro2.jpg";
import pro3 from "../assets/pro3.jpg";

export default function Portfolio() {
  const projects = [
    { title: "Netflix Clone", img: pro1, link: "#" },
    { title: "Quiz Web App", img: pro2, link: "#" },
    { title: "Food Delivery App", img: pro3, link: "#" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-r from-teal-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Portfolio
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            className="relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-300"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 bg-opacity-20 opacity-0 hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
              <h3 className="text-gray-900 dark:text-white text-xl font-semibold">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
