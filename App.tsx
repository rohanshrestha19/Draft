
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, BookOpen, Play, Map, Info, MessageSquare, LogIn, Github, Twitter, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Videos from './pages/Videos';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Store', path: '/shop', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Watch', path: '/videos', icon: <Play className="w-4 h-4" /> },
    { name: 'Paths', path: '/categories', icon: <Map className="w-4 h-4" /> },
    { name: 'Story', path: '/about', icon: <Info className="w-4 h-4" /> },
    { name: 'Talk', path: '/contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">CodeShelf</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                    location.pathname === link.path ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-gray-300 hover:text-cyan-400 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </button>
            <Link to="/login" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-colors">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F] border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-lg font-medium text-gray-300 py-2 border-b border-white/5"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg font-medium text-cyan-400 py-2"
          >
            <LogIn className="w-5 h-5" />
            My Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#050C1B] border-t border-white/5 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">CodeShelf</span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Premium learning for modern developers. Read the best books, watch the finest tutorials, and code the future.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/shop" className="hover:text-cyan-400 transition-colors">Book Store</Link></li>
            <li><Link to="/videos" className="hover:text-cyan-400 transition-colors">Video Courses</Link></li>
            <li><Link to="/categories" className="hover:text-cyan-400 transition-colors">Learning Paths</Link></li>
            <li><Link to="/login" className="hover:text-cyan-400 transition-colors">Student Portal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Our Story</Link></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-4">Get the latest coding tips and book releases.</p>
          <div className="flex">
            <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-cyan-400 text-sm" />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-lg font-bold transition-colors">Join</button>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} CodeShelf. Read. Watch. Code.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col pt-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
