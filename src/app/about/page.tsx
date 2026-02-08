import { Metadata } from "next";
import { CheckCircle2, Globe, Rocket, Shield, Target, Users } from "lucide-react";

export const metadata: Metadata = {
    title: "About MHS Tech | Professional Web & Software Development Company",
    description: "MHS Tech is a software company in Pakistan providing web development, eCommerce, custom software, and mobile app solutions for businesses.",
    keywords: "software house in Pakistan, web development company, custom software development, mobile app development, eCommerce development, SEO friendly software company",
    alternates: {
        canonical: "https://mhs-tech.vercel.app/about",
    },
};

export default function AboutPage() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">
                        Leading Software House <br />
                        <span className="text-orange-500">in Pakistan</span>
                    </h1>
                    <div className="max-w-4xl mx-auto space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed">
                        <p>
                            Welcome to <span className="text-white font-bold">MHS Tech</span>, a professional software development company delivering high-quality digital solutions for businesses, startups, and entrepreneurs worldwide.
                        </p>
                        <p>
                            We specialize in building modern, scalable, and SEO-friendly software products that help businesses grow faster and perform better in the digital world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are & Mission/Vision */}
            <section className="py-20 px-6 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight italic">
                                Who <span className="text-orange-500 not-italic">We Are</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                MHS Tech is a results-driven web development and software company providing <span className="text-white font-semibold">web development, eCommerce solutions, custom software, and mobile application development</span>. Our goal is to help businesses establish a strong online presence, automate operations, and increase productivity using modern technology.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="glass p-8 rounded-3xl border-orange-500/10 hover:border-orange-500/30 transition-all group">
                                <Target className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    To empower businesses with smart digital solutions that improve efficiency, boost online visibility, and accelerate business growth.
                                </p>
                            </div>
                            <div className="glass p-8 rounded-3xl border-orange-500/10 hover:border-orange-500/30 transition-all group">
                                <Rocket className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    To become a globally trusted software house known for quality development and innovative digital transformation solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative glass aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border-orange-500/10">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
                                alt="MHS Tech Innovation and Software Development"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                                <h3 className="text-2xl font-black mb-2">Innovation First</h3>
                                <p className="text-gray-300 text-sm">Our team of experienced developers, designers, and technology experts focuses on innovation, performance, and reliability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">WHAT <span className="text-orange-500 uppercase">We Do</span></h2>
                    <p className="text-gray-400">Transforming ideas into powerful digital solutions</p>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Professional Website Development",
                        "eCommerce Store Development",
                        "Mobile App Development (iOS & Android)",
                        "UI/UX Design & Optimization"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 glass p-6 rounded-2xl border-white/5 hover:border-orange-500/20 transition-all">
                            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                            </div>
                            <span className="font-bold text-gray-200">{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 italic">WHY CHOOSE <span className="text-orange-500 not-italic uppercase">MHS Tech</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Expert Team", icon: <Users className="w-6 h-6" /> },
                            { title: "Modern Tech", icon: <Globe className="w-6 h-6" /> },
                            { title: "SEO Focused", icon: <Shield className="w-6 h-6" /> },
                            { title: "24/7 Support", icon: <CheckCircle2 className="w-6 h-6" /> }
                        ].map((item, i) => (
                            <div key={i} className="glass p-8 rounded-[2rem] border-orange-500/5 text-center hover:bg-orange-500/5 transition-colors">
                                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-black shadow-[0_10px_20px_rgba(249,115,22,0.3)]">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">Reliable performance and top-tier engineering standards.</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 max-w-4xl mx-auto glass p-8 md:p-12 rounded-[3rem] border-orange-500/10">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Experienced & Skilled Team",
                                "React, Next.js, WP, Custom",
                                "SEO & Performance Optimized",
                                "Secure & Scalable Systems",
                                "Affordable Pricing",
                                "100% Client Satisfaction"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Commitment */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl font-black">OUR <span className="text-orange-500">COMMITMENT</span></h2>
                    <p className="text-gray-400 text-lg leading-relaxed italic">
                        "At MHS Tech, we are committed to delivering high-quality software solutions that help businesses succeed in the digital era. We focus on innovation, performance, and long-term client relationships to ensure every project delivers real business value."
                    </p>
                    <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
                </div>
            </section>
        </div>
    );
}
