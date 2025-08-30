import { ImageEnhancer } from "@/components/image-enhancer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function EnhancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-headline font-bold">AI Image Enhancement</h1>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Upload a photo and let our AI tool automatically improve its brightness, color balance, and sharpness. See the magic for yourself.
                    </p>
                </div>
                <ImageEnhancer />
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
