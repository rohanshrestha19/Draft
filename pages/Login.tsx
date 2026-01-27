
import React from 'react';
import { User, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0A192F] flex items-center justify-center p-4">
      <div className="max-w-md w-full glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/20">
             <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back.</h1>
          <p className="text-gray-400">Continue your journey to mastery.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
             <div className="relative">
               <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
               <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-cyan-400 text-white"
               />
             </div>
          </div>
          <div className="space-y-1">
             <div className="relative">
               <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
               <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-cyan-400 text-white"
               />
             </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
              <input type="checkbox" className="rounded border-white/10 bg-white/5 text-cyan-500 focus:ring-cyan-500" />
              Remember me
            </label>
            <a href="#" className="text-cyan-400 hover:underline font-bold">Forgot?</a>
          </div>

          <button className="w-full bg-white text-[#0A192F] py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl flex items-center justify-center gap-2">
            Sign In <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="my-8 flex items-center gap-4 text-gray-500">
          <div className="h-px flex-grow bg-white/10"></div>
          <span className="text-xs font-bold uppercase tracking-widest">Or login with</span>
          <div className="h-px flex-grow bg-white/10"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-2xl transition-colors font-bold text-sm">
            <Github className="w-5 h-5" /> GitHub
          </button>
          <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-2xl transition-colors font-bold text-sm">
            <Chrome className="w-5 h-5" /> Google
          </button>
        </div>

        <p className="text-center mt-10 text-gray-400 text-sm">
          New to the shelf? <a href="#" className="text-cyan-400 font-bold hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
