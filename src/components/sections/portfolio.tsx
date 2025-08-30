import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  { category: "Portraits", src: "https://picsum.photos/800/600?random=1", hint: "portrait photo" },
  { category: "Portraits", src: "https://picsum.photos/800/600?random=5", hint: "person smiling" },
  { category: "Portraits", src: "https://picsum.photos/800/600?random=9", hint: "woman model" },
  { category: "Weddings", src: "https://picsum.photos/800/600?random=2", hint: "bride photo" },
  { category: "Weddings", src: "https://picsum.photos/800/600?random=6", hint: "groom photo" },
  { category: "Weddings", src: "https://picsum.photos/800/600?random=10", hint: "bride groom" },
  { category: "Nature", src: "https://picsum.photos/800/600?random=3", hint: "nature landscape" },
  { category: "Nature", src: "https://picsum.photos/800/600?random=7", hint: "forest path" },
  { category: "Nature", src: "https://picsum.photos/800/600?random=11", hint: "mountain view" },
  { category: "Events", src: "https://picsum.photos/800/600?random=4", hint: "concert event" },
  { category: "Events", src: "https://picsum.photos/800/600?random=8", hint: "party celebration" },
  { category: "Events", src: "https://picsum.photos/800/600?random=12", hint: "corporate meeting" },
];

const categories = ["Portraits", "Weddings", "Nature", "Events"];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">Portfolio</h2>
        <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
          A curated collection of my work. Each photo tells a unique story, captured with a distinct vision.
        </p>
        <Tabs defaultValue="Portraits" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mx-auto max-w-md">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="animate-fade-in-up">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {portfolioItems.filter(item => item.category === category).map((item, index) => (
                  <Card key={`${category}-${index}`} className="overflow-hidden group border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.src}
                          alt={`${item.category} photography ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          data-ai-hint={item.hint}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
