import Image from "next/image";
import { Button } from "../ui/button";
import Carrot from "../../../public/carot.png";
import Cabbage from "../../../public/cabbage.png";

export function SubscriptionCard() {
  return (
    <div className="bg-[#FDC85E] rounded-2xl p-4 flex flex-col items-center text-center space-y-3 max-w-[220px]">
      <div className="flex space-x-2">
        <Image src={Carrot} width={60} height={60} alt="Carrot" />
        <Image src={Cabbage} width={60} height={60} alt="Cabbage" />
      </div>
      <p className="text-[14px] text-black leading-snug">
        Start your health journey with a{" "}
        <strong className="font-semibold">FREE 1-month</strong> access to
        Nutrigo!
      </p>
      <Button className="cursor-pointer bg-[#CFF27E] hover:bg-[#bde26c] text-black text-[14px] font-medium px-4 py-1.5 rounded-md transition">
        Claim Now!
      </Button>
    </div>
  );
}

