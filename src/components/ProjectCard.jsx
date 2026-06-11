import { Palette, Video, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
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
                            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors">
                                <ExternalLink size={12} /> Live Demo
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}