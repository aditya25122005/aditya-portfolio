import React from 'react';
import { GitCommit, Flame, ExternalLink } from 'lucide-react';

const GithubHeatmap = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="bg-slate-800/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 shadow-xl hover:border-emerald-500/40 transition">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 text-emerald-400">
              <GitCommit className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                GitHub Contribution Activity <Flame className="w-4 h-4 text-emerald-400" />
              </h3>
              <p className="text-xs text-slate-400">
                Live daily commit history & contribution calendar (@aditya25122005)
              </p>
            </div>
          </div>

          <a 
            href="https://github.com/aditya25122005" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl transition w-fit"
          >
            <span>View GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Live Green Heatmap Image */}
        <div className="overflow-x-auto pt-2 pb-1">
          <img 
            src="https://ghchart.rshah.org/10b981/aditya25122005" 
            alt="Aditya's Green GitHub Contribution Chart" 
            className="w-full min-w-[700px] rounded-xl filter contrast-125"
          />
        </div>

      </div>
    </section>
  );
};

export default GithubHeatmap;