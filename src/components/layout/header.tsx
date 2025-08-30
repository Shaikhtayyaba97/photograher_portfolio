"use client";

import Link from "next/link";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close the sheet if it's open
      const closeButton = document.querySelector('[data-radix-dialog-close]');
      if (closeButton instanceof HTMLElement) {
        closeButton.click();
      }
      
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Portfolio", id: "portfolio" },
    { label: "About", id: "about" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">Lensio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="transition-colors hover:text-primary">
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Camera className="h-6 w-6 text-primary" />
                  <span className="font-bold">Lensio</span>
                </Link>
                {navItems.map(item => (
                   <Button key={item.id} variant="ghost" onClick={() => scrollTo(item.id)} className="justify-start">
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
