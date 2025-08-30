import { ContactForm } from "@/components/contact-form";
import { Mail, Pin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <div className="prose prose-lg text-muted-foreground max-w-none animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Get In Touch</h2>
          <p>
            Have a project in mind? Looking for a quote for your wedding or event? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.
          </p>
           <div className="mt-8 space-y-4 not-prose">
             <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <span>contact@lensio.com</span>
             </div>
             <div className="flex items-center gap-4">
              <Pin className="w-5 h-5 text-accent" />
              <span>Based in New York, NY. Available for travel worldwide.</span>
             </div>
           </div>
        </div>
        <div className="animate-fade-in-up delay-200">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
