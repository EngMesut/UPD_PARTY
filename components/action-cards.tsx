import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const actions = [
  {
    title: "MEMBERSHIP",
    description: "Join our party and make a difference in your community.",
    image: "/campaign.jpg",
    link: "/membership",
  },
  {
    title: "VOLUNTEER",
    description: "Contribute your time and skills to support our cause.",
    image: "/Volun...jpg",
    link: "/volunteer",
  },
  {
    title: "DONATE",
    description:
      "Support our campaign financially to help us reach more people.",
    image: "/HSMPIC1.jpg",
    link: "/donate",
  },
];

export default function ActionCards() {
  return (
    <section className="py-20  bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-primary">
          GET INVOLVED
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.link}
              className="group block bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={action.image || "/placeholder.svg"}
                  alt={action.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <Button className="w-full bg-primary hover:bg-secondary text-white transition-colors">
                  Join Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
