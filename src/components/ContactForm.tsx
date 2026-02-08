"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        const result = await sendEmail(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
            console.error(result.error);
        }
    }

    return (
        <section id="contact" className="py-24 px-4 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem]">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something</h2>
                    <p className="text-gray-400">Fill out the form and we&apos;ll get back to you within 24 hours.</p>
                </div>

                <form action={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Your Name</label>
                            <input
                                name="name"
                                required
                                className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            className="w-full bg-[#151515] border border-white/5 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 disabled:opacity-50 transition-all"
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="text-emerald-500 text-center font-medium mt-4">
                            Message sent successfully! We will contact you soon.
                        </p>
                    ) || status === "error" && (
                        <p className="text-red-500 text-center font-medium mt-4">
                            Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
