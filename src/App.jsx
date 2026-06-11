import { useState, useEffect, useRef } from "react";
import {
  Mail, Phone, MapPin, ExternalLink, X,
  Download, ChevronDown, Code2, Palette, Video,
  Grid, Send, Monitor, Layers, Menu
} from "lucide-react";
import myCV from "./assets/RUEON SOKNAI.pdf";
// ─── DATA ────────────────────────────────────────────────────────────────────

const techSkills = [
  { name: "Website Design", level: 90 },
  { name: "HTML5 / CSS3", level: 88 },
  { name: "JavaScript", level: 82 },
  { name: "React.js", level: 78 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Laravel", level: 75 },
  { name: "JWT API", level: 70 },
  { name: "Linux Basics", level: 65 },
];

const designSkills = [
  { name: "Adobe Photoshop", level: 88 },
  { name: "Adobe Illustrator", level: 80 },
  { name: "CorelDRAW", level: 75 },
  { name: "Adobe Premiere Pro", level: 82 },
  { name: "Adobe After Effects", level: 70 },
  { name: "CapCut", level: 90 },
];

const projects = [
  {
    id: 1,
    category: "webdev",
    title: "E-STORE - e-Commerce UI & Cart System",
    description: "A responsive electronics e-commerce storefront featuring dynamic product filtering, context-driven shopping cart management (add, update, delete items), and intuitive auto-scroll UX features.",
    tags: ["React", "React Router", "Context API", "Tailwind CSS"],
    demo: "https://electronic-store-ui.vercel.app/", // ឬលីង Wasmer របស់អ្នក
    github: "https://github.com/Heanai/electronic-store-ui", // ដាក់លីង GitHub ពិតរបស់អ្នក
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80", // រូបភាព Laptop & Gadget ស្អាតៗ
  },
  {
    id: 2,
    category: "webdev",
    title: "E-Commerce Store",
    description: "Responsive shopping platform with cart, checkout flow, and admin dashboard.",
    tags: ["React", "Tailwind", "Laravel", "MySQL"],
    demo: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  },
  {
    id: 3,
    category: "webdev",
    title: "Portfolio CMS",
    description: "Content management system tailored for creatives to showcase work online.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: 4,
    category: "design",
    title: "Brand Identity – CaféKhmer",
    description: "Full branding package including logo, color palette, and print collateral.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
  {
    id: 5,
    category: "design",
    title: "Social Media Kit",
    description: "Cohesive Instagram & Facebook templates for a local fashion brand.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
  },
  {
    id: 6,
    category: "video",
    title: "Campus Event Reel",
    description: "60-second highlight reel of university tech fair with motion graphics.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: 7,
    category: "video",
    title: "Product Promo – BrewCo",
    description: "15-second animated product advertisement for a local coffee startup.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

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

// ─── SKILL BAR ────────────────────────────────────────────────────────────────

function SkillBar({ name, level, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setWidth(level), delay); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-xs text-cyan-400 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

// ─── MODALS ───────────────────────────────────────────────────────────────────

function ImageModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <img src={project.image} alt={project.title} className="w-full rounded-xl shadow-2xl border border-slate-700" />
        <div className="mt-4">
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
          <p className="text-slate-400 text-sm mt-1">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

function VideoModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <video
          src={project.videoUrl}
          controls
          autoPlay
          className="w-full rounded-xl shadow-2xl border border-slate-700 bg-black"
        />
        <div className="mt-4">
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
          <p className="text-slate-400 text-sm mt-1">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

function ProjectCard({ project, onClick }) {
  const isWeb = project.category === "webdev";
  const isDesign = project.category === "design";
  const isVideo = project.category === "video";
  const thumb = project.image || project.thumbnail;

  return (
    <div
      className={`group bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 ${!isWeb ? "cursor-pointer" : ""}`}
      onClick={!isWeb ? () => onClick(project) : undefined}
    >
      <div className="relative overflow-hidden h-44">
        <img src={thumb} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-cyan-500/40 transition-colors">
              <Video size={22} className="text-cyan-300 ml-0.5" />
            </div>
          </div>
        )}
        {isDesign && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center backdrop-blur-sm">
              <Palette size={20} className="text-cyan-300" />
            </div>
          </div>
        )}
        <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full border ${isWeb ? "border-blue-400/40 text-blue-300 bg-blue-500/10"
          : isDesign ? "border-purple-400/40 text-purple-300 bg-purple-500/10"
            : "border-pink-400/40 text-pink-300 bg-pink-500/10"
          }`}>
          {isWeb ? "Web Dev" : isDesign ? "Design" : "Video"}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-white font-semibold text-base mb-1">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
        {isWeb && (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-slate-700/80 text-cyan-400 border border-slate-600/50 font-mono">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.demo} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors">
                <ExternalLink size={12} /> Live Demo
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

const NAV_IDS = ["home", "about", "skills", "projects", "contact"];

export default function App() {
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy(NAV_IDS);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* ── NAV ─────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors font-mono"
          >
            soknai<span className="text-cyan-400">.</span>dev
          </button>
          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-sm font-medium capitalize transition-colors ${active === id ? "text-cyan-400" : "text-slate-400 hover:text-white"
                    }`}
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile toggle */}
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu size={22} />
          </button>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4">
            <ul className="flex flex-col gap-4">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => { scrollTo(id); setMobileOpen(false); }}
                    className={`text-sm font-medium capitalize transition-colors ${active === id ? "text-cyan-400" : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────── */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-slate-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for internship &amp; freelance
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-none">
            <span className="text-white">ROEUN</span>{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">SOKNAI</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 font-medium mb-6 tracking-wide">
            Computer Science Student &amp; Web Developer
          </p>

          <p className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto mb-10">
            I craft fast, accessible web experiences — from pixel-perfect UIs to
            robust full-stack apps — and bring stories to life through design and video.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href={myCV}
              download="ROEUN_SOKNAI_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download size={16} /> Download CV
            </a>
            <a
              href="https://t.me/roeunsoknai"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-sm hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-200"
            >
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

      {/* ── ABOUT ───────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader icon={<Monitor size={18} />} label="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative mx-auto md:mx-0">
              <div className="w-64 h-64 rounded-3xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-8xl select-none shadow-2xl shadow-cyan-500/10">
                👨‍💻
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-xl font-black text-cyan-400">3+</span>
                <span className="text-[10px] text-slate-400 leading-tight">Years<br />Coding</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate about building &amp; creating
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                An IT &amp; Computer Science student with practical experience in Website Design and digital tools instruction. Possesses strong analytical and problem-solving abilities developed through teaching and academic learning. Eager to transition into an IT Intern role to apply my technical knowledge, quick learning capabilities, and passion for software and web development.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Problem Solver", "Fast Learner", "Team Player", "Creative Thinker"].map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────── */}
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

      {/* ── PROJECTS ────────────────────────────── */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={<Grid size={18} />} label="Projects" />
          <div className="flex flex-wrap gap-3 mt-10 mb-10 justify-center">
            {[
              { key: "all", label: "All", icon: <Grid size={13} /> },
              { key: "webdev", label: "Web Dev", icon: <Code2 size={13} /> },
              { key: "design", label: "Design", icon: <Palette size={13} /> },
              { key: "video", label: "Video", icon: <Video size={13} /> },
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === key
                  ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
                  }`}
              >
                {icon} {label}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} onClick={setModal} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────── */}
      <section id="contact" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader icon={<Mail size={18} />} label="Contact" />
          <p className="text-slate-400 mt-6 mb-12 text-base leading-relaxed max-w-xl mx-auto">
            Have a project in mind, a collaboration opportunity, or just want to say hi?
            I'd love to hear from you.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Phone size={22} className="text-cyan-400" />, label: "Phone", value: "+855 86 218 630", href: "tel:+85586218630" },
              { icon: <Mail size={22} className="text-cyan-400" />, label: "Email", value: "soknai821@gmail.com", href: "mailto:soknai821@gmail.com" },
              { icon: <MapPin size={22} className="text-cyan-400" />, label: "Location", value: "Toul Kork, Phnom Penh", href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-widest">{label}</p>
                {href ? (
                  <a href={href} className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium">
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-slate-300 font-medium">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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

// ─── REUSABLE SUB-COMPONENTS ──────────────────────────────────────────────────

function SectionHeader({ icon, label }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-cyan-400 font-medium mb-4">
        {icon} {label}
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{label}</h2>
      <div className="mt-3 h-px w-16 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
    </div>
  );
}

function SkillBarPurple({ level, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setTimeout(() => setWidth(level), delay);
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level, delay]);
  return (
    <div
      ref={ref}
      className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
      style={{ width: `${width}%` }}
    />
  );
}