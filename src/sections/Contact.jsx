import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-slate-900/40">
            <div className="max-w-3xl mx-auto text-center">
                <div className="w-full flex justify-center"><SectionHeader icon={<Mail size={18} />} label="Contact" /></div>
                <p className="text-slate-400 mt-6 mb-12 text-base leading-relaxed max-w-xl mx-auto">
                    Have a project in mind, a collaboration opportunity, or just want to say hi? I'd love to hear from you.
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
                                <a href={href} className="text-sm text-slate-300 hover:text-cyan-400 transition-colors font-medium">{value}</a>
                            ) : (
                                <span className="text-sm text-slate-300 font-medium">{value}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}