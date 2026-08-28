import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaTwitter, FaArrowRight,
  FaDownload, FaReact, FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiExpress } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const techBadges = [
  { icon: <FaReact style={{ color: "#61DAFB" }} />,       label: "React" },
  { icon: <SiTypescript style={{ color: "#3178C6" }} />,  label: "TypeScript" },
  { icon: <FaNodeJs style={{ color: "#339933" }} />,      label: "Node.js" },
  { icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, label: "Tailwind" },
  { icon: <SiMongodb style={{ color: "#47A248" }} />,     label: "MongoDB" },
];

const stats = [
  { value: "4+",  label: "Projects Shipped" },
  { value: "2+",  label: "Years Learning"   },
  { value: "5+",  label: "Tech Stacks"      },
  { value: "∞",   label: "Lines of Code"    },
];

export default function Home() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -40, transition: { duration: 0.25 } }}
      className="min-h-screen bg-white"
    >
      {/* ══════════════ HERO ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-28 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left ── */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-100 rounded-full text-violet-600 text-sm font-semibold">
                <HiOutlineSparkles className="animate-pulse" />
                Available for Work
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Hi, I&apos;m a{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
                  Full Stack
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 280 8" fill="none">
                  <motion.path
                    d="M2 6 C60 1,180 1,278 6"
                    stroke="url(#u)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="u" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />Developer
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              MERN Stack developer from <strong className="text-gray-600">Kaithal, Haryana</strong>.
              I craft scalable web apps with clean code and great user experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200"
                >
                  View Projects <FaArrowRight />
                </motion.button>
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl border border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-all"
              >
                <FaDownload /> Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              <span className="text-gray-400 text-sm">Find me on</span>
              {[
                { icon: <FaGithub />,   href: "https://github.com",   label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <FaTwitter />,  href: "https://twitter.com",  label: "Twitter" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-600 hover:text-violet-600 hover:border-violet-200 transition-colors text-lg"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right — Profile ── */}
          <motion.div variants={itemVariants} className="flex-1 flex justify-center">
            <div className="relative">
              {/* Spinning rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-violet-200 scale-110"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-100 scale-125"
              />

              {/* Photo */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-110 h-110 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-violet-100"
              >
                <img
                  src="https://res.cloudinary.com/dzskwfinc/image/upload/v1785651957/pic_ml0vjx.png"
                  alt="MERN Stack Developer Kaithal"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating tech badges
              {techBadges.map((tech, i) => (
                <motion.div
                  key={tech.label}
                  className="absolute flex items-center gap-1.5 bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-700"
                  style={{
                    top: `${10 + i * 18}%`,
                    left: i % 2 === 0 ? "-32%" : "auto",
                    right: i % 2 !== 0 ? "-32%" : "auto",
                  }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                >
                  <span className="text-base">{tech.icon}</span>
                  {tech.label}
                </motion.div>
              ))} */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, boxShadow: "0 18px 40px rgba(124,58,237,0.10)" }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm transition-all"
            >
              <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════ CTA BANNER ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-violet-200"
        >
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">Let&apos;s build something great together</h3>
            <p className="text-violet-200 text-sm">Open to freelance &amp; full-time opportunities — Kaithal &amp; Remote</p>
          </div>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-white text-violet-600 font-bold rounded-xl hover:bg-violet-50 transition-colors whitespace-nowrap"
            >
              Get in Touch <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}
