import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div
      className="relative overflow-hidden bg-center bg-no-repeat min-h-screen w-full flex items-center"
      style={{
        backgroundImage: "url('/HSM2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container min-h-screen flex items-center py-24 bg-gradient-to-br from-primary/65 to-secondary/65">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Vote for the best political party.
            </h1>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              "We fight for our citizens' rights, so join us and make our
              country more beautiful together."
            </blockquote>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80">
              The most exciting city in the northeast, get your opportunity to
              move forward together now.
            </p>
            <Button className="bg-white text-primary hover:bg-secondary/90 hover:text-white text-base sm:text-lg px-6 sm:px-8">
              Learn More →
            </Button>
          </div>

          <div></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-8 sm:h-12 bg-secondary flex justify-center items-center">
        <div className="animate-scroll-text whitespace-nowrap flex items-center text-secondary-foreground text-xs sm:text-sm md:text-base text-center">
          <span className="mx-4">Join us in building a better future</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Together we can make a difference</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Your voice matters</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Building stronger communities</span>
          <span className="mx-4">Join us in building a better future</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Together we can make a difference</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Your voice matters</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Building stronger communities</span>
        </div>
      </div>
    </div>
  );
}
