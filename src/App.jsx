import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import CodingProfiles from './components/CodingProfiles';
import GithubHeatmap from './components/GithubHeatmap';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FadeIn from './components/FadeIn';

function App() {
  const [resumeCount, setResumeCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem('portfolio_resume_clicks');
    if (savedCount) {
      setResumeCount(parseInt(savedCount, 10));
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
      <Navbar resumeCount={resumeCount} />
      <main>
        <Hero resumeCount={resumeCount} setResumeCount={setResumeCount} />
        
        <FadeIn direction="up">
          <TechStack />
        </FadeIn>

        <FadeIn direction="up">
          <CodingProfiles />
        </FadeIn>

        <FadeIn direction="up">
          <GithubHeatmap />
        </FadeIn>

        <FadeIn direction="up">
          <Projects />
        </FadeIn>

        <FadeIn direction="up">
          <Certifications />
        </FadeIn>

        <FadeIn direction="up">
          <Contact />
        </FadeIn>
      </main>
      
      <footer className="text-center py-6 text-xs text-slate-500 border-t border-slate-800/80">
        © {new Date().getFullYear()} Aditya Maheshwari. Final-Year CSE, GLA University.
      </footer>
    </div>
  );
}

export default App;