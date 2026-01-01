import myPic from "../assets/madhav1.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-b from-blue-200 to-white dark:from-gray-800 dark:to-gray-900 p-6 md:p-12 gap-8">
      
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I'm Madhav
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-lg mb-6">
          I'm a passionate Frontend Developer creating beautiful and functional web applications.
        </p>
        <a
          href="#portfolio"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
        >
          See My Lastest Work
        </a>
      </div>

      {/* Profile Picture */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={myPic}
          alt="Madhav"
          className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover object-top border-4 border-blue-400 dark:border-blue-600 shadow-xl"
        />
      </div>
    </section>
  );
}
