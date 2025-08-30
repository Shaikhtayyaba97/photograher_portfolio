"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A captivating landscape photograph"
        fill
        className="object-cover -z-10 brightness-50"
        priority
        data-ai-hint="landscape photography"
      />
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-headline font-bold drop-shadow-lg leading-tight">
          Lensio: Framing Moments, Creating Memories
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md max-w-3xl mx-auto">
          Capturing life's most precious moments with an artist's eye and a storyteller's heart.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => scrollTo('portfolio')}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-black" onClick={() => scrollTo('contact')}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
