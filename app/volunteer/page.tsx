import VolunteerForm from "@/components/volunteer-form";
import { MarqueeBanner } from "@/components/marquee-banner";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/HeroPic.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-wider text-center animate-fade-in-up">
            VOLUNTEER
          </h1>
        </div>
      </div>

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Form Section */}
      <div className="py-12">
        <VolunteerForm />
      </div>
    </main>
  );
}
