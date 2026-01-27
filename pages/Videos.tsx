
import React from 'react';
import { Play, Clock, BarChart, CheckCircle } from 'lucide-react';
import { COURSES } from '../constants';

const Videos = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] pb-24">
      {/* Featured Video Header */}
      <div className="relative h-[70vh] w-full overflow-hidden mb-16">
        <img 
          src="https://picsum.photos/seed/code-hero/1920/1080" 
          className="w-full h-full object-cover opacity-40"
          alt="Featured Course"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent"></div>
        <div className="absolute bottom-20 left-4 sm:left-12 max-w-2xl space-y-6">
          <div className="inline-block bg-cyan-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Trending Masterclass</div>
          <h1 className="text-4xl md:text-7xl font-black leading-none">Full-Stack AI <br /><span className="text-cyan-400">with Gemini 2.0</span></h1>
          <p className="text-xl text-gray-300 leading-relaxed font-medium">Learn to build next-generation applications with the world's most capable multimodal AI models.</p>
          <div className="flex items-center gap-4 pt-4">
            <button className="bg-white text-[#0A192F] px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 hover:scale-105 transition-transform">
              <Play className="w-6 h-6 fill-current" /> Watch Preview
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-black text-lg border border-white/20 transition-all">
              Save to Library
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {/* Continue Learning */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Continue Watching</h2>
            <span className="text-gray-500 text-sm">2 items pending</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COURSES.filter(c => c.progress).map(course => (
              <div key={course.id} className="glass rounded-3xl p-6 flex items-center gap-6 group cursor-pointer hover:bg-white/10 transition-colors">
                <div className="relative w-40 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                  <img src={course.thumbnail} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="" />
                  <div className="absolute bottom-0 left-0 h-1 bg-cyan-500 transition-all duration-500" style={{ width: `${course.progress}%` }}></div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{course.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <span>{course.progress}% Complete</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span>12m left</span>
                  </div>
                </div>
                <Play className="w-8 h-8 text-white/20 group-hover:text-cyan-400 group-hover:scale-110 transition-all" />
              </div>
            ))}
          </div>
        </section>

        {/* Netflix-style Horizontal Browsing */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Beginner Fundamentals</h2>
            <p className="text-gray-500">Start your journey with these essential guides.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map(course => (
              <div key={course.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 ring-1 ring-white/10 group-hover:ring-cyan-500/50 transition-all shadow-2xl">
                  <img src={course.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <span className="text-white font-bold text-sm">Watch Now</span>
                    <Play className="w-6 h-6 text-cyan-400 fill-current" />
                  </div>
                </div>
                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-cyan-400 transition-colors">{course.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1 font-bold uppercase tracking-widest text-[9px]">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </div>
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  <div className="flex items-center gap-1 font-bold uppercase tracking-widest text-[9px]">
                    <BarChart className="w-3 h-3" /> {course.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Perks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5">
           <div className="flex gap-4">
             <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
             </div>
             <div>
               <h4 className="font-bold mb-2">Official Certification</h4>
               <p className="text-gray-500 text-sm">Receive a verified certificate upon course completion to share on LinkedIn.</p>
             </div>
           </div>
           <div className="flex gap-4">
             <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-purple-400" />
             </div>
             <div>
               <h4 className="font-bold mb-2">Expert Feedback</h4>
               <p className="text-gray-500 text-sm">Get code reviews and personalized tips from professional instructors.</p>
             </div>
           </div>
           <div className="flex gap-4">
             <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-400" />
             </div>
             <div>
               <h4 className="font-bold mb-2">Offline Access</h4>
               <p className="text-gray-500 text-sm">Download courses on your mobile device and learn from anywhere.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
