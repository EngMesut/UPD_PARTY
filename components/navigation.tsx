"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-primary/90 text-backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo on the left */}
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UPD-LOGO.jpg-NTcieqWTeByAfsGeFnFFxWNJvDAVrJ.jpeg"
            alt="Party Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation links and button on the right */}
        <div className="flex items-center space-x-8">
          <Link
            href="/volunteer"
            className="text-white hover:text-secondary transition-colors"
          >
            VOLUNTEER
          </Link>
          <Link
            href="/donate"
            className="text-white hover:text-secondary transition-colors"
          >
            DONATE
          </Link>
          <Link
            href="/shop"
            className="text-white hover:text-secondary transition-colors"
          >
            SHOP
          </Link>
          <Button
            variant="outline"
            className="border-white text-green-600 hover:bg-white hover:text-primary"
          >
            JOIN
          </Button>
        </div>
      </div>
    </nav>
  );
}
