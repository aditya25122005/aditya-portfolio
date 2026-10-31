import React, { useState, useEffect } from 'react';
import { ExternalLink, Flame, Trophy, CheckCircle2, Code2, Award } from 'lucide-react';

const CodingProfiles = () => {
  const [leetcodeData, setLeetcodeData] = useState({
    solved: 1355,
    easy: 524,
    medium: 732,
    hard: 99,
    rating: 1757,
    peakRating: 1819,
    contests: 78,
    badge: "500 Days Badge (10 Badges)",
    activeDays: 300,
    topPercent: "Top 10.46%",
    loading: false
  });

  const [codeforcesData, setCodeforcesData] = useState({
    rating: "1194",
    rank: "Newbie",
    maxRating: "1194",
    solved: "200+",
    loading: false
  });

  useEffect(() => {
    // LeetCode API Safe Fetch (Primary + Backup API)
    fetch(`https://leetcode-api-faisalshohag.vercel.app/Aditya_Mah2005`)
      .then((res) => {
        if (!res.ok) throw new Error("API Server Down");
        return res.json();
      })
      .then((data) => {
        if (data && data.totalSolved) {
          setLeetcodeData((prev) => ({
            ...prev,
            solved: data.totalSolved || 1355,
            easy: data.easySolved || 524,
            medium: data.mediumSolved || 732,
            hard: data.hardSolved || 99,
          }));
        }
      })
      .catch((err) => console.log("LC API using accurate fallback stats"));

    // Codeforces Official API Safe Fetch
    fetch(`https://codeforces.com/api/user.info?handles=aditya25122005`)
      .then((res) => {
        if (!res.ok) throw new Error("CF API Error");
        return res.json();
      })
      .then((data) => {
        if (data.status === "OK" && data.result?.[0]) {
          const user = data.result[0];
          setCodeforcesData({
            rating: user.rating || "1194",
            rank: user.rank || "Newbie",
            maxRating: user.maxRating || "1194",
            solved: "200+ Solved",
            loading: false
          });
        }
      })
      .catch((err) => console.log("CF API using accurate fallback stats"));
  }, []);

  return (
    <section id="profiles" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <span className="text-sky-400 font-mono text-xs uppercase tracking-widest px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full mb-3">
          Algorithmic & Problem Solving
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Coding Profiles & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">Live Statistics</span>
        </h2>
      </div>

      {/* Grid of 4 Pure Problem-Solving Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* 1. LEETCODE CARD */}
        <div className="group relative bg-slate-800/40 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-7 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/30 text-amber-400">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LeetCode</h3>
                  <span className="text-xs text-amber-400 font-semibold">Rating: {leetcodeData.rating} (Peak: {leetcodeData.peakRating})</span>
                </div>
              </div>
              <a href="https://leetcode.com/Aditya_Mah2005" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-900/60 rounded-xl transition">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="my-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{leetcodeData.solved}</span>
                <span className="text-xs text-slate-400 font-medium">Problems Solved</span>
              </div>
              <p className="text-xs text-amber-400 font-medium mt-1">
                {leetcodeData.topPercent} • {leetcodeData.contests} Contests Attended • {leetcodeData.activeDays} Active Days
              </p>
            </div>

            {/* Easy / Med / Hard Breakdown */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-slate-700/50 text-center">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2">
                <p className="text-[10px] text-emerald-400 font-bold uppercase">Easy</p>
                <p className="text-sm font-bold text-white">{leetcodeData.easy}</p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-2">
                <p className="text-[10px] text-amber-400 font-bold uppercase">Medium</p>
                <p className="text-sm font-bold text-white">{leetcodeData.medium}</p>
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-2">
                <p className="text-[10px] text-rose-400 font-bold uppercase">Hard</p>
                <p className="text-sm font-bold text-white">{leetcodeData.hard}</p>
              </div>
            </div>

            {/* Recent Badge */}
            <div className="mt-4 pt-3 border-t border-slate-700/30 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" /> {leetcodeData.badge}
              </span>
            </div>
          </div>
        </div>

        {/* 2. CODEFORCES CARD */}
        <div className="group relative bg-slate-800/40 backdrop-blur-xl border border-sky-500/20 rounded-3xl p-7 hover:border-sky-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/30 text-sky-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Codeforces</h3>
                  <span className="text-xs text-sky-400 font-semibold">Handle: aditya25122005</span>
                </div>
              </div>
              <a href="https://codeforces.com/profile/aditya25122005" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-900/60 rounded-xl transition">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="my-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{codeforcesData.rating}</span>
                <span className="text-xs text-slate-400 font-medium">Rating</span>
              </div>
              <p className="text-xs text-sky-400 font-semibold capitalize mt-1">Rank: {codeforcesData.rank}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-700/50">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Max Rating</p>
                <p className="text-sm font-extrabold text-white">{codeforcesData.maxRating}</p>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Solved</p>
                <p className="text-sm font-extrabold text-white">{codeforcesData.solved}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CODECHEF CARD */}
        <div className="group relative bg-slate-800/40 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-7 hover:border-orange-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/30 text-orange-400">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CodeChef</h3>
                  <span className="text-xs text-orange-400 font-semibold">Starters Contests</span>
                </div>
              </div>
              <a href="https://www.codechef.com/users/aditya_mah2512" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-900/60 rounded-xl transition">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="my-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white">Rank #865</span>
              </div>
              <p className="text-xs text-orange-400 font-semibold mt-1">Top 5% in Starters Division</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/50">
              <p className="text-xs text-slate-300 font-medium">Username: <span className="font-mono text-orange-400">aditya_mah2512</span></p>
              <p className="text-xs text-slate-400 mt-1">100+ Competitive algorithmic problems solved</p>
            </div>
          </div>
        </div>

        {/* 4. GEEKSFORGEEKS CARD */}
        <div className="group relative bg-slate-800/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-7 hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">GeeksforGeeks</h3>
                  <span className="text-xs text-emerald-400 font-semibold">DSA Practice</span>
                </div>
              </div>
              <a href="https://www.geeksforgeeks.org/profile/adityae2eu" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white bg-slate-900/60 rounded-xl transition">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="my-4">
              <span className="text-3xl font-extrabold text-white">100+ Solved</span>
              <p className="text-xs text-emerald-400 font-semibold mt-1">Data Structures & Core CS Concepts</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700/50">
              <p className="text-xs text-slate-300 font-medium">Username: <span className="font-mono text-emerald-400">adityae2eu</span></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;