
import React from 'react';
import { Target, Users, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A192F]">
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-black">Our Story.</h1>
          <p className="text-2xl font-medium text-cyan-400 italic">"We believe the best way to learn code is to live it."</p>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">Bridging the Gap</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              CodeShelf was born out of a simple frustration: the disconnect between shallow video tutorials and dense, academic textbooks. We realized that modern learners need both — the quick visual intuition of high-quality video and the deep, referenceable wisdom of professional literature.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Since our launch in 2021, we've focused on one thing: curate and create only the finest educational resources for the developers of tomorrow. No fluff, no filler. Just the knowledge you need to succeed.
            </p>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/about/800/600" className="rounded-[3rem] shadow-2xl relative z-10" alt="Team working" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">To democratize elite-level tech education and make expert mentorship accessible to everyone, everywhere.</p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold">Our Values</h3>
            <p className="text-gray-400 leading-relaxed">We value clarity over complexity, practice over theory, and our student community above all else.</p>
          </div>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold">Our Quality</h3>
            <p className="text-gray-400 leading-relaxed">We partner with the world's leading tech publishers and creators to ensure our library remains gold-standard.</p>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold">The Journey is Just Beginning.</h2>
          <p className="text-gray-400 text-lg">Whether you're writing your first line of HTML or architecting a global microservice system, we're here to guide you.</p>
          <button className="bg-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-cyan-500/20">
            Join the Shelf
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
