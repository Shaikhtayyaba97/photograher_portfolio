import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-lg animate-fade-in">
          <Image
            src="https://picsum.photos/800/1000"
            alt="The photographer"
            width={800}
            height={1000}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            data-ai-hint="photographer portrait"
          />
        </div>
        <div className="prose prose-lg text-muted-foreground max-w-none animate-fade-in-up delay-200">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">About Me</h2>
          <p>
            Hi, I'm the artist behind Aperture Aesthetic. My journey into photography began from a deep-seated passion for storytelling. I believe that every moment has a story to tell, and my goal is to capture those fleeting, authentic emotions in a way that is both beautiful and timeless.
          </p>
          <p>
            My artistic philosophy is simple: find the extraordinary in the ordinary. Whether it's the subtle glance between a newly married couple, the serene majesty of a mountain landscape, or the vibrant energy of a live event, I strive to create images that are not just seen, but felt. Let's create something beautiful together.
          </p>
        </div>
      </div>
    </section>
  );
}
