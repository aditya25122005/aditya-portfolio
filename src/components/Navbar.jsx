import React, { useState } from 'react';
import { Code, FileText, Menu, X } from 'lucide-react';

const Navbar = ({ resumeCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding Profiles', href: '#profiles' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/80 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a 
          href="#about" 
          className="flex items-center space-x-2.5 group cursor-pointer"
        >
          <div className="p-2 bg-sky-500/10 rounded-xl border border-sky-500/20 group-hover:border-sky-500/50 transition">
            <Code className="text-sky-400 w-5 h-5 group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-extrabold text-xl text-white tracking-tight">
            Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action: Resume Counter & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <a
            href="#hero-resume"
            className="flex items-center space-x-2 bg-sky-500/10 text-sky-400 border border-sky-500/30 px-3.5 py-1.5 rounded-xl text-xs font-semibold hover:bg-sky-500/20 hover:border-sky-500/50 transition shadow-sm"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>Resume Views: {resumeCount}</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-xl border border-slate-700/80 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-4 space-y-3 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-sky-400 py-2 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;