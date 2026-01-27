
import React from 'react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">Talk to Us.</h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                Have a question about a course? Need help with an order? Or just want to talk tech? We're here for you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Support</h4>
                  <p className="text-gray-500">hello@codeshelf.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-purple-400 transition-colors">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Live Chat</h4>
                  <p className="text-gray-500">Available Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-400 transition-colors">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Community Phone</h4>
                  <p className="text-gray-500">+1 (888) CODE-HLP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[3rem] relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                <select className="w-full bg-[#0F172A] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 text-white appearance-none">
                  <option>General Inquiry</option>
                  <option>Book Order Status</option>
                  <option>Video Course Help</option>
                  <option>Business Collaboration</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <textarea rows={5} placeholder="Tell us how we can help..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-400 text-white resize-none"></textarea>
              </div>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/20 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
