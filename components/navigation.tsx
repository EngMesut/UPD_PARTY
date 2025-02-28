"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 px-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8">
            <Image
              src="/updLogo.jpg"
              alt="Zaitical Logo"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-[#2E8B57]">
            Union Peace&Dev
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <button
            onClick={() => handleNavigation("/volunteer")}
            className="text-[#2E8B57] hover:text-secondary transition-colors"
          >
            VOLUNTEER
          </button>
          <button
            onClick={() => handleNavigation("/campaign")}
            className="text-[#2E8B57] hover:text-secondary transition-colors"
          >
            CAMPAIGN
          </button>
          <button
            onClick={() => handleNavigation("/donate")}
            className="text-[#2E8B57] hover:text-secondary transition-colors"
          >
            DONATE
          </button>
          <button
            onClick={() => handleNavigation("/shop")}
            className="text-[#2E8B57] hover:text-secondary transition-colors"
          >
            SHOP
          </button>
          <Button
            onClick={() => handleNavigation("/volunteer")}
            className="bg-white text-[#2E8B57] border-2 border-[#2E8B57] hover:bg-[#2E8B57] hover:text-white transition-colors"
          >
            Donate Now →
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-[#2E8B57]" />
          ) : (
            <Menu className="h-6 w-6 text-[#2E8B57]" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <button
            onClick={() => handleNavigation("/volunteer")}
            className="block w-full text-left px-4 py-2 text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white transition-colors"
          >
            VOLUNTEER
          </button>
          <button
            onClick={() => handleNavigation("/campaign")}
            className="block w-full text-left px-4 py-2 text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white transition-colors"
          >
            CAMPAIGN
          </button>
          <button
            onClick={() => handleNavigation("/donate")}
            className="block w-full text-left px-4 py-2 text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white transition-colors"
          >
            DONATE
          </button>
          <button
            onClick={() => handleNavigation("/shop")}
            className="block w-full text-left px-4 py-2 text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white transition-colors"
          >
            SHOP
          </button>
          <Button
            onClick={() => handleNavigation("/donate")}
            className="w-full bg-white text-[#2E8B57] border-2 border-[#2E8B57] hover:bg-[#2E8B57] hover:text-white transition-colors"
          >
            Donate Now →
          </Button>
        </div>
      )}
    </nav>
  );
}
