"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Cpu } from "lucide-react";

const services = [
    {
        title: "Website Design & Development",
        desc: "Modern, responsive, and high-converting websites tailored to your brand.",
        icon: <Globe className="w-8 h-8 text-orange-500" />,
    },
    {
        title: "E-Commerce Store Development",
        desc: "Scalable online stores with secure payments and seamless shopping experiences.",
        icon: <Smartphone className="w-8 h-8 text-orange-500" />,
    },
    {
        title: "Mobile Application Development",
        desc: "High-performance iOS and Android apps built with modern technologies.",
        icon: <Smartphone className="w-8 h-8 text-orange-500" />,
    },
];

export default function Services() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="glass p-8 rounded-[2rem] border-orange-500/5 hover:border-orange-500/20 transition-all"
                >
                    <div className="mb-6 w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">{s.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {s.desc}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
