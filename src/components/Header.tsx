"use client";

import Link from "next/link";
import { Mail, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full bg-black flex flex-col items-center pt-4 pb-6 border-b border-white/5 relative">
            {/* Top Section */}
            <div className="w-full max-w-7xl px-6 flex justify-between items-center relative h-16">

                {/* Left: Email */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                        <Mail className="w-4 h-4 text-orange-500" />
                    </div>
                    <span className="hidden md:block text-white/90 text-sm font-bold tracking-wide">mhsoftwarehouse77@gmail.com</span>
                </div>

                {/* Center: Logo Container */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
                    <Link href="/">
                        <div className="relative w-36 h-36 md:w-56 md:h-56 flex items-center justify-center">
                            <div className="absolute inset-6 bg-white/5 blur-2xl rounded-full" />
                            <Image
                                src="/images/logo.png"
                                alt="MHS Tech software house web development logo"
                                fill
                                className="object-contain p-2"
                                priority
                                unoptimized
                            />
                        </div>
                    </Link>
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-3">
                    <Link
                        href="https://www.facebook.com/share/1AQ7s2Dd2k/"
                        target="_blank"
                        className="w-10 h-10 rounded-lg border border-orange-500/30 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all text-orange-500"
                    >
                        <Facebook className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/muhammad-huzaifa-mhs"
                        target="_blank"
                        className="w-10 h-10 rounded-lg border border-orange-500/30 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all text-orange-500"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Bottom Section: Navigation Pill (More Compact) */}
            <nav className="mt-10 md:mt-18">
                <div className="px-8 md:px-12 py-3 rounded-full border border-orange-500/20 bg-white/5 backdrop-blur-xl flex items-center gap-6 md:gap-10 shadow-xl">
                    <Link href="/" className="text-white hover:text-orange-500 transition-colors text-sm md:text-base font-bold uppercase tracking-widest">Home</Link>
                    <Link href="/about" className="text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-bold uppercase tracking-widest">About Us</Link>
                    <Link href="/services" className="text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-bold uppercase tracking-widest">Services</Link>
                    <Link href="/projects" className="text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-bold uppercase tracking-widest">Projects</Link>
                    <Link href="/contact" className="text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-bold uppercase tracking-widest">Contact Us</Link>
                </div>
            </nav>
        </header>
    );
}
