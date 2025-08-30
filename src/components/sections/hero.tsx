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
    <section className="relative h-[85vh] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/hero.png"
        alt="A stunning photograph from the portfolio"
        fill
        className="object-cover -z-10"
        priority
        data-ai-hint="dramatic landscape"
      />
      <div className="container max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight drop-shadow-2xl leading-tight">
          Timeless Photography, Unforgettable Stories
        </h1>
        <p className="mt-6 text-lg md:text-xl font-light text-neutral-200 drop-shadow-lg max-w-3xl mx-auto">
          We don't just take pictures. We capture the emotions, the laughter, and the love that make your moments last a lifetime. Discover the art of visual storytelling.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollTo('portfolio')}>
            Explore My Work <ArrowRight />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white hover:text-black" onClick={() => scrollTo('contact')}>
            Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
