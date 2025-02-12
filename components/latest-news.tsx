import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    title: "REBUILDING TRUST: OUR NEW IMMIGRATION POLICY",
    excerpt:
      "UPD PARTY new plan for immigration shows the Party is back in the service of the British people",
    date: "6/2/2025",
    image: "/HeroPic.jpg",
    link: "/news/immigration-policy",
  },
  {
    title: "HSM FIRST SPEECH OF 2025: REBUILDING TRUST",
    excerpt:
      "HSM gave a speech on how she'll rebuild trust in the Conservative Party",
    date: "16/1/2025",
    image: "/HeroPic.jpg",
    link: "/news/kemi-speech-2025",
  },
  {
    title: "UPD FORCE VOTE ON NATIONAL INSURANCE",
    excerpt:
      "We Conservatives strongly believe in supporting the victims of this appalling abuse and deserve justice.",
    date: "9/12/2025",
    image: "/HeroPic.jpg",
    link: "/news/national-insurance",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-primary">
          LATEST NEWS
        </h2>

        <div className="relative overflow-hidden py-4 mb-12">
          <div className="animate-scroll-text whitespace-nowrap">
            <div className="inline-block">
              <span className="inline-flex text-xl">
                {Array(10)
                  .fill("READ ALL ABOUT IT")
                  .map((text, i) => (
                    <span
                      key={i}
                      className={
                        i % 2 === 0
                          ? "text-primary mx-4"
                          : "text-secondary mx-4"
                      }
                    >
                      {text}
                    </span>
                  ))}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/public/HeroPic.jpg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2">{item.excerpt}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/news"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
          >
            SEE ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
