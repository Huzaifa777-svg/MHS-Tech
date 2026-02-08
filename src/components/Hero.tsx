"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 pb-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full"
            >
                <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-8">
                    The Future of Engineering
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[1] max-w-5xl mx-auto italic uppercase">
                    We Build <span className="text-orange-500 not-italic">High-Quality</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-white to-gray-500">Websites & Apps</span>
                </h1>

                <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed px-4">
                    Looking for a reliable software house? We design and develop modern websites, eCommerce stores, and custom software that help companies grow faster and increase sales.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-orange-500 text-black rounded-2xl font-black hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(249,115,22,0.3)] uppercase tracking-wider text-sm">
                        Start Your Project
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto px-10 py-5 glass rounded-2xl font-black border-white/10 hover:bg-white/5 transition-colors uppercase tracking-wider text-sm">
                        Get Quote
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
