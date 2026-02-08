"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Facebook, Linkedin, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact Us", href: "/contact" },
    ];

    const menuVariants = {
        closed: { opacity: 0, x: "100%" },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 300,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.3 }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <header className="w-full bg-black flex flex-col items-center pt-4 pb-6 border-b border-white/5 relative">
            {/* Top Bar: Always visible, but contents change slightly */}
            <div className="w-full max-w-7xl px-6 flex justify-between items-center relative h-16">

                {/* Left: Email (Desktop/Tablet) */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                        <Mail className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="hidden md:block text-white/90 text-sm font-bold tracking-wide uppercase tracking-[0.1em]">huzaifamm70@gmail.com</span>
                </div>

                {/* Center: Large Logo (Desktop/Tablet) - Shown when not on narrow mobile */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
                    <Link href="/" className="block pointer-events-auto">
                        <div className="relative w-36 h-36 md:w-56 md:h-56 flex items-center justify-center translate-y-2 md:translate-y-4">
                            <div className="absolute inset-6 bg-white/5 blur-2xl rounded-full" />
                            <Image
                                src="/images/logo.png"
                                alt="MHS Tech"
                                fill
                                className="object-contain p-2"
                                priority
                                unoptimized
                            />
                        </div>
                    </Link>
                </div>

                {/* Right: Socials (Desktop) & Menu Toggle (Mobile) */}
                <div className="flex items-center gap-4">
                    {/* Socials - Desktop/Tablet */}
                    <div className="hidden sm:flex items-center gap-3">
                        <Link href="https://facebook.com/share/1AQ7s2Dd2k/" target="_blank" className="w-10 h-10 rounded-lg border border-orange-500/30 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all text-orange-500">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/muhammad-huzaifa-mhs" target="_blank" className="w-10 h-10 rounded-lg border border-orange-500/30 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all text-orange-500">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle - Small Screens Only */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 relative z-[60]"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Bottom: Desktop Navigation Pill (Hidden on Mobile) */}
            <nav className="mt-14 md:mt-18 hidden lg:block">
                <div className="px-8 md:px-12 py-3 rounded-full border border-orange-500/20 bg-white/5 backdrop-blur-xl flex items-center gap-6 md:gap-10 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-black uppercase tracking-[0.2em]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-50 lg:hidden flex flex-col p-8 pt-32 h-[100dvh]"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="flex flex-col gap-6 relative z-10 text-center sm:text-left sm:pl-10">
                            <p className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4">NavigatioN</p>
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl sm:text-6xl font-black uppercase tracking-tighter hover:text-orange-500 transition-all flex items-center gap-4 group justify-center sm:justify-start"
                                    >
                                        <span className="opacity-10 group-hover:opacity-100 group-hover:text-orange-500 transition-opacity">/</span>
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={linkVariants} className="mt-auto relative z-10 flex flex-col items-center sm:items-start sm:pl-10">
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="w-full sm:w-auto px-10 py-5 bg-orange-500 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
                            >
                                Start a Project <ArrowRight className="w-4 h-4" />
                            </Link>

                            <div className="flex gap-10 mt-12 py-8 border-t border-white/5 w-full justify-center sm:justify-start">
                                <Link href="https://facebook.com/share/1AQ7s2Dd2k/" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
                                    <Facebook className="w-6 h-6" />
                                </Link>
                                <Link href="https://linkedin.com/in/muhammad-huzaifa-mhs" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                                <Link href="mailto:huzaifamm70@gmail.com" className="text-gray-500 hover:text-orange-500 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
