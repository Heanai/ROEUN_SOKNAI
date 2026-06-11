import { Download, Send, ChevronDown } from "lucide-react";
import myCV from "../assets/RUEON SOKNAI.pdf";

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-slate-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for internship &amp; freelance
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-none">
          <span className="text-white">ROEUN</span> <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SOKNAI</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 font-medium mb-6 tracking-wide">Computer Science Student &amp; Web Developer</p>
        <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
          I craft fast, accessible web experiences — from pixel-perfect UIs to robust full-stack apps — and bring stories to life through design and video.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a href={myCV} download="ROEUN_SOKNAI_CV.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200">
            <Download size={16} /> Download CV
          </a>
          <a href="https://t.me/roeunsoknai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-200">
            <Send size={16} /> Telegram
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto mb-16">
          {[["10+", "Projects"], ["8+", "Tech Skills"], ["3+", "Years Learning"]].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-black text-white">{n}</div>
              <div className="text-xs text-slate-500 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        <button onClick={() => scrollTo("about")} className="animate-bounce text-slate-600 hover:text-cyan-400 transition-colors mx-auto flex">
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}