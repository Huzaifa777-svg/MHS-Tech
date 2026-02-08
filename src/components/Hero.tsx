"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
            >
                <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-8">
                    The Future of Engineering
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] max-w-5xl mx-auto">
                    We Build High-Quality <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700">Websites, Apps & Business Software</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                    Looking for a reliable software house? We design and develop modern websites, eCommerce stores, and custom business software that help companies grow faster, automate work, and increase online sales.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Link href="/contact" className="px-10 py-5 bg-orange-500 text-black rounded-2xl font-black hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(249,115,22,0.3)]">
                        Start Your Project
                    </Link>
                    <Link href="/contact" className="px-10 py-5 glass rounded-2xl font-black border-white/10 hover:bg-white/5 transition-colors">
                        Get Quote
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
