import { useState, useEffect, useRef } from "react";

export function SkillBar({ name, level, delay = 0 }) {
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

export function SkillBarPurple({ level, delay = 0 }) {
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
