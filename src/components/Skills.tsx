"use client";

import { skills } from "@/data/portfolio";
import { Code2, Cloud, Zap, Database, GitBranch, Workflow } from "lucide-react";

const skillCategories = [
  { title: "Languages", icon: Code2, skills: skills.languages },
  { title: "Cloud Services", icon: Cloud, skills: skills.cloud },
  { title: "Architecture", icon: Zap, skills: skills.architecture },
  { title: "DevOps", icon: GitBranch, skills: skills.devops },
  { title: "Databases", icon: Database, skills: skills.databases },
  { title: "Integrations", icon: Workflow, skills: skills.integrations },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
        <p className="text-slate-400 text-lg mb-12">Technologies and tools I've worked with extensively</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm rounded-full hover:bg-cyan-500/20 transition cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
