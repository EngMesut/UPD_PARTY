"use client"; // Add this line to mark the component as a Client Component

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Correct for Next.js 13 App Router

export default function CampaignPage() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="grid md:grid-cols-2 min-h-[400px]">
      {/* Left Section */}
      <div
        className="relative p-8 md:p-12 flex flex-col justify-center"
        style={{
          background: "linear-gradient(135deg, #2E8B57, #4CAF50)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/stars-pattern.svg)`,
              backgroundSize: "cover",
              opacity: 0.1,
            }}
          />
        </div>
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our Newest Political Campaign
          </h1>
          <p className="text-white/90 text-lg mb-8">
            The most exciting city of northeast, get your opportunity to move
            forward together now.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white hover:bg-gray-100 text-primary border-0 rounded-md w-fit font-semibold"
            onClick={() => handleNavigation("/learn-more")} // Example path
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="relative p-8 md:p-12 flex flex-col justify-center"
        style={{
          background: "linear-gradient(135deg, #2E8B57, #4CAF50)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL}/stars-pattern.svg)`,
              backgroundSize: "cover",
              opacity: 0.1,
            }}
          />
        </div>
        <div className="relative">
          <h2 className="text-4xl font-bold text-white mb-8">Donate Today</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {["$25", "$50", "$75", "$100", "$200"].map((amount, index) => (
              <Button
                key={index}
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-primary font-semibold text-lg h-16 rounded-md"
                onClick={() => handleNavigation("/donate")} // Example path
              >
                {amount}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => handleNavigation("/donate")} // Updated path for donation
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-md w-fit"
          >
            Donate Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
