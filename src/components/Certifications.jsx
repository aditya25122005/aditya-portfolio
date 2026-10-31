import React, { useState } from 'react';
import { CheckCircle2, BookOpen, Award } from 'lucide-react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  const allCertifications = [
    // Purane Certifications
    {
      title: "Data Structures & Algorithms using Java",
      issuer: "Infosys Springboard",
      category: "Technical",
      date: "Feb 2026",
      desc: "Advanced Data Structures, Algorithms, OOPs, and Problem Solving in Java."
    },
    {
      title: "Python Machine Learning",
      issuer: "Coding Blocks",
      category: "Technical",
      date: "July 2025",
      desc: "Supervised & Unsupervised ML algorithms, model training, and data analysis."
    },
    // NPTEL Certifications
    {
      title: "Software Engineering",
      issuer: "NPTEL / IIT",
      category: "NPTEL",
      date: "NPTEL Certified",
      desc: "Software design patterns, SDLC methodologies, and architectural principles."
    },
    {
      title: "Management Information System (MIS)",
      issuer: "NPTEL / IIT",
      category: "NPTEL",
      date: "NPTEL Certified",
      desc: "Enterprise systems, database integration, IT strategy, and information management."
    },
    {
      title: "E-Business",
      issuer: "NPTEL / IIT",
      category: "NPTEL",
      date: "NPTEL Certified",
      desc: "Digital business models, online payment gateways, e-procurement, and security protocols."
    },
    {
      title: "Understanding Incubation & Entrepreneurship",
      issuer: "NPTEL / IIT",
      category: "NPTEL",
      date: "NPTEL Certified",
      desc: "Startup ecosystem, product validation, venture scalability, and business strategy."
    },
    {
      title: "Leadership and Team Effectiveness",
      issuer: "NPTEL / IIT",
      category: "NPTEL",
      date: "NPTEL Certified",
      desc: "Team dynamics, conflict resolution, managerial decision-making, and organizational behavior."
    },
    {
      title: "Environmental Engineering & Science",
      issuer: "NPTEL / IIT",
      category: "NPTEL",
      date: "NPTEL Certified",
      desc: "Fundamental environmental concepts, sustainability, and ecological principles."
    }
  ];

  const filteredCerts = activeTab === 'All' 
    ? allCertifications 
    : allCertifications.filter(c => c.category === activeTab);

  return (
    <section id="certifications" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <span className="text-sky-400 font-mono text-xs uppercase tracking-widest px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-3">
          Verified Qualifications
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Coursework</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700/60">
          {['All', 'Technical', 'NPTEL'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeTab === tab
                  ? "bg-sky-500 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab === 'All' ? 'All Certifications' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((c, idx) => (
          <div 
            key={idx} 
            className="group bg-slate-800/40 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-6 hover:border-sky-500/50 transition duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${
                  c.category === 'Technical' 
                    ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' 
                    : 'text-sky-400 bg-sky-500/10 border-sky-500/20'
                }`}>
                  {c.category}
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition">
                {c.title}
              </h3>
              
              <div className="flex justify-between items-center text-xs text-sky-400 font-semibold mb-3">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> {c.issuer}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">{c.date}</span>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;