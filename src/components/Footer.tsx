"use client";

import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="space-y-6">
                    <div className="text-2xl font-black tracking-tighter">
                        MHS<span className="text-orange-500">TECH</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Leading the way in digital innovation. We provide high-end software solutions tailored to your business needs.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com/share/1AQ7s2Dd2k/" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/muhammad-huzaifa-mhs" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                        <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                        <li><Link href="/projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold">Our Services</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>UI/UX Design</li>
                        <li>WordPress Development</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-orange-500" />
                            <span>mhsoftwarehouse77@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-orange-500" />
                            <span>03152931751</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span>Karachi, Pakistan</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} MHS Tech. All rights reserved.
            </div>
        </footer>
    );
}
