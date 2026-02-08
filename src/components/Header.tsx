"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Facebook, Linkedin, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => window.removeEventListener("scroll", handleScroll);
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
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">

                {/* Left: Email */}
                <div className="hidden sm:flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                        <Mail className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                    <span className="hidden lg:block text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">huzaifamm70@gmail.com</span>
                </div>

                {/* Center: Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
                    <Link href="/" className="block">
                        <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                            <Image
                                src="/images/logo.png"
                                alt="MHS Tech"
                                fill
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                    </Link>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center gap-4 mr-4">
                        <Link href="https://facebook.com/share/1AQ7s2Dd2k/" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
                            <Facebook className="w-4 h-4" />
                        </Link>
                        <Link href="https://linkedin.com/in/muhammad-huzaifa-mhs" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/60 hover:text-orange-500 transition-colors text-[9px] font-black uppercase tracking-[0.25em]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 relative z-[60]"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-50 lg:hidden flex flex-col p-8 pt-32 h-[100dvh]"
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
                                className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-black rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                            >
                                Start a Project <ArrowRight className="w-4 h-4" />
                            </Link>

                            <div className="flex gap-8 mt-12 py-8 border-t border-white/5 w-full justify-center sm:justify-start">
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
