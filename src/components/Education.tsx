"use client";

import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
        <p className="text-slate-400 text-lg mb-8">Academic qualifications and institutions</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white">{edu.degree} - {edu.field}</h3>
              <p className="text-slate-300">{edu.university_full} — {edu.university}</p>
              <div className="mt-2 text-slate-400 text-sm">
                <span className="font-semibold text-slate-200">Year:</span> {edu.year} • <span className="font-semibold text-slate-200">Score:</span> {edu.percentage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
