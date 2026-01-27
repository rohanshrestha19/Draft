
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, PlayCircle, BookOpen, Shield, Zap, Globe } from 'lucide-react';
import { BOOKS, COURSES, TESTIMONIALS } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A192F] to-[#112240]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 animate-fade-in">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            <span className="text-cyan-400 text-sm font-bold tracking-wide uppercase">New Course: Generative AI Mastery</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            Read. Watch. <br />
            <span className="gradient-text">Build the Future.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
            The premium platform for modern developers. Master the world's most in-demand tech skills through expert-led video courses and curated books.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/shop" className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Explore Library <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/videos" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/10 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Start Learning Free <PlayCircle className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center justify-center font-bold text-2xl tracking-tighter italic">TECH CORP</div>
            <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">CLOUD NATIVE</div>
            <div className="flex items-center justify-center font-bold text-2xl tracking-tighter italic uppercase">NextGen</div>
            <div className="flex items-center justify-center font-bold text-2xl tracking-tighter">DATAFLOW</div>
          </div>
        </div>
      </section>

      {/* Why CodeShelf Section */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Professional Developers Choose Us</h2>
            <p className="text-gray-400 max-w-xl mx-auto">We don't just teach code; we teach mastery. Quality is our obsession.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8 text-cyan-400" />, title: "Trusted Content", desc: "Every book and course is peer-reviewed by industry veterans." },
              { icon: <Zap className="w-8 h-8 text-purple-400" />, title: "Project-First", desc: "Build real-world apps as you learn, not just syntax drills." },
              { icon: <Globe className="w-8 h-8 text-blue-400" />, title: "Global Community", desc: "Join 100k+ students and mentors from 120 countries." }
            ].map((feature, idx) => (
              <div key={idx} className="glass p-10 rounded-3xl hover:bg-white/10 transition-colors group">
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-24 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Bestselling Books</h2>
              <p className="text-gray-400">Hand-picked literature for high-performance engineers.</p>
            </div>
            <Link to="/shop" className="text-cyan-400 font-bold flex items-center gap-2 hover:underline">
              View All Books <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BOOKS.slice(0, 3).map((book) => (
              <div key={book.id} className="group glass rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {book.isBestseller && (
                    <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Bestseller</div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 text-yellow-500 mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-white ml-1">{book.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">{book.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">by {book.author}</p>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold">${book.price.toFixed(2)}</span>
                    <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 font-bold transition-colors">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Previews Section */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Master Your Craft</h2>
            <p className="text-gray-400">Stream professional tutorials in 4K resolution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {COURSES.slice(0, 2).map((course) => (
              <div key={course.id} className="relative group rounded-3xl overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all cursor-pointer" />
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="bg-cyan-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-4 inline-block">{course.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-4">
                    <span>{course.instructor}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>{course.duration}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-[#050C1B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by Modern Developers</h2>
            <p className="text-gray-400">Join over 100,000+ students on their learning journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass p-8 rounded-3xl border border-white/5 italic">
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 not-italic">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-cyan-400 text-xs uppercase font-bold tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-tr from-blue-600 to-purple-700 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready to level up <br />your coding game?</h2>
            <p className="text-blue-100 text-xl max-w-xl mx-auto opacity-80">Join CodeShelf today and get your first eBook for 50% off. The future is waiting.</p>
            <div className="pt-8">
              <Link to="/login" className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform inline-flex items-center gap-3 shadow-2xl">
                Get Started Now <Zap className="w-6 h-6 fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
