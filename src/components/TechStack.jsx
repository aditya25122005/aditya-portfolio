import React from 'react';
import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';

const TechStack = () => {
  const skills = [
    {
      category: "Languages",
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      items: ["Java (Primary - DSA)", "JavaScript (ES6+)", "C++", "SQL", "HTML5/CSS3"]
    },
    {
      category: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-sky-400" />,
      items: ["React.js (v18/v19)", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "EJS"]
    },
    {
      category: "Backend & Systems",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      items: ["Node.js", "Express.js", "Spring Boot", "Spring Security", "REST APIs"]
    },
    {
      category: "Databases & Auth",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      items: ["MongoDB", "MySQL", "Mongoose ODM", "JWT (HttpOnly Cookies)", "Passport.js", "OAuth 2.0"]
    },
    {
      category: "Tools & Environment",
      icon: <Wrench className="w-5 h-5 text-rose-400" />,
      items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Render Deployment"]
    }
  ];

  return (
    <section id="skills" className="py-16 px-6 max-w-7xl mx-auto">
      {/* Quick Stats Bar for Recruiters */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 rounded-3xl p-6 text-center shadow-xl">
        <div>
          <p className="text-3xl md:text-4xl font-extrabold text-sky-400">1,355</p>
          <p className="text-[11px] md:text-xs text-slate-400 font-semibold uppercase mt-1">LeetCode Solved</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-extrabold text-amber-400">1819</p>
          <p className="text-[11px] md:text-xs text-slate-400 font-semibold uppercase mt-1">Peak Rating</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-extrabold text-purple-400">8.77</p>
          <p className="text-[11px] md:text-xs text-slate-400 font-semibold uppercase mt-1">B.Tech CPI (GLA)</p>
        </div>
        <div>
          <p className="text-3xl md:text-4xl font-extrabold text-emerald-400">8+</p>
          <p className="text-[11px] md:text-xs text-slate-400 font-semibold uppercase mt-1">Certifications</p>
        </div>
      </div> */}

      {/* Tech Stack Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-sky-400 font-mono text-xs uppercase tracking-widest px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-3">
          Technical Core
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Skills</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, idx) => (
          <div key={idx} className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-6 hover:border-sky-500/50 transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-slate-900/80 rounded-xl border border-slate-700/80">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, iIdx) => (
                <span key={iIdx} className="text-xs font-mono font-medium text-slate-300 bg-slate-900/70 border border-slate-700/70 px-3 py-1.5 rounded-lg">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;