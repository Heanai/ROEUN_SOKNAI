import { useState } from "react";
import { Monitor } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import myProfile from "../assets/Profile.jpg";
import myProfile2 from "../assets/Profile_smile.png";

export default function About() {
    const [currentImage, setCurrentImage] = useState(myProfile);
    const secondImage = myProfile2;

    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <SectionHeader icon={<Monitor size={18} />} label="About Me" />
                <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
                    <div className="relative mx-auto md:mx-0 animate-[float_4s_ease-in-out_infinite]">
                        <div
                            onMouseEnter={() => setCurrentImage(secondImage)}
                            onMouseLeave={() => setCurrentImage(myProfile)}
                            className="w-64 h-64 rounded-3xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center select-none shadow-2xl shadow-cyan-500/10 overflow-hidden cursor-pointer group transition-all duration-500"
                        >
                            <img src={currentImage} alt="Admin Profile" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-center shadow-lg pointer-events-none">
                            <span className="text-xl font-black text-cyan-400">3+</span>
                            <span className="text-[10px] text-slate-400 leading-tight">Years<br />Coding</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Passionate about building &amp; creating</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            An IT &amp; Computer Science student with practical experience in Website Design and digital tools instruction. Possesses strong analytical and problem-solving abilities developed through teaching and academic learning. Eager to transition into an IT Intern role to apply my technical knowledge, quick learning capabilities, and passion for software and web development.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["Problem Solver", "Fast Learner", "Team Player", "Creative Thinker"].map((t) => (
                                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}