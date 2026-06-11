import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

// Imports Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Imports Modals
import { ImageModal, VideoModal } from "./components/Modals";

const NAV_IDS = ["home", "about", "skills", "projects", "contact"];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [modal, setModal] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(NAV_IDS);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors font-mono">
            soknai<span className="text-cyan-400">.</span>dev
          </button>
          <ul className="hidden md:flex items-center gap-8">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)} className={`text-sm font-medium capitalize transition-colors ${active === id ? "text-cyan-400" : "text-slate-400 hover:text-white"}`}>
                  {id}
                </button>
              </li>
            ))}
          </ul>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu size={22} />
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4">
            <ul className="flex flex-col gap-4">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <button onClick={() => { scrollTo(id); setMobileOpen(false); }} className={`text-sm font-medium capitalize transition-colors ${active === id ? "text-cyan-400" : "text-slate-400 hover:text-white"}`}>
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── SECTIONS ──────────────────────────────── */}
      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects setModal={setModal} />
      <Contact />

      {/* ── FOOTER ──────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-slate-800/60 text-center">
        <p className="text-slate-600 text-sm font-mono">
          &copy; {new Date().getFullYear()} Roeun Soknai — Built with React &amp; Tailwind CSS
        </p>
      </footer>

      {/* ── MODALS ──────────────────────────────── */}
      {modal?.category === "design" && <ImageModal project={modal} onClose={() => setModal(null)} />}
      {modal?.category === "video" && <VideoModal project={modal} onClose={() => setModal(null)} />}
    </div>
  );
}