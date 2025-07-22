import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[7vw] lg:px-[20vw] font-sans relative bg-[#0f0c29]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto font-medium">
          A showcase of the applications I've built, featuring modern design,
          scalable architecture, and real-world problem-solving.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#1e1e2f] border border-purple-800/40 rounded-xl shadow-md cursor-pointer transition hover:shadow-purple-500/30 hover:-translate-y-2 duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#2b2b3f] text-purple-400 text-xs px-3 py-1 rounded-full font-semibold hover:scale-105 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 backdrop-blur-sm">
          <div className="bg-[#1c1c2e] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto example relative animate-fadeIn z-40">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-xl w-full max-h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#2b2b3f] text-purple-400 text-xs px-3 py-1 rounded-full font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-200 text-center py-2 rounded-xl text-sm font-semibold transition"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white text-center py-2 rounded-xl text-sm font-semibold transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
