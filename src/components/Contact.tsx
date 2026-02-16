"use client";

import { personalInfo } from "@/data/portfolio";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Connect</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition flex items-center justify-center gap-2 group"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition flex items-center justify-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="pt-8 text-slate-500 text-sm">
            <p>Phone: {personalInfo.phone}</p>
            <p className="pt-4">Based in India • Open to Remote & On-site opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
