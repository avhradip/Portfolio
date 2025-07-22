import React from "react";
import { education } from "../../constants"; // Your education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-32 bg-gradient-to-b from-[#100022] via-[#1a0033] to-[#0e001e] text-white font-sans"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
          A brief timeline of my academic journey and the foundations that shaped my development mindset.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative border-l-4 border-purple-600 ml-4 sm:ml-10">
        {education.map((edu, index) => (
          <div key={edu.id} className="mb-12 pl-6 relative group">
            {/* Circle */}
            <div className="absolute -left-3.5 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white group-hover:scale-125 transition" />

            {/* Card */}
            <div className="bg-[#1f1f2e] border border-purple-800/40 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition duration-300">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="w-14 h-14 rounded-md overflow-hidden bg-white p-1">
                  <img src={edu.img} alt={edu.school} className="w-full h-full object-cover rounded" />
                </div>

                {/* School Info */}
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-gray-300">{edu.school}</p>
                  <p className="text-xs text-gray-400 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
