import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

const navLinks = [
  { name: "Home",     id: "home"     },
  { name: "About",    id: "about"    },
  { name: "Skills",   id: "skills"   },
  { name: "Projects", id: "projects" },
  { name: "Contact",  id: "contact"  },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.27.135.53.202.76.202.51 0 1.13-.295 1.61-.805.56-.6 1.26-.7 1.71-.521.39.152.74.5.74.965 0 .62-.66 1.44-2.43 1.765l-.04.008c-.57.113-1.15.23-1.63.59l-.01.007c-.35.25-.62.63-.62.97 0 .267.13.52.38.71.01.007.02.014.03.02.84.565 1.77.815 2.68.815.17 0 .34-.01.51-.03.21-.024.4-.036.56-.036 1.06 0 1.56.394 1.56.821 0 .41-.44.838-1.24 1.02-.62.138-1.42.213-2.24.264a4.16 4.16 0 0 0-.58.073c-.13.028-.27.128-.38.228-.47.43-.86.87-1.29 1.11a4.1 4.1 0 0 1-.43.2 4.26 4.26 0 0 1-1.56.308c-.35 0-.72-.042-1.1-.13a4.43 4.43 0 0 0-1.02-.134c-.36 0-.71.046-1.04.14-.38.088-.74.13-1.08.13a4.26 4.26 0 0 1-1.56-.308 4.1 4.1 0 0 1-.43-.2c-.43-.24-.82-.68-1.29-1.11-.11-.1-.25-.2-.38-.228a4.16 4.16 0 0 0-.58-.073c-.82-.05-1.62-.126-2.24-.264C2.44 17.46 2 17.03 2 16.62c0-.427.5-.821 1.56-.821.16 0 .35.012.56.036.17.02.34.03.51.03.91 0 1.84-.25 2.68-.815l.03-.02c.25-.19.38-.443.38-.71 0-.34-.27-.72-.62-.97l-.01-.007c-.48-.36-1.06-.477-1.63-.59l-.04-.008C3.66 13.11 3 12.29 3 11.67c0-.465.35-.813.74-.965.45-.179 1.15-.079 1.71.521.48.51 1.1.805 1.61.805.23 0 .49-.067.76-.202l-.03-.51-.003-.06c-.104-1.628-.23-3.654.299-4.847C9.859 1.069 13.216.793 12.206.793z"/>
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: <InstagramIcon />, cls: "hover:text-pink-500 hover:border-pink-300 hover:bg-pink-50" },
  { label: "LinkedIn",  href: "https://linkedin.com",  icon: <LinkedInIcon />,  cls: "hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50" },
  { label: "Snapchat",  href: "https://snapchat.com",  icon: <SnapchatIcon />,  cls: "hover:text-yellow-500 hover:border-yellow-300 hover:bg-yellow-50" },
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
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
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
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 cursor-pointer">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <FaCode className="text-white text-lg" />
          </motion.div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            <span className="text-violet-600"></span>Portfolio
          </span>
        </button>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <button onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive ? "text-violet-600 font-bold" : "text-gray-600 hover:text-violet-600"
                  }`}>
                  {link.name}
                  {isActive && (
                    <motion.div layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Social icons - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map((s) => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label} whileHover={{ scale: 1.18, y: -2 }} whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-200 text-gray-500 transition-all duration-200 ${s.cls}`}>
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-gray-700 cursor-pointer">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.name}>
                    <button onClick={() => scrollToSection(link.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        isActive ? "bg-violet-50 text-violet-600 font-bold" : "text-gray-600 hover:bg-gray-50"
                      }`}>
                      {link.name}
                    </button>
                  </li>
                );
              })}
              <li className="flex items-center gap-3 px-3 pt-3 mt-2 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-medium shrink-0">Follow:</span>
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 text-gray-500 transition-all ${s.cls}`}>
                    {s.icon}
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
