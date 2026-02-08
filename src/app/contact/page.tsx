import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact MHS Tech | Get a Quote for Your Digital Project",
    description: "Ready to start your project? Contact MHS Tech for professional web development, mobile apps, and WordPress solutions.",
    alternates: {
        canonical: "https://mhs-tech.vercel.app/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-black mb-6">GET IN <span className="text-orange-500">TOUCH</span></h1>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    Have a project in mind? Let&apos;s talk about how we can build it together.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Contact Information</h2>
                        <p className="text-gray-400">
                            Reach out to us via any of these channels. Our team is available 24/7.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 glass p-6 rounded-[2rem] border-orange-500/10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Email us at</div>
                                <div className="text-lg font-bold">mhsoftwarehouse77@gmail.com</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 glass p-6 rounded-[2rem] border-orange-500/10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                <Phone className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Call us</div>
                                <div className="text-lg font-bold">03152931751</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 glass p-6 rounded-[2rem] border-orange-500/10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Location</div>
                                <div className="text-lg font-bold">Karachi, Pakistan</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
