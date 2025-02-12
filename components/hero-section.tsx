"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
        <img
          src="/HeroPic.jpg"
          alt="Campaign background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>

      {/* Updated Gradient for Better Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-transparent" />

      {/* Text Positioned to the Left & Lowered */}
      <div className="container mx-auto  px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-3xl text-left space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
            <span className="text-white">FIGHTING </span>
            <span className="text-secondary">FOR YOU</span>
          </h1>

          <p
            className="text-lg md:text-xl text-white max-w-2xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            From protecting pensioners' Winter Fuel Payments to stopping the
            unjust Farms Tax, we are standing up for your best interests. But we
            can't do it without <span className="font-bold">you</span>. So
            scroll down and{" "}
            <span className="text-secondary italic">Join the Renewal...</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}
