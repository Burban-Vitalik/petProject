import Image from "next/image";
import MenuItem from "../../../public/menuItem.png";
import { Button } from "../ui/button";
import { Star } from "lucide-react"; // можна додати будь-яку іконку

export function MenuItemCard() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer">
      <Image
        src={MenuItem}
        width={80}
        height={80}
        alt="Menu Item"
        className="rounded-md object-cover"
      />
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-1">
          <p className="font-medium text-gray-800">
            Greek Salad with Feta and Olives
          </p>
          <Button className="bg-lime-300 hover:bg-lime-400 text-black px-3 py-0 h-6">
            +
          </Button>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-0.5 bg-gray-100 rounded px-1 py-0.5">
            <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
            <span className="text-gray-800 text-sm">4.9</span>
            <span>/5</span>
          </div>
          <span className="bg-orange-100 text-gray-800 px-2 py-0.5 rounded-full">
            Lunch
          </span>
        </div>
      </div>
    </div>
  );
}

