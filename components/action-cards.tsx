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
    image: "/VOTING DAY.jpg?height=600&width=400",
    link: "/donate",
  },
];

// export default function ActionCards() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {actions.map((action, index) => (
//             <Link
//               key={index}
//               href={action.link}
//               className="group relative aspect-[3/4] overflow-hidden bg-primary"
//             >
//               <Image
//                 src={action.image || "/placeholder.svg"}
//                 alt={action.title}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105 mix-blend-overlay"
//               />
//               <div className="absolute inset-0 bg-primary/60 transition-opacity duration-300 group-hover:opacity-75" />
//               <h3 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
//                 {action.title}
//               </h3>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function ActionCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.link}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={action.image || "/placeholder.svg"}
                alt={action.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Removed the green background overlay */}
              <h3 className="absolute bottom-8 left-8 text-4xl font-bold text-white drop-shadow-md">
                {action.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
