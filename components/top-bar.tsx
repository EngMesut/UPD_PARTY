import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function topBar() {
  return (
    <div className="bg-[#2E8B57] text-white py-2 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>1-888-452-1505</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>updparty@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon - Sat: 8 am - 5 pm</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>58 Sd Street Road, Mogadishu, Somalia</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}



