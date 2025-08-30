import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-lg animate-fade-in">
          <Image
            src="https://picsum.photos/800/1000"
            alt="The photographer, Jane Doe"
            width={800}
            height={1000}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            data-ai-hint="photographer portrait"
          />
        </div>
        <div className="prose prose-lg text-muted-foreground max-w-none animate-fade-in-up delay-200">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">About</h2>
          <p>
            Hello, I&apos;m the heart and eye behind Lensio. My love for photography is rooted in a fascination with capturing the unscripted moments that tell the most powerful stories. I believe photography is more than just taking pictures—it&apos;s about preserving the raw emotion and delicate beauty of a single, unrepeatable moment in time.
          </p>
          <p>
            My approach is to find the sublime in the simple. Whether it&apos;s the quiet anticipation before a bride walks down the aisle, the breathtaking expanse of a natural landscape, or the electric atmosphere of a live event, I aim to create images that resonate on a deeper level. Let&apos;s collaborate to turn your moments into timeless art.
          </p>
        </div>
      </div>
    </section>
  );
}
