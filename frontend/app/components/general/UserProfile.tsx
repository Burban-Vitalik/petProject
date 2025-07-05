import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BellIcon } from "lucide-react";
// import { Badge } from "@/components/ui/badge"; // якщо є Badge, або можна зробити кастомно
// import { cn } from "@/lib/utils"; // якщо використовуєш clsx/cn

export function UserProfile() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-[#f9f5f3] px-4 py-2">
      <div className="relative">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/evilrabbit.png" />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col">
        <p className="font-semibold text-gray-900 text-sm">Adam Vasylenko</p>
        <p className="text-xs text-gray-500">Member</p>
      </div>

      <div className="ml-auto relative">
        <div className="bg-white rounded-xl p-2">
          <BellIcon className="w-4 h-4 text-gray-700 cursor-pointer" />
        </div>
        <span className="absolute top-1 right-1 block w-2 h-2 bg-orange-500 rounded-full"></span>
      </div>
    </div>
  );
}

