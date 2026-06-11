import { useEffect } from "react";
import { X } from "lucide-react";

export function ImageModal({ project, onClose }) {
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

export function VideoModal({ project, onClose }) {
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
                <video src={project.videoUrl} controls autoPlay className="w-full rounded-xl shadow-2xl border border-slate-700 bg-black" />
                <div className="mt-4">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{project.description}</p>
                </div>
            </div>
        </div>
    );
}
