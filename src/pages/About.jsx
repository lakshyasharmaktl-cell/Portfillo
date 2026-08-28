import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaHeart, FaCode } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const timeline = [
  {
    icon: <FaGraduationCap />,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    year: "2022",
    title: "Started Learning Web Dev",
    desc: "Learnt HTML, CSS, JavaScript and fell in love with coding.",
    border: "border-violet-100",
  },
  {
    icon: <FaCode />,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    year: "2023",
    title: "Mastered MERN Stack",
    desc: "Built full-stack React, Node.js, Express & MongoDB apps.",
    border: "border-indigo-100",
  },
  {
    icon: <FaBriefcase />,
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100",
    year: "2024",
    title: "Freelancing & Client Work",
    desc: "Delivered live web stores, landing pages, and APIs.",
    border: "border-pink-100",
  },
  {
    icon: <FaHeart />,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    year: "2025+",
    title: "Seeking Full-Time Role",
    desc: "Looking to build and scale awesome products with a great team.",
    border: "border-orange-100",
  },
];

const stats = [
  { label: "Location", value: "Kaithal, Haryana" },
  { label: "Experience", value: "1+ Years Coding" },
  { label: "Core Stack", value: "MongoDB, Express, React, Node" },
  { label: "Available", value: "Immediately" },
];

export default function About() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-white"
    >
      {/* ── Header ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center mb-14">
        <motion.div variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-600 text-sm font-semibold rounded-full border border-violet-100 mb-4">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Know More{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              About Lakshya's
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            MERN Stack Developer based in Kaithal, Haryana — building high-performance web products.
          </p>
        </motion.div>
      </div>

      {/* ── Content Grid (No Photo) ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">

          {/* Left Block — Code Terminal representation */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-gray-950 rounded-2xl p-6 shadow-xl border border-gray-800 font-mono text-xs sm:text-sm leading-relaxed text-gray-300 h-full flex flex-col justify-center">
              {/* Terminal header */}
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-gray-800">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-500 text-xs ml-2">laxxy.js</span>
              </div>
              <div className="space-y-1.5">
                <p><span className="text-pink-500">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-green-400">&apos;Laxxy&apos;</span>,</p>
                <p className="pl-4">role: <span className="text-green-400">&apos;MERN Stack Developer&apos;</span>,</p>
                <p className="pl-4">location: <span className="text-green-400">&apos;Kaithal, Haryana, India&apos;</span>,</p>
                <p className="pl-4">skills: [<span className="text-orange-400">&apos;React&apos;</span>, <span className="text-orange-400">&apos;Node.js&apos;</span>, <span className="text-orange-400">&apos;MongoDB&apos;</span>, <span className="text-orange-400">&apos;Express&apos;</span>],</p>
                <p className="pl-4">philosophy: <span className="text-green-400">&apos;Build clean code, solve real problems&apos;</span>,</p>
                <p className="pl-4">coffeeConvertedToCode: <span className="text-blue-400">true</span>,</p>
                <p>&#125;;</p>
                <p className="pt-2 text-gray-500">// Laxxy is ready for freelance and full-time opportunities.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Block — Professional Bio & Stats */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
                MERN Stack Specialist &amp; <br />
                <span className="text-violet-600">Full-Stack Engineer</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                I am a self-taught, dedicated full-stack developer working from <strong className="text-gray-700 font-semibold">Kaithal, Haryana</strong>. 
                I design robust database schemas, clean REST API endpoints, and highly interactive React user interfaces.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                No bloated code. I aim to create lightning-fast loading speeds and responsive layouts that scale gracefully.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-violet-100 transition-colors">
                  <p className="text-xs text-gray-400 mb-1 font-semibold">{item.label}</p>
                  <p className="text-sm font-bold text-gray-800 leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Journey Timeline ── */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">My Coding Timeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeline.map((item) => (
              <div
                key={item.year}
                className={`bg-white border ${item.border} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center text-lg`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-400 tracking-wider">{item.year}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

