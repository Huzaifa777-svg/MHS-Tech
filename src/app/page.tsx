import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Link from "next/link";
import { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Web Development & MHS Tech | Custom Solutions",
  description: "We build professional websites, eCommerce stores, and custom business software. Trusted MHS Tech for fast, secure, and SEO-optimized development.",
};

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />

      {/* About Company */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              ABOUT <span className="text-orange-500">COMPANY</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We are a results-driven software house providing professional website development, business automation software, and mobile app development. Our focus is performance, security, and long-term business growth.
              </p>
              <p>
                We help businesses go digital with fast, scalable, and SEO-optimized solutions. Our team of expert developers ensures that your project is not just a digital asset, but a tool for success.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full bg-[#111] p-12 rounded-[3rem] border border-orange-500/10 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="software house web development team collaborating"
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6">CORE <span className="text-orange-500">SERVICES</span></h2>
              <p className="text-gray-400">Professional website development, eCommerce stores, and custom software solutions designed for growth.</p>
            </div>
            <Link href="/services" className="text-orange-500 font-bold border-b border-orange-500 pb-1 hover:text-orange-400 hover:border-orange-400 transition-all uppercase tracking-widest text-sm">
              View All Services
            </Link>
          </div>
          <Services />
        </div>
      </section>

      {/* Why Businesses Trust Us */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto glass rounded-[4rem] p-12 md:p-24 border-orange-500/10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black italic">WHY BUSINESSES <br /><span className="text-orange-500 not-italic">TRUST US</span></h2>
            <p className="text-gray-400 leading-relaxed">
              We don&apos;t just deliver code; we deliver value. Our process is transparent, efficient, and focused on your business goals and online sales.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Experienced Developers",
                "Modern Tech (React, Next.js, WP)",
                "Business-Focused Solutions",
                "Fast Delivery",
                "Secure & Scalable Systems"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-bold text-sm md:text-base">
                  <div className="min-w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 text-center px-6">
        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">READY TO <span className="text-orange-500 italic">GROW?</span></h2>
        <Link href="/contact" className="px-16 py-8 bg-orange-500 text-black text-xl font-black rounded-full hover:scale-110 transition-transform inline-block shadow-[0_20px_50px_rgba(249,115,22,0.3)]">
          GET A FREE QUOTE
        </Link>
      </section>
    </div>
  );
}
