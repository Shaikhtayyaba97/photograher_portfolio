"use client";

import Link from "next/link";
import { Camera, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMobileMenuOpen(false); // Close the sheet
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-14 items-center">
        {/* Desktop Logo */}
        <Link href="/" className="mr-6 hidden items-center space-x-2 md:flex">
          <Camera className="h-6 w-6 text-accent" />
          <span className="font-bold hidden sm:inline-block">Lensio</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="transition-colors hover:text-accent">
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Layout */}
        <div className="grid grid-cols-3 w-full items-center md:hidden">
          {/* Left: Camera Icon */}
          <div className="flex justify-start">
             <Link href="/" className="flex items-center">
                <Camera className="h-6 w-6 text-accent" />
             </Link>
          </div>
          
          {/* Center: Logo Text */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-center">Lensio</span>
            </Link>
          </div>
          
          {/* Right: Menu Trigger */}
          <div className="flex justify-end">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>
                     <Link href="/" className="mr-6 flex items-center space-x-2">
                      <Camera className="h-6 w-6 text-accent" />
                      <span className="font-bold">Lensio</span>
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    Navigate through the website sections.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 p-4">
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
      </div>
    </header>
  );
}
