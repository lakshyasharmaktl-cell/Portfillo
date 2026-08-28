import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt,
  FaJs, FaDatabase
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiRedux,
  SiPostman, SiVercel, SiVite, SiSocketdotio, SiFigma, SiNextdotjs
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const categories = ["All"];

const skills = [
  // Frontend
  { name: "HTML5",       icon: <FaHtml5 />,         color: "#E34F26", bg: "#FFF0EB", category: "Frontend", level: "Expert" },
  { name: "CSS3",        icon: <FaCss3Alt />,        color: "#1572B6", bg: "#EBF4FF", category: "Frontend", level: "Expert" },
  { name: "JavaScript",  icon: <FaJs />,             color: "#F7DF1E", bg: "#FEFBE8", category: "Frontend", level: "Advanced" },
  { name: "TypeScript",  icon: <SiTypescript />,     color: "#3178C6", bg: "#EBF3FF", category: "Frontend", level: "Intermediate" },
  { name: "React.js",    icon: <FaReact />,          color: "#61DAFB", bg: "#E8FAFE", category: "Frontend", level: "Advanced" },
  { name: "Redux",       icon: <SiRedux />,          color: "#764ABC", bg: "#F3EDFF", category: "Frontend", level: "Intermediate" },
  { name: "Tailwind",    icon: <SiTailwindcss />,    color: "#06B6D4", bg: "#E8FBFF", category: "Frontend", level: "Expert" },
  { name: "Next.js",     icon: <SiNextdotjs />,      color: "#000000", bg: "#F0F0F0", category: "Frontend", level: "Beginner" },
  // Backend
  { name: "Node.js",     icon: <FaNodeJs />,         color: "#339933", bg: "#EDFAED", category: "Backend", level: "Advanced" },
  { name: "Express.js",  icon: <SiExpress />,        color: "#404D59", bg: "#F0F2F4", category: "Backend", level: "Advanced" },
  { name: "MongoDB",     icon: <SiMongodb />,        color: "#47A248", bg: "#EDFAED", category: "Backend", level: "Advanced" },
  { name: "REST API",    icon: <FaDatabase />,       color: "#6366F1", bg: "#EEEEFF", category: "Backend", level: "Advanced" },
  { name: "Socket.io",   icon: <SiSocketdotio />,    color: "#010101", bg: "#F0F0F0", category: "Backend", level: "Intermediate" },
  // Tools
  { name: "Git",         icon: <FaGitAlt />,         color: "#F05032", bg: "#FFF0EE", category: "Tools", level: "Advanced" },
  { name: "GitHub",      icon: <FaGithub />,         color: "#181717", bg: "#F0F0F0", category: "Tools", level: "Advanced" },
  { name: "Postman",     icon: <SiPostman />,        color: "#FF6C37", bg: "#FFF2ED", category: "Tools", level: "Advanced" },
  { name: "Vite",        icon: <SiVite />,           color: "#646CFF", bg: "#EEEEFF", category: "Tools", level: "Advanced" },
  { name: "Vercel",      icon: <SiVercel />,         color: "#000000", bg: "#F0F0F0", category: "Tools", level: "Advanced" },
  { name: "Figma",       icon: <SiFigma />,          color: "#F24E1E", bg: "#FFF0EE", category: "Tools", level: "Beginner" },
];

const levelConfig = {
  Expert:       { label: "Expert",       dot: "bg-violet-600", text: "text-violet-700", bg: "bg-violet-50 border-violet-200" },
  Advanced:     { label: "Advanced",     dot: "bg-blue-500",   text: "text-blue-700",   bg: "bg-blue-50 border-blue-200" },
  Intermediate: { label: "Intermediate", dot: "bg-amber-500",  text: "text-amber-700",  bg: "bg-amber-50 border-amber-200" },
  Beginner:     { label: "Beginner",     dot: "bg-gray-400",   text: "text-gray-600",   bg: "bg-gray-50 border-gray-200" },
};

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4 sm:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-600 text-sm font-semibold rounded-full border border-violet-100 mb-4">
            Tech Stack
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Skills
            </span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-base">
            Technologies I use to build full-stack MERN applications — from pixel-perfect UIs to scalable APIs.
          </p>
        </motion.div>

        {/* ── Filter Tabs ── */}
        <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Skills Icon Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filtered.map((skill, i) => {
              const lv = levelConfig[skill.level];
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.03, boxShadow: "0 20px 40px rgba(124,58,237,0.12)" }}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default shadow-sm transition-all duration-300"
                >
                  {/* Icon circle */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: skill.bg, color: skill.color }}
                  >
                    {skill.icon}
                  </div>

                  {/* Name */}
                  <p className="font-bold text-gray-800 text-sm text-center leading-tight">{skill.name}</p>

                  {/* Level badge */}
                  <span className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border ${lv.bg} ${lv.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${lv.dot}`} />
                    {lv.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Legend ── */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-4">
          {Object.entries(levelConfig).map(([key, val]) => (
            <div key={key} className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold ${val.bg} ${val.text}`}>
              <span className={`w-2 h-2 rounded-full ${val.dot}`} />
              {val.label}
            </div>
          ))}
        </motion.div>

        {/* ── Soft Skills Strip ── */}
        <motion.div variants={itemVariants} className="mt-14 bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100 rounded-3xl p-8">
          <h3 className="text-center font-bold text-gray-900 text-lg mb-6">Also Good At</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Clean Code", "Problem Solving", "Responsive Design",
              "API Integration", "State Management", "UI/UX Basics",
              "Code Review", "Performance Optimization", "Agile / Scrum",
              "Debugging", "Team Collaboration", "REST Architecture",
            ].map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ scale: 1.06 }}
                className="px-4 py-2 bg-white border border-violet-100 text-gray-600 text-sm font-medium rounded-xl shadow-sm hover:border-violet-400 hover:text-violet-600 transition-colors cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
