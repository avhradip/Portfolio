import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#050414]/60 backdrop-blur-md shadow-md" : "bg-transparent"
        } px-6 sm:px-[7vw] lg:px-[15vw]`}
    >
      <div className="flex items-center justify-between py-4 text-white">
        {/* Logo */}
        <div className="text-xl font-extrabold tracking-wider text-white cursor-pointer">
          <span className="text-purple-500">&lt;</span>Avhradip
          <span className="text-purple-500">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-sm">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-purple-400 transition ${activeSection === item.id ? "text-purple-500 font-semibold" : "text-gray-300"
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/avhradip"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/avhradip-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-purple-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-purple-500 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0d23]/90 backdrop-blur-lg rounded-xl shadow-lg mx-2 py-6 px-4 text-center">
          <ul className="space-y-4 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-white transition ${activeSection === item.id ? "text-purple-500 font-semibold" : ""
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex justify-center space-x-5 pt-4">
              <a
                href="https://github.com/avhradip"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/avhradip-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
