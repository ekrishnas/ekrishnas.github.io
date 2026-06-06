"use client";

import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

function getYear(dateStr: string) {
  if (!dateStr) return "Unspecified";
  const m = dateStr.match(/(\d{4})/);
  return m ? m[1] : "Unspecified";
}

export default function Certifications() {
  // clone and sort by year (desc). Unspecified dates go last.
  const sorted = [...certifications].sort((a, b) => {
    const ay = getYear(a.date);
    const by = getYear(b.date);
    if (ay === "Unspecified" && by === "Unspecified") return a.title.localeCompare(b.title);
    if (ay === "Unspecified") return 1;
    if (by === "Unspecified") return -1;
    return parseInt(by) - parseInt(ay) || a.title.localeCompare(b.title);
  });

  const groups: Record<string, typeof certifications> = {};
  sorted.forEach((c) => {
    const y = getYear(c.date);
    if (!groups[y]) groups[y] = [];
    groups[y].push(c);
  });

  const years = Object.keys(groups).sort((a, b) => {
    if (a === "Unspecified") return 1;
    if (b === "Unspecified") return -1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <section id="certifications" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
        <p className="text-slate-400 text-lg mb-8">Professional certifications and accreditations</p>

        <div className="space-y-8">
          {years.map((year) => (
            <div key={year}>
              <h3 className="text-2xl font-semibold text-slate-200 mb-4">{year === "Unspecified" ? "Other / Unspecified" : year}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groups[year].map((cert, idx) => (
                  <div key={idx} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <Award className="text-cyan-400" size={20} />
                      <div>
                        <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                        <p className="text-slate-300 text-sm">{cert.issuer}{cert.issued ? ` — ${cert.issued}` : (cert.date ? ` — ${cert.date}` : '')}</p>
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm">
                      {cert.credentialId && <div>Credential ID: {cert.credentialId}</div>}
                      {cert.expires && <div>Expires: {cert.expires}</div>}
                    </div>
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm mt-2 inline-block">Verify / View</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
