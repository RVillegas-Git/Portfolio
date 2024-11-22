import React from "react";
import "../styles.css"; // Ensure to link the styles for the animation

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-indigo-800 to-gray-700 text-white py-20 relative overflow-hidden border-t-16 border-r-16 border-b-16 border-l-16 border-white rounded-3xl" // Wider border with visible color
    >
      {/* Infinite Gradient Background */}
      <div className="gradient-background absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Parallax Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-blue-700 opacity-30 z-0"></div>

      <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
        {/* Introduction Section */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 transform transition duration-500 hover:scale-105">
            Hi, I'm Rhugene.
          </h1>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed animate__animated animate__fadeInUp">
            I'm a dedicated student currently studying Information Technology.
            With a strong desire to learn and grow, I am constantly exploring
            new skills and knowledge to apply to real-world projects. This
            portfolio showcases my journey and the work I’ve created along the
            way as I continue to build my expertise.
          </p>

          {/* Image Section */}
          <div className="flex justify-center mb-12 animate__animated animate__fadeInUp">
            <img
              src="/Picture.jpg" // Correct path
              alt="Rhugene's Portrait"
              className="rounded-full shadow-lg w-64 h-64 object-cover hover:scale-110 transform transition duration-500 ease-in-out"
            />
          </div>

          <div className="flex justify-center space-x-6 animate__animated animate__fadeInUp">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-teal-500 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg"
            >
              Contact Info
            </a>
            <a
              href="#education"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-gray-200 bg-gray-800 border-2 border-gray-600 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300 shadow-lg"
            >
              Learn More About Me
            </a>
            {/* New Skills Button */}
            <a
              href="#skills"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg hover:scale-105 transform transition duration-300 shadow-lg"
            >
              My Projects
            </a>
          </div>
        </div>

        {/* Additional Design & Section for a Personal Touch */}
        <div className="mt-16 text-center text-gray-300">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          </h2>
          <p className="text-lg leading-relaxed mb-8"></p>
        </div>
      </div>
    </section>
  );
}
