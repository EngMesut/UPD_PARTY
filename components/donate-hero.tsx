import Image from "next/image";

export default function DonateHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/HSMPIC2.jpg"
          alt="Donate to our campaign"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary mix-blend-multiply" />
      </div>

      {/* Decorative Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-200 600 C100 400, 400 700, 800 500 C1200 300, 1500 600, 1800 400"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M-200 400 C200 600, 500 300, 900 500 C1300 700, 1600 400, 1900 600"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-8xl font-bold text-white tracking-tight">DONATE</h1>
        <h2 className="text-4xl font-bold text-white tracking-wider">
          POWER THE RENEWAL
        </h2>
      </div>
    </div>
  );
}
