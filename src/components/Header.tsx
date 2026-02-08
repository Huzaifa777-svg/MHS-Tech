"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Facebook, Linkedin, Menu, X } from "lucide-react";
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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center relative">

                {/* Left: Email (Hidden on smallest mobile) */}
                <div className="hidden sm:flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                        <Mail className="w-3.5 h-3.5 text-orange-500" />
                    </div>
                    <span className="hidden lg:block text-white/70 text-xs font-bold tracking-wide">huzaifamm70@gmail.com</span>
                </div>

                {/* Center: Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 lg:translate-x-[-50%] lg:left-1/2">
                    <Link href="/">
                        <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
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

                {/* Right: Desktop Nav & Mobile Toggle */}
                <div className="flex items-center gap-6">
                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="https://facebook.com/share/1AQ7s2Dd2k/" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/muhammad-huzaifa-mhs" target="_blank" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Desktop Navigation Pill */}
                    <nav className="hidden lg:flex px-8 py-2.5 rounded-full border border-orange-500/10 bg-white/5 backdrop-blur-xl items-center gap-8 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/70 hover:text-orange-500 transition-colors text-[10px] font-black uppercase tracking-[0.2em]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-40 lg:hidden flex flex-col items-center justify-center gap-8 p-6"
                    >
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 relative mb-8">
                            <Image src="/images/logo.png" alt="Logo" fill className="object-contain" unoptimized />
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-black uppercase tracking-tighter hover:text-orange-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex gap-8 mt-12 pt-8 border-t border-white/5 w-full justify-center">
                            <Link href="https://facebook.com/share/1AQ7s2Dd2k/" target="_blank" className="text-gray-400"><Facebook className="w-6 h-6" /></Link>
                            <Link href="https://linkedin.com/in/muhammad-huzaifa-mhs" target="_blank" className="text-gray-400"><Linkedin className="w-6 h-6" /></Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
