import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A captivating landscape photograph"
        fill
        className="object-cover -z-10 brightness-50"
        priority
        data-ai-hint="landscape photography"
      />
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
          Lensio
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md">
          Capturing life's moments with artistry and passion.
        </p>
      </div>
    </section>
  );
}
