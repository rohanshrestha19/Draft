
import React, { useState } from 'react';
// Added Shield, Globe, and BookOpen to the lucide-react imports
import { Search, ShoppingCart, Filter, Star, Eye, Shield, Globe, BookOpen } from 'lucide-react';
import { BOOKS } from '../constants';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'JavaScript', 'Python', 'Rust', 'Frontend', 'Backend', 'Go'];

  const filteredBooks = activeCategory === 'All' 
    ? BOOKS 
    : BOOKS.filter(book => book.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A192F] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold">The Library</h1>
            <p className="text-gray-400">Curated literature for the modern engineer.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by title, author, or tech..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-cyan-400 text-gray-300"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="group glass rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform">
                     <Eye className="w-5 h-5" />
                   </button>
                   <button className="bg-cyan-500 text-white p-3 rounded-full hover:scale-110 transition-transform">
                     <ShoppingCart className="w-5 h-5" />
                   </button>
                </div>
                {book.isBestseller && (
                  <div className="absolute top-6 left-6 bg-cyan-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Bestseller</div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">{book.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-bold">{book.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 truncate">{book.title}</h3>
                <p className="text-gray-500 text-sm mb-6">by {book.author}</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <span className="text-2xl font-bold">${book.price.toFixed(2)}</span>
                  <button className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">Quick Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-32 glass rounded-3xl border-dashed border-2 border-white/10">
            <h3 className="text-2xl font-bold mb-2">No results found</h3>
            <p className="text-gray-500">Try adjusting your filters or search keywords.</p>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/5">
          <div className="flex flex-col items-center text-center space-y-3 grayscale opacity-60">
            <Shield className="w-10 h-10 text-cyan-400" />
            <h4 className="font-bold">Secure Payments</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 grayscale opacity-60">
            <Globe className="w-10 h-10 text-cyan-400" />
            <h4 className="font-bold">Global Shipping</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 grayscale opacity-60">
             <BookOpen className="w-10 h-10 text-cyan-400" />
            <h4 className="font-bold">Expert Authors</h4>
          </div>
          <div className="flex flex-col items-center text-center space-y-3 grayscale opacity-60">
            <Star className="w-10 h-10 text-cyan-400" />
            <h4 className="font-bold">5-Star Content</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
