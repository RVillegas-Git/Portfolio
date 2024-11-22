import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

// Project Component for each project display
const Project = ({ title, gifUrl, downloadLink, description }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full lg:w-1/3 xl:w-1/4 mx-auto mb-8">
      <div className="flex flex-col items-center mb-4">
        {/* Display GIF */}
        <img
          src={gifUrl} // Actual GIF URL for each project
          alt={title}
          className="rounded mb-4 w-[200rem] h-[20rem] object-cover" // 5 times wider (width: 200rem) and consistent height (height: 20rem)
        />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        {/* Download Link */}
        <a
          href={downloadLink} // Actual file download link for each project
          className="text-teal-400 hover:text-teal-600"
          download
        >
          Download File
        </a>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="text-white py-20 relative overflow-hidden">
      <div className="container px-6 md:px-20 lg:px-32 mx-auto">
        <div className="text-center mb-20 animate__animated animate__fadeIn">
          <ChipIcon className="w-12 inline-block mb-4 text-teal-400" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-white mb-4">
            Course and Personal Projects
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200 mb-12">
            Here are some projects and GIFs showcasing my skills. You can download the files by clicking the links below each GIF.
          </p>
        </div>

        {/* Projects in a Left-to-Right Layout with Wrap */}
        <div className="flex flex-wrap justify-between gap-12">
          {/* First Project Section */}
          <Project
            title="Project 1"
            gifUrl="1st Project.gif" // Path from the public folder
            downloadLink="1st Project.gif" // Path for download
            description="This project was developed with GDevelop."
          />
          {/* Second Project Section */}
          <Project
            title="Project 2"
            gifUrl="2nd Project.gif" // Path from the public folder
            downloadLink="2nd Project.gif" // Path for download
            description="This project was developed with Adobe Flash CS3."
          />
          {/* Third Project Section */}
          <Project
            title="Project 3"
            gifUrl="3rd Project.gif" // Path from the public folder
            downloadLink="3rd Project.gif" // Path for download
            description="This project was developed with Godot 4.2.2."
          />
        </div>
      </div>
    </section>
  );
}
