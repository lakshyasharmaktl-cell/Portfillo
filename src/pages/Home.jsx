import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGithub, FaDownload, FaArrowRight,
  FaDatabase, FaCode, FaRocket, FaStar
} from "react-icons/fa";
import {
  SiMongodb, SiTailwindcss, SiExpress, SiTypescript, SiJavascript
} from "react-icons/si";
import { HiOutlineSparkles, HiLocationMarker } from "react-icons/hi";

/* ─── Typing effect ─── */
function useTypingEffect(words, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let t;
    if (!deleting && charIdx <= current.length) {
      setDisplayed(current.slice(0, charIdx));
      t = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      setDisplayed(current.slice(0, charIdx));
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => (w + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return displayed;
}

/* ─── Count-up component (avoids hook-in-map) ─── */
function StatCard({ icon, value, suffix, label, color }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = performance.now();
        const duration = 1600;
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.floor(p * value));
          if (p < 1) requestAnimationFrame(step);
          else setCount(value);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return (
    <div ref={ref}
      className="group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-violet-100">
      <div className={`text-2xl mb-2 flex justify-center ${color}`}>{icon}</div>
      <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
        {count}{suffix}
      </p>
      <p className="text-sm text-gray-400 mt-1 font-medium">{label}</p>
    </div>
  );
}

/* ─── Mouse parallax ─── */
function useMouseParallax(strength = 14) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });
  useEffect(() => {
    const move = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set(((e.clientX - cx) / cx) * strength);
      y.set(((e.clientY - cy) / cy) * strength);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, strength]);
  return { x: sx, y: sy };
}

/* ─── Data ─── */
const stack = [
  { icon: <FaReact />,       label: "React",      color: "#61DAFB", bg: "#e6f9ff" },
  { icon: <FaNodeJs />,      label: "Node.js",    color: "#339933", bg: "#e6f7e6" },
  { icon: <SiMongodb />,     label: "MongoDB",    color: "#47A248", bg: "#e7f5e7" },
  { icon: <SiExpress />,     label: "Express",    color: "#666",    bg: "#f3f3f3" },
  { icon: <SiTailwindcss />, label: "Tailwind",   color: "#06B6D4", bg: "#e0f9fb" },
  { icon: <SiJavascript />,  label: "JavaScript", color: "#c8a800", bg: "#fffde6" },
  { icon: <SiTypescript />,  label: "TypeScript", color: "#3178C6", bg: "#e3ecfb" },
  { icon: <FaDatabase />,    label: "REST APIs",  color: "#a855f7", bg: "#f5eeff" },
];

const statsData = [
  { value: 4,   suffix: "+", label: "Projects Shipped",  icon: <FaRocket />, color: "text-violet-500" },
  { value: 1,   suffix: "+", label: "Years of Learning", icon: <FaStar />,   color: "text-indigo-500" },
  { value: 7,   suffix: "+", label: "Technologies",      icon: <FaCode />,   color: "text-cyan-500"   },
  { value: 500, suffix: "+", label: "Commits Pushed",    icon: <FaGithub />, color: "text-gray-600"   },
];

const floatPos = [
  { top: "4%",  left: "-28%" },
  { top: "26%", left: "-36%" },
  { top: "52%", left: "-30%" },
  { top: "76%", left: "-22%" },
  { top: "10%", right: "-30%" },
  { top: "40%", right: "-34%" },
  { top: "66%", right: "-28%" },
];

/* ══════════════ COMPONENT ══════════════ */
export default function Home() {
  const typedText = useTypingEffect(
    ["Full Stack Developer", "MERN Specialist", "Problem Solver", "Clean Code Advocate"]
  );
  const { x: mx, y: my } = useMouseParallax();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">

      {/* ── Blobs + dot grid ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-100 blur-3xl opacity-60" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-48 rounded-full bg-violet-50 blur-3xl opacity-70" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#7c3aed" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* ══ HERO ══ */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 pt-32 pb-10 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-10">

          {/* Left */}
          <div className="flex-1 space-y-7 text-center lg:text-left">

           

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
             
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
                  Lakshya's 
                </span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="h-12 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl font-bold text-gray-700">
                {typedText}
                <span className="inline-block w-0.5 h-8 bg-violet-500 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              MERN Stack developer crafting scalable web apps with clean code,
              smooth animations and exceptional user experiences.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <motion.button onClick={() => scrollTo("projects")}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(124,58,237,0.28)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg shadow-violet-200 transition-all text-base cursor-pointer">
                View Projects <FaArrowRight />
              </motion.button>

              <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 bg-white text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-violet-300 hover:text-violet-600 transition-all text-base">
                <FaDownload /> Resume
              </motion.a>

              <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-3.5 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all text-base">
                <FaGithub /> GitHub
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {["React", "Node.js", "MongoDB", "Express", "Tailwind"].map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            style={{ x: mx, y: my }}
            className="flex-shrink-0 flex justify-center relative"
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 via-indigo-400 to-cyan-400 blur-2xl opacity-30 scale-110 animate-pulse" />
              {/* Spinning rings */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-violet-300 scale-[1.14]" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200 scale-[1.26]" />
              {/* Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-violet-200">
                <img src="https://res.cloudinary.com/dzskwfinc/image/upload/v1785651957/pic_ml0vjx.png"
                  alt="Laxxy MERN Stack Developer Kaithal"
                  className="w-full h-full object-cover" />
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══ STATS ══ */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>

      {/* ══ TECH STRIP ══ */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 pb-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}>
          <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-5">
            Tech I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech, i) => (
              <motion.div key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }} viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl border shadow-sm font-semibold text-sm transition-all duration-200"
                style={{ background: tech.bg, color: tech.color, borderColor: tech.color + "40" }}>
                <span className="text-lg">{tech.icon}</span>
                {tech.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ══ CTA BANNER ══ */}
      <div className="max-w-6xl mx-auto px-5 sm:px-10 pb-16 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-violet-300">
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="text-white text-center md:text-left relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-1">Let&apos;s build something great together 🚀</h3>
            <p className="text-violet-200 text-sm md:text-base">Open to freelance &amp; full-time — Kaithal &amp; Remote</p>
          </div>
          <motion.button onClick={() => scrollTo("contact")}
            whileHover={{ scale: 1.06, boxShadow: "0 8px 30px rgba(255,255,255,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 flex items-center gap-2 px-8 py-3.5 bg-white text-violet-600 font-bold rounded-2xl hover:bg-violet-50 transition-colors whitespace-nowrap text-base shadow-lg cursor-pointer">
            Get in Touch <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-gray-200 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2.5 bg-violet-400 rounded-full" />
        </motion.div>
      </motion.div>

    </section>
  );
}
