"use client";

import { personalInfo } from "@/data/portfolio";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";    

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {personalInfo.name}
            </h1>
            
            <p className="text-2xl md:text-3xl text-cyan-400 font-semibold">
              {personalInfo.title}
            </p>
            
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Link 
              href="#experience"
              className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition flex items-center gap-2 group"
            >
              Explore My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </Link>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            {personalInfo.resume && (
              <a
                href={personalInfo.resume}
                download
                className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
            )}
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.stackoverflow} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition font-bold">
              SO
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-cyan-400 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-cyan-400">↓</div>
      </div>
    </section>
  );
}
