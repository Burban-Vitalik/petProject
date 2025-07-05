import { PageTitle } from "@/components/general/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
// import { SearchIcon } from "@heroicons/react/24/solid"; // або будь-яка іконка пошуку

export function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <PageTitle>Healthy Menu</PageTitle>

      <span className="flex gap-4 items-center">
        <div className="relative">
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input placeholder="Search" className="pl-10" />
        </div>
        <Button>Filter</Button>
        <Button className="bg-lime-300 text-black hover:bg-lime-400">
          Add Menu
        </Button>
      </span>
    </header>
  );
}

