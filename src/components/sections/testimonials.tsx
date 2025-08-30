import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  { name: "Emily & John", quote: "The photos are absolutely breathtaking! You captured our wedding day so perfectly. We can't stop looking at them. Thank you for everything!", rating: 5 },
  { name: "Sarah L.", quote: "An incredible eye for detail and a true professional. The portrait session was so much fun, and the results exceeded all my expectations.", rating: 5 },
  { name: "Nature Explorers Inc.", quote: "The landscape photos for our new campaign are stunning. The quality and artistic vision brought our project to life. Highly recommended!", rating: 5 },
  { name: "David Chen", quote: "Working with Aperture Aesthetic was a dream. Punctual, creative, and delivered a gallery of photos that we will cherish forever.", rating: 5 },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">What Clients Say</h2>
        <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">
          Kind words from happy clients who have trusted me with their most precious moments.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-8"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          {Array(testimonial.rating).fill(0).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
