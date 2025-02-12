import Image from "next/image";
import Link from "next/link";

const actions = [
  {
    title: "MEMBERSHIP",
    image: "/campaign.jpg?height=600&width=400",
    link: "/membership",
  },
  {
    title: "VOLUNTEER",
    image: "/Volun...jpg?height=900&width=400",
    link: "/volunteer",
  },
  {
    title: "DONATE",
    image: "/HSMPIC1.jpg?height=600&width=400",
    link: "/donate",
  },
];

export default function ActionCards() {
  return (
    <section className="py-20 bg-white ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.link}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={action.image || "/placeholder.svg"}
                alt={action.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay hoose leh bg-white gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/100 via-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md">
                {action.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
