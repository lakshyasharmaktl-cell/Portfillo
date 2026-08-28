import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
  FaLinkedin, FaTwitter, FaPaperPlane, FaCheckCircle
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const contactInfo = [
  {
    icon: <FaEnvelope />,
    iconColor: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    label: "Email",
    value: "yourname@email.com",
    href: "mailto:yourname@email.com",
  },
  {
    icon: <FaPhone />,
    iconColor: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: <FaMapMarkerAlt />,
    iconColor: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    label: "Location",
    value: "Kaithal, Haryana, India",
    href: "https://maps.google.com/?q=Kaithal+Haryana",
  },
];

const socials = [
  { icon: <FaGithub />,   href: "https://github.com",   label: "GitHub",   hover: "hover:bg-gray-900 hover:text-white hover:border-gray-900" },
  { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn", hover: "hover:bg-blue-600 hover:text-white hover:border-blue-600" },
  { icon: <FaTwitter />,  href: "https://twitter.com",  label: "Twitter",  hover: "hover:bg-sky-500 hover:text-white hover:border-sky-500" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 text-violet-600 text-sm font-semibold rounded-full border border-violet-100 mb-4">
            <HiOutlineSparkles className="animate-pulse" /> Available for Work
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
              Touch
            </span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind? I&apos;m a MERN Stack developer from Kaithal — let&apos;s build something great.
          </p>
        </motion.div>
      </div>

      {/* ══════════════ CONTENT ROW ══════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Left Panel ── */}
          <motion.div variants={itemVariants} className="lg:w-2/5 space-y-4">
            {/* Contact cards */}
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className={`flex items-center gap-4 p-4 ${info.bg} border ${info.border} rounded-2xl group transition-all`}
              >
                <div className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm ${info.iconColor}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{info.label}</p>
                  <p className="text-sm font-bold text-gray-800 group-hover:text-violet-600 transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Socials */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-gray-400 mb-3">Find me online</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={s.label}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 text-xl transition-all ${s.hover}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl p-5 text-white mt-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold">Currently Available</span>
              </div>
              <p className="text-violet-200 text-xs leading-relaxed">
                Open to freelance, full-time, and collaborations. Based in Kaithal — open to remote too.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right — Form ── */}
          <motion.div variants={itemVariants} className="lg:flex-1">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              {sent ? (
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <FaCheckCircle className="text-6xl text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent! 🎉</h3>
                  <p className="text-gray-400 text-sm">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Send a Message</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { name: "name",  label: "Your Name",      type: "text",  placeholder: "John Doe" },
                      { name: "email", label: "Email Address",   type: "email", placeholder: "john@example.com" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="text-xs font-semibold text-gray-500 block mb-1.5">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name]}
                          onChange={handleChange}
                          required
                          placeholder={f.placeholder}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-violet-400 focus:bg-white transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-violet-400 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-500 block mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-violet-400 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <><FaPaperPlane /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

      </div>
      </section>
    </motion.section>
  );
}
