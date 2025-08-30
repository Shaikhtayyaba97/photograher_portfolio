import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Camera className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            Built by Lensio. &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
