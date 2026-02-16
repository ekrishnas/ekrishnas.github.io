"use client";

import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-cyan-400 hover:text-cyan-300 transition">
            <Code2 size={24} />
            <span>SK</span>
          </Link>
          
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-slate-300 hover:text-cyan-400 transition text-sm">About</Link>
            <Link href="#experience" className="text-slate-300 hover:text-cyan-400 transition text-sm">Experience</Link>
            <Link href="#skills" className="text-slate-300 hover:text-cyan-400 transition text-sm">Skills</Link>
            <Link href="#achievements" className="text-slate-300 hover:text-cyan-400 transition text-sm">Achievements</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-cyan-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
