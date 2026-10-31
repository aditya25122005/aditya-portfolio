import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "PADAM TRADERS",
      category: "Full Stack",
      subtitle: "MERN E-Commerce Platform",
      desc: "Production-grade e-commerce application featuring cross-subdomain HTTP-only JWT auth, Nodemailer OTP verification, Google OAuth 2.0, RBAC (Customer/Seller/Admin), cart/wishlist management, and dynamic reviews.",
      tags: ["React 18", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Cookies", "Passport.js", "Nodemailer", "Tailwind CSS"],
      github: "https://github.com/aditya25122005/PADAM_TRADERS",
      live: "https://padam-traders-frontend.onrender.com"
    },
    {
      title: "Placement Prep Hub",
      category: "Full Stack",
      subtitle: "Smart Analytics & Placement Portal",
      desc: "Full-stack placement preparation portal with a 5-stage Quality Gate content moderation loop, Student Mastery analytics dashboard with Recharts, dedicated DSA Vault with company tags, dynamic quiz engine, and integrated LeetCode profile tracking.",
      tags: ["React 19", "Express 5", "MongoDB Atlas", "Mongoose", "Framer Motion", "Recharts", "Axios", "Multer", "Tailwind CSS"],
      github: "https://github.com/aditya25122005/PLACEMENT-HUB",
      live: "https://placement-hub-l2w2.vercel.app"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <span className="text-sky-400 font-mono text-xs uppercase tracking-widest px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full inline-block mb-3">
            Production Software
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <FolderGit2 className="text-sky-400" /> Featured Projects
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700/60 w-fit">
          {["All", "Full Stack"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === cat 
                  ? "bg-sky-500 text-white shadow-md" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Detailed Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-8 flex flex-col justify-between hover:border-sky-500/50 transition duration-300 shadow-xl hover:-translate-y-1">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                  {proj.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{proj.subtitle}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-sky-300 transition">
                {proj.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {proj.desc}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] font-mono font-semibold text-slate-300 bg-slate-900/80 border border-slate-700/80 px-3 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-5 pt-4 border-t border-slate-700/50">
              <a 
                href={proj.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center text-xs font-bold text-slate-200 hover:text-sky-400 gap-2 transition"
              >
                <FaGithub className="w-4 h-4" /> Source Code
              </a>
              {proj.live !== "#" && (
                <a 
                  href={proj.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center text-xs font-bold text-sky-400 hover:text-sky-300 gap-1.5 transition"
                >
                  <ExternalLink className="w-4 h-4" /> Live Application
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;