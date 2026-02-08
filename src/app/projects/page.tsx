import { Metadata } from "next";
import { ExternalLink, Code2, Globe, GraduationCap, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Projects | MHS Tech Portolio - High-Performance Web & App Solutions",
    description: "Explore the work of MHS Tech. From Premium E-Commerce Platforms to Learning Management Systems (LMS) and Professional Portfolios.",
    keywords: "E-Commerce Platform, Portfolio Website, Learning Management System, web development portfolio, MHS Tech projects, Next.js projects",
};

const projects = [
    {
        title: "Premium T-Shirt E-Commerce Platform",
        type: "E-Commerce Website",
        tech: "React.js, Vite, CSS, JavaScript",
        desc: "Experience a seamless online shopping journey with our custom T-Shirt e-commerce platform. Built with performance and user experience in mind.",
        features: [
            "Smooth product browsing and filtering",
            "Secure cart and checkout system",
            "Mobile-first responsive design",
            "Fast-loading pages for better SEO"
        ],
        icon: <ShoppingBag className="w-10 h-10 text-orange-500" />,
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80"
    },
    {
        title: "Professional Portfolio Showcase",
        type: "Personal Portfolio Website",
        tech: "HTML, CSS, JavaScript, GitHub Pages",
        desc: "Highlight your work with a sleek, modern portfolio design. Perfect for professionals looking to impress clients or recruiters with a digital showcase.",
        features: [
            "Clean and professional layouts for personal branding",
            "Smooth navigation and interactive elements",
            "Optimized performance and SEO-ready structure",
            "Lightweight design ensuring fast load times"
        ],
        icon: <Globe className="w-10 h-10 text-orange-500" />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
    },
    {
        title: "Learning Management System (LMS)",
        type: "LMS Platform",
        tech: "React.js, Backend Integration, SQL Database",
        desc: "Empower learners and educators with a robust Learning Management System. Demonstrates our ability to create efficient educational platforms.",
        features: [
            "User-friendly dashboard for students and teachers",
            "Course creation, enrollment, and progress tracking",
            "Secure login and role-based access control",
            "Scalable architecture optimized for performance"
        ],
        icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&q=80"
    }
];

export default function ProjectsPage() {
    return (
        <div className="bg-black min-h-screen text-white pb-24">
            {/* Hero Section */}
            <div className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter uppercase italic">
                        Our <span className="text-orange-500 not-italic">Projects</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Explore our latest work where performance meets design. We build high-converting online stores, sleek portfolios, and scalable LMS platforms.
                    </p>
                </div>
            </div>

            {/* Projects List */}
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {projects.map((p, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                        {/* Image side */}
                        <div className="flex-1 w-full group">
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/5 bg-gray-900 shadow-2xl">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                                <div className="absolute top-8 right-8 w-16 h-16 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                        </div>

                        {/* Content side */}
                        <div className="flex-1 space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-orange-500 font-bold uppercase tracking-widest text-sm">
                                    {p.icon}
                                    <span>{p.type}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black leading-tight italic">{p.title}</h2>
                                <p className="text-gray-500 font-mono text-sm uppercase">Technologies: {p.tech}</p>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                {p.desc}
                            </p>

                            <ul className="space-y-4 pt-4 border-t border-white/5">
                                {p.features.map((f, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-gray-300">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500" />
                                        <span className="flex-1">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="px-10 py-4 bg-orange-500/10 border border-orange-500/20 text-orange-500 rounded-full font-bold hover:bg-orange-500 hover:text-black transition-all uppercase tracking-widest text-xs">
                                Case Study coming soon
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-40 px-6 max-w-7xl mx-auto">
                <div className="glass p-12 md:p-24 rounded-[4rem] border-orange-500/10 text-center space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black italic">HAVE A <span className="text-orange-500 not-italic">PRODUCT</span> IN MIND?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Whether it&apos;s a high-performing e-commerce store or a complex management system, we have the expertise to bring it to life.
                    </p>
                    <a href="/contact" className="inline-block px-12 py-6 bg-orange-500 text-black rounded-full font-black hover:scale-110 transition-transform uppercase tracking-widest shadow-[0_20px_40px_rgba(249,115,22,0.3)]">
                        Start a Project
                    </a>
                </div>
            </div>
        </div>
    );
}
