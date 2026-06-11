import { Code2, Palette, Layers } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { SkillBar, SkillBarPurple } from "../components/SkillBar";
import { techSkills, designSkills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<Layers size={18} />} label="Skills" />
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Code2 size={16} className="text-cyan-400" />
              </div>
              <h3 className="font-bold text-white text-lg">Technical IT Skills</h3>
            </div>
            {techSkills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
            ))}
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-7 hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Palette size={16} className="text-purple-400" />
              </div>
              <h3 className="font-bold text-white text-lg">Design &amp; Multimedia</h3>
            </div>
            {designSkills.map((s, i) => (
              <div key={s.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-slate-300">{s.name}</span>
                  <span className="text-xs text-purple-400 font-mono">{s.level}%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <SkillBarPurple level={s.level} delay={i * 80} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}