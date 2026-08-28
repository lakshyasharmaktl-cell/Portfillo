import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiVercel } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const projects = [
  {
    id: 1,
    title: "Loopix",
    tagline: "Social Media Platform",
    description: "A full-stack social media app where users post, like, comment, follow each other and explore content in real-time. Built with the complete MERN stack.",
    live: "https://loopix-three.vercel.app/",
    github: "#",
    category: "Full Stack",
    featured: true,
    gradient: "from-violet-500 to-purple-700",
    emoji: "🔁",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    icons: [
      <FaReact className="text-sky-400" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-400" />,
      <SiTailwindcss className="text-cyan-400" />,
    ],
    stats: [{ label: "Auth", value: "JWT" }, { label: "Feed", value: "Real-time" }],
  },
  {
    id: 2,
    title: "Whisky Hub",
    tagline: "E-Commerce Store",
    description: "A fully featured e-commerce platform for premium whisky products — product listings, cart management, user authentication, and order handling.",
    live: "https://wikshy-project.vercel.app/",
    github: "#",
    category: "Full Stack",
    featured: true,
    gradient: "from-amber-500 to-orange-700",
    emoji: "🥃",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    icons: [
      <FaReact className="text-sky-400" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-400" />,
      <SiExpress className="text-gray-400" />,
    ],
    stats: [{ label: "Cart", value: "Dynamic" }, { label: "Auth", value: "Secure" }],
  },
  {
    id: 3,
    title: "Hartron Project",
    tagline: "Government Portal",
    description: "A professional web portal for Hartron — providing structured information, services and resources for citizens and staff with clean, accessible UI.",
    live: "https://hartron-frontend-one.vercel.app/",
    github: "#",
    category: "Frontend",
    featured: false,
    gradient: "from-blue-500 to-indigo-700",
    emoji: "🏛️",
    tags: ["React", "Tailwind CSS", "Responsive", "Vercel"],
    icons: [
      <FaReact className="text-sky-400" />,
      <SiTailwindcss className="text-cyan-400" />,
      <SiVercel className="text-gray-800" />,
    ],
    stats: [{ label: "Type", value: "Portal" }, { label: "Design", value: "Responsive" }],
  },
  {
    id: 4,
    title: "Olax",
    tagline: "Marketplace Platform",
    description: "An OLX-inspired classified ads marketplace. Users can list items, browse categories and connect with buyers/sellers — full CRUD throughout.",
    live: "https://olax-rqos.vercel.app/",
    github: "#",
    category: "Full Stack",
    featured: false,
    gradient: "from-teal-500 to-green-700",
    emoji: "🛒",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    icons: [
      <FaReact className="text-sky-400" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-400" />,
      <SiTailwindcss className="text-cyan-400" />,
    ],
    stats: [{ label: "CRUD", value: "Full" }, { label: "Listings", value: "Dynamic" }],
  },
];

const categories = ["All"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-white"
    >
      {/* ── Header ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-8 text-center">
        <motion.div variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-600 text-sm font-semibold rounded-full border border-violet-100 mb-4">
            What I&apos;ve Built
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Real-world applications built with MERN — every one shipped to production and live.
          </p>
        </motion.div>
      </div>

      {/* ══════════════ FILTERS ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-8">
        <motion.div variants={itemVariants} className="flex justify-center flex-wrap gap-2">
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
      </section>

      {/* ══════════════ GRID ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-violet-100 transition-all duration-300"
              >
                {/* Banner */}
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="absolute rounded-full border-2 border-white"
                        style={{ width: `${70 + i * 45}px`, height: `${70 + i * 45}px` }} />
                    ))}
                  </div>
                  <div className="relative text-center">
                    <div className="text-4xl mb-1">{project.emoji}</div>
                    <h2 className="text-3xl font-black text-white tracking-tight drop-shadow">{project.title}</h2>
                    <p className="text-white/75 text-xs font-medium mt-0.5">{project.tagline}</p>
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                      ⭐ Featured
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-xs font-medium">Live</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Stats row */}
                  <div className="flex gap-3 mb-4">
                    {project.stats.map((s) => (
                      <div key={s.label} className="bg-gray-50 rounded-xl px-3 py-2 flex-1 text-center border border-gray-100">
                        <p className="text-xs text-gray-400">{s.label}</p>
                        <p className="text-sm font-bold text-gray-800">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tech + tags row */}
                  <div className="flex items-center gap-2 mb-5 flex-wrap">
                    {project.icons.map((icon, i) => (
                      <span key={i} className="text-xl">{icon}</span>
                    ))}
                    <div className="ml-auto flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-violet-50 text-violet-600 rounded-lg font-medium border border-violet-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors shadow-md shadow-violet-200"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-gray-400 mb-4 text-sm">More projects on the way — stay tuned!</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
          >
            <FaGithub /> View GitHub Profile
          </motion.a>
        </motion.div>
      </section>
    </motion.section>
  );
}
