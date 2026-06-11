export default function SectionHeader({ icon, label }) {
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
