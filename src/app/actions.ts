"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    const validatedData = contactFormSchema.parse(values);
    // In a real app, you'd send an email, save to a database, etc.
    console.log("Contact form submitted:", validatedData);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    return { success: true, message: "Message sent successfully." };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}
