"use client";

import { certifications, awards, achievements } from "@/data/portfolio";
import { Award, TrendingUp, ExternalLink } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Achievements & Impact</h2>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {achievements.map((achievement) => (
            <div key={achievement.metric} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 text-center hover:border-cyan-500/30 transition">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{achievement.value}</div>
              <div className="font-semibold text-white text-sm mb-1">{achievement.metric}</div>
              <div className="text-slate-400 text-xs">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Certifications (top few) */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="text-cyan-400" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.slice(0, 3).map((cert) => (
              <a 
                key={cert.title}
                href={cert.link || '#certifications'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/30 transition group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-white text-lg flex-1 group-hover:text-cyan-400 transition">{cert.title}</h4>
                  <ExternalLink size={18} className="text-cyan-400 flex-shrink-0" />
                </div>
                <p className="text-cyan-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-slate-400 text-sm">{cert.issued || cert.date || 'Unspecified'}</p>
              </a>
            ))}
          </div>
          <div className="mt-4 text-right">
            <a href="#certifications" className="text-cyan-400 hover:underline text-sm">View all certifications</a>
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="text-cyan-400" />
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div key={award.title} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-cyan-500/30 transition">
                <h4 className="font-bold text-white text-lg mb-2">{award.title}</h4>
                <p className="text-cyan-400 text-sm mb-1">{award.company}</p>
                <p className="text-slate-400 text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
