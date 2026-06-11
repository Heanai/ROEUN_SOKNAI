import { useState } from "react";
import { Grid, Code2, Palette, Video } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects({ setModal }) {
    const [filter, setFilter] = useState("all");
    const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

    return (
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
    );
}
