"use client";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navigation() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      {/* Navigation */}
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
            <span className="text-2xl font-bold text-[#2E8B57]">
              Union Peace&Dev
            </span>
          </button>

          <div className="flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("/volunteer")}
              className="text-[#2E8B57] hover:text-secondary transition-colors"
            >
              VOLUNTEER
            </button>
            <button
              onClick={() => handleNavigation("/volunteer")}
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
            <div className="flex items-center space-x-4">
              {" "}
              {/* <div className="relative">
                {" "}
                <ShoppingCart className="h-6 w-6 text-[#2E8B57]" />{" "}
                <span className="absolute -top-2 -right-2 bg-[#2E8B57] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {" "}
                  0{" "}
                </span>{" "}
              </div>{" "} */}
              <Button
                onClick={() => handleNavigation("/volunteer")}
                className="bg-white text-[#2E8B57] border-2 border-[#2E8B57] hover:bg-[#2E8B57] hover:text-white transition-colors"
              >
                {" "}
                Donate Now →{" "}
              </Button>{" "}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
