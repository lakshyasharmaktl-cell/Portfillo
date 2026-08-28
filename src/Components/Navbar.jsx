import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group cursor-pointer text-left">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center"
          >
            <FaCode className="text-white text-lg" />
          </motion.div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            <span className="text-violet-600"></span>Portfolio
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-violet-600 font-bold"
                      : "text-gray-600 hover:text-violet-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-full"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block px-5 py-2 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors shadow-md shadow-violet-200 cursor-pointer"
        >
          Hire Me
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-violet-50 text-violet-600 font-bold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full px-4 py-3 bg-violet-600 text-white text-sm font-semibold rounded-xl text-center mt-2 cursor-pointer"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

