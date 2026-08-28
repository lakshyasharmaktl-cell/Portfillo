import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaHeart } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const projects = [
  { name: "Loopix", href: "https://loopix-three.vercel.app/" },
  { name: "Whisky Hub", href: "https://wikshy-project.vercel.app/" },
  { name: "Hartron", href: "https://hartron-frontend-one.vercel.app/" },
  { name: "Olax", href: "https://olax-rqos.vercel.app/" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-14 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <FaCode className="text-white text-lg" />
              </div>
              <span className="text-white text-lg font-bold">
                Dev<span className="text-violet-400">.</span>Portfolio
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              MERN Stack Developer based in Kaithal, Haryana. Building scalable full-stack web applications.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <FaMapLocationDot className="text-violet-400" />
              Kaithal, Haryana, India
            </div>
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />, href: "https://github.com" },
                { icon: <FaLinkedin />, href: "https://linkedin.com" },
                { icon: <FaTwitter />, href: "https://twitter.com" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 bg-gray-800 hover:bg-violet-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all text-sm"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Live Projects</h4>
            <ul className="space-y-2.5">
              {projects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-violet-400 transition-colors"
                  >
                    {p.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Me */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Hire Me</h4>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Available for freelance projects and full-time opportunities. Let&apos;s build something great.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-violet-900/30"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} MERN Stack Developer — Kaithal, Haryana. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <FaHeart className="text-violet-500 text-xs animate-pulse" /> in Kaithal
          </p>
        </div>
      </div>
    </footer>
  );
}
