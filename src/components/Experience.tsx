"use client";

import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
        <p className="text-slate-400 text-lg mb-12">8+ years building scalable systems, APIs, and cloud solutions</p>

        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.id} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/30 transition group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-cyan-400" size={20} />
                    <h3 className="text-2xl font-bold text-white">{job.position}</h3>
                  </div>
                  <p className="text-cyan-400 font-semibold">{job.company}</p>
                  <p className="text-slate-400 text-sm">{job.duration}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-4">{job.description}</p>

              <ul className="space-y-2 mb-4">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-300">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
