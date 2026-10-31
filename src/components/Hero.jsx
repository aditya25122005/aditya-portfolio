import React from 'react';
import { Eye, Download, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = ({ resumeCount, setResumeCount }) => {
  const handleResumeAction = () => {
    const newCount = resumeCount + 1;
    setResumeCount(newCount);
    localStorage.setItem('portfolio_resume_clicks', newCount);
  };

  return (
    <section id="about" className="pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="space-y-6 md:w-3/4">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>OPEN FOR SDE INTERNSHIP & FULL-TIME ROLES</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Aditya Maheshwari</span>
        </h1>
        
        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
          Final-Year Computer Science student at GLA University. Specializing in scalable backend architectures, full-stack MERN applications, and algorithmic problem solving.
        </p>

        {/* Action Buttons */}
        <div id="hero-resume" className="flex flex-wrap items-center gap-4 pt-2">
          
          {/* View Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={handleResumeAction}
            className="flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium px-5 py-3 rounded-xl transition-all shadow-lg shadow-sky-500/20 text-sm"
          >
            <Eye className="w-4 h-4" />
            <span>View Resume</span>
          </a>

          {/* Download PDF Button */}
          <a
            href="/resume.pdf"
            download="Aditya_Maheshwari_Resume.pdf"
            onClick={handleResumeAction}
            className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3 rounded-xl transition-all text-sm font-medium"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>Download PDF</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pl-2">
            <a 
              href="https://github.com/aditya25122005" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition border border-slate-700"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-maheshwari-52a150267/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition border border-slate-700"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;