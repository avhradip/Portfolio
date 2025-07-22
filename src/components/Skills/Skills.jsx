import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-6 sm:px-10 lg:px-32 font-sans bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="w-20 h-1 bg-purple-500 mx-auto mt-3"></div>
      <p className="text-gray-300 mt-4 text-base sm:text-lg max-w-xl mx-auto">
        My technical toolbox includes frameworks and libraries I use to build dynamic, scalable, and responsive web applications.
      </p>
    </div>

    {/* Skill Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#1e1e2f] border border-purple-700/40 p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-purple-400">
            {category.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-[#2c2c3e] border border-gray-700 px-4 py-2 rounded-full hover:scale-105 transition"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-200">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
