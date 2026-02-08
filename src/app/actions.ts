"use server";

import { Resend } from "resend";

export async function sendEmail(formData: FormData) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Protection against missing keys on Vercel
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.includes('actual_key')) {
        return { success: false, error: "Email service is not configured. Please add RESEND_API_KEY to your Vercel/environment settings." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "MHS Tech <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL || "huzaifamm70@gmail.com"],
            replyTo: email,
            subject: `New Project Inquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <h1 style="color: #f97316; margin-bottom: 8px;">MHS Tech</h1>
                        <p style="color: #6b7280; margin: 0;">New Inquiry Received</p>
                    </div>
                    
                    <div style="margin-bottom: 24px;">
                        <div style="margin-bottom: 12px;">
                            <strong style="color: #4b5563;">Client Name:</strong>
                            <p style="margin: 4px 0 0 0; font-size: 16px;">${name}</p>
                        </div>
                        <div style="margin-bottom: 12px;">
                            <strong style="color: #4b5563;">Client Email:</strong>
                            <p style="margin: 4px 0 0 0; font-size: 16px;">${email}</p>
                        </div>
                    </div>

                    <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                        <strong style="color: #4b5563;">Message:</strong>
                        <p style="margin: 8px 0 0 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>

                    <div style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 32px; border-top: 1px solid #e5e7eb; pt-16px;">
                        This email was sent from the MHS Tech contact form.
                    </div>
                </div>
            `,
        });

        if (error) {
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        return { success: false, error: "Something went wrong. Please check your environment variables." };
    }
}
