import { Metadata } from "next";
import {
    Globe,
    ShoppingCart,
    Code2,
    Smartphone,
    Palette,
    Settings,
    CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
    title: "Software Development Services | Web, App & eCommerce – MHS Tech",
    description: "Professional web development, eCommerce, custom software, and mobile app services by MHS Tech. Fast, secure, and scalable digital solutions for businesses.",
    keywords: "software development services, web development company, custom software development, mobile app development, eCommerce development, software house services",
    alternates: {
        canonical: "https://mhs-tech.vercel.app/services",
    },
};

const services = [
    {
        title: "Web Development",
        desc: "We build modern, responsive, and SEO-optimized websites using the latest technologies such as React, Next.js, and WordPress.",
        items: ["Business Website Development", "Portfolio & Company Websites", "Landing Pages", "SEO-Friendly Structure", "Fast Loading Speed"],
        icon: <Globe className="w-12 h-12 text-orange-500" />
    },
    {
        title: "eCommerce Development",
        desc: "We develop complete online stores with product management, payment gateway integration, and a user-friendly shopping experience.",
        items: ["Custom Online Store", "Payment Integration", "Cart & Checkout System", "Product Management", "Mobile-Friendly Store"],
        icon: <ShoppingCart className="w-12 h-12 text-orange-500" />
    },
    {
        title: "Mobile App Development",
        desc: "High-performance Android and iOS mobile applications with modern UI/UX, smooth functionality, and secure architecture.",
        items: ["Android App Development", "iOS App Development", "Business & Service Apps", "API Integration", "Performance Optimization"],
        icon: <Smartphone className="w-12 h-12 text-orange-500" />
    },
    {
        title: "UI/UX Design & Optimization",
        desc: "Modern, attractive, and user-friendly designs that improve user experience, increase engagement, and boost conversions.",
        items: ["Professional UI Design", "User Experience Optimization", "Mobile Responsive Design", "Conversion-Focused Layout", "Modern & Clean Interface"],
        icon: <Palette className="w-12 h-12 text-orange-500" />
    },
    {
        title: "WordPress Development",
        desc: "We build custom, easy-to-manage websites using WordPress, giving you full control over your content with the world's most popular platform.",
        items: ["Custom WordPress Themes", "Plugin Integration", "Blog & News Websites", "Elementor & Divi Experts", "WordPress Security & Updates"],
        icon: <Code2 className="w-12 h-12 text-orange-500" />
    },
    {
        title: "Website Maintenance & Support",
        desc: "Ongoing technical support, security updates, bug fixing, and performance optimization to ensure smooth software operation.",
        items: ["Regular Updates", "Security Monitoring", "Bug Fixing", "Speed Optimization", "Technical Support"],
        icon: <Settings className="w-12 h-12 text-orange-500" />
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                        Professional <span className="text-orange-500 not-italic">Software Development</span> Services
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                        MHS Tech provides high-quality, scalable, and SEO-friendly digital solutions for startups, businesses, and enterprises worldwide. Our goal is to build secure, fast, and performance-driven software that helps businesses grow and succeed online.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 bg-[#050505] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="glass p-10 rounded-[3rem] border-orange-500/10 hover:border-orange-500/40 transition-all group">
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{s.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {s.desc}
                            </p>
                            <ul className="space-y-3 border-t border-white/5 pt-8">
                                {s.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <div className="min-w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                            <CheckCircle2 className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter uppercase italic">
                        Why Choose <span className="text-orange-500 not-italic">MHS Tech</span>
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Professional Team",
                            "Modern Technologies",
                            "SEO Optimized",
                            "Fast & Secure",
                            "Affordable Pricing",
                            "Long-Term Support",
                            "100% Satisfaction",
                            "Custom Solutions"
                        ].map((item, i) => (
                            <div key={i} className="glass py-6 px-4 rounded-2xl border-white/5 hover:border-orange-500/20 transition-all">
                                <span className="font-bold text-gray-200 uppercase tracking-widest text-xs md:text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center bg-orange-500 text-black">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter">READY TO SCALE YOUR BUSINESS?</h2>
                    <p className="text-black/80 text-lg font-medium">Transform your vision into a powerful digital product today.</p>
                    <a href="/contact" className="inline-block px-12 py-6 bg-black text-white rounded-full font-black hover:scale-110 transition-transform uppercase tracking-widest">
                        Start Your Project
                    </a>
                </div>
            </section>
        </div>
    );
}
