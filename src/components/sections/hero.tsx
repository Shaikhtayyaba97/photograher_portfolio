"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 md:py-24 min-h-[85vh]">
        <div className="flex flex-col items-start text-left animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight leading-tight text-foreground">
            Timeless Photography, Unforgettable Stories
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light text-muted-foreground max-w-3xl">
            We don't just take pictures. We capture the emotions, the laughter, and the love that make your moments last a lifetime. Discover the art of visual storytelling.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4">
            <Button size="lg" onClick={() => scrollTo('portfolio')}>
              Explore My Work <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('contact')}>
              Book Now
            </Button>
          </div>
        </div>
        <div className="relative w-full h-80 md:h-[60vh] animate-fade-in rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/hero.png"
            alt="A stunning photograph from the portfolio"
            fill
            className="object-cover"
            priority
            data-ai-hint="dramatic landscape"
          />
        </div>
      </div>
    </section>
  );
}
