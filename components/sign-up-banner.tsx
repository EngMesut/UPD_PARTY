import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SignUpBanner() {
  return (
    <div className="bg-secondary py-4">
      <div className="container mx-auto px-4 flex items-center justify-center gap-4">
        <span className="text-white text-xl font-bold">SIGN UP TO HEAR FROM KEMI</span>
        <Link
          href="/sign-up"
          className="bg-white text-primary px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          I'M IN
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

