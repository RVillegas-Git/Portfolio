import { ChipIcon, AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data"; // Assuming your skills data contains an array of objects with skill name and description

export default function Education() {
  return (
    <div>
      <section id="education" className="py-20">
        <div className="container px-6 md:px-20 lg:px-32 mx-auto flex flex-wrap justify-between relative">
          {/* About Me Section - Top Left */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-6 mt-[-1.25rem]">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="text-lg mt-4">
              {/* Your content here */}
            </p>
          </div>
          

          {/* Education Section - Left Side */}
          <div className="w-full lg:w-1/2 p-6">
            <div className="text-center mb-20 animate__animated animate__fadeIn">
              <AcademicCapIcon className="w-10 inline-block mb-4 text-teal-400" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                My Education
              </h1>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="p-4 md:w-3/4 w-full">
                <div className="h-full bg-gray-800 bg-opacity-40 p-10 rounded">
                  <h2 className="text-2xl font-semibold text-white mb-4">Centro Escolar University Manila</h2>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Tertiary Education</strong>
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Location:</strong> 9 Mendiola St, San Miguel, Manila, 1008 Metro Manila
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Degree:</strong> Bachelor of Science in Information Technology
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Year of Study:</strong> 3rd Year(Present)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="p-4 md:w-3/4 w-full">
                <div className="h-full bg-gray-800 bg-opacity-40 p-10 rounded">
                  <h2 className="text-2xl font-semibold text-white mb-4">Don Bosco Technical College</h2>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Secondary Education</strong>
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Location:</strong> 736 Gen Kalentong, Mandaluyong, 1550 Metro Manila
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Course:</strong> STEM
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Year Graduated:</strong> 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="p-4 md:w-3/4 w-full">
                <div className="h-full bg-gray-800 bg-opacity-40 p-10 rounded">
                  <h2 className="text-2xl font-semibold text-white mb-4">St. John's Academy</h2>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Secondary Education</strong>
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Location:</strong> 148 Valenzuela, San Juan, 1500 Metro Manila
                  </p>
                  <p className="leading-relaxed mb-4 text-gray-300">
                    <strong>Year Graduated:</strong> 2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Right Side */}
          <div className="w-full lg:w-1/2 p-6 text-white">
            <div className="text-center mb-20 animate__animated animate__fadeIn">
              <ChipIcon className="w-12 inline-block mb-4 text-teal-400" />
              <h1 className="sm:text-4xl text-3xl font-semibold title-font text-white mb-4">
                Skills 
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200">
                Here are the key skills I specialize in. These skills help me deliver quality work in coursework and projects.
              </p>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap justify-center items-center gap-12">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-800 text-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-md mx-auto"
                >
                  <div className="flex items-center mb-4">
                    <ChipIcon className="text-teal-400 w-8 h-8 flex-shrink-0 mr-4" />
                    <h2 className="text-2xl font-semibold">{skill.name}</h2>
                  </div>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
