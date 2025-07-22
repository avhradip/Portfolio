import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-[7vw] md:px-[10vw] lg:px-[16vw] font-sans text-white"
      aria-label="About Me Section"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-1 text-[#8245ec]">
            Avhradip Ghosh
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 mb-4 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <div className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
            <p>
              I’m a passionate <strong className="text-blue-400">Full Stack Developer</strong> who enjoys building efficient, scalable, and user-friendly web applications using technologies like <strong className="text-blue-400">React.js</strong>, <strong className="text-blue-400">Next.js</strong>, <strong className="text-blue-400">Node.js</strong>, and <strong className="text-blue-400">MongoDB</strong>.
            </p>
            <p className="mt-4">
              I love transforming ideas into clean, functional code. From crafting beautiful user interfaces to designing robust backend systems, I focus on building apps that are fast, accessible, and responsive.
            </p>
            <p className="mt-4">
              I’m currently open to opportunities where I can contribute, learn, and grow alongside experienced developers in a collaborative environment.
            </p>
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1YwPy2MNgDhsW7UWeFuhUVmFotC8ttl8c/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-bold mt-8 py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 4px #8245ec, 0 0 20px #8245ec',
            }}
            aria-label="Download my resume"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] bg-white/10 backdrop-blur-lg border border-purple-600 rounded-2xl shadow-[0_8px_30px_rgba(130,69,236,0.3)] hover:shadow-purple-500 transition-all duration-500 p-2"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1200}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src={profileImage}
                alt="Avhradip Ghosh profile"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
