
import React from 'react';
import { ArrowRight, Map } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Categories = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Learning Paths</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Stop guessing what to learn next. Follow our curated paths designed to take you from zero to industry-ready.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="group relative glass rounded-[3rem] p-12 overflow-hidden hover:translate-y-[-8px] transition-all duration-500 cursor-pointer">
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${cat.color} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform origin-left">{cat.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{cat.name}</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">{cat.description}</p>
                
                <div className="mt-auto space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=user${cat.id}${i}`} className="w-10 h-10 rounded-full border-2 border-[#0A192F]" alt="" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-500">1.2k+ students enrolled</span>
                  </div>
                  
                  <button className="flex items-center gap-3 text-cyan-400 font-bold group-hover:gap-5 transition-all">
                    View Path Details <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Path Roadmap Visualization (Abstract) */}
        <div className="mt-32 p-12 glass rounded-[3rem] border border-white/5 relative overflow-hidden">
          <div className="max-w-3xl space-y-8 relative z-10">
            <h3 className="text-3xl font-bold">Custom Learning Paths</h3>
            <p className="text-gray-400 text-lg">Don't see a path that fits? Our AI assistant can generate a personalized curriculum based on your goals and current skills.</p>
            <button className="bg-white text-[#0A192F] px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              <Map className="w-5 h-5" /> Generate My Path
            </button>
          </div>
          <div className="hidden lg:block absolute top-1/2 right-20 -translate-y-1/2 w-80 h-80 opacity-20 rotate-12">
             <div className="w-full h-full border-4 border-dashed border-cyan-400 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
