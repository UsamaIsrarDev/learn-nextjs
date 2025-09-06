import CarHeadlight from "@/components/Headlight";
import Seat from "@/components/Seat";
import CarWheel from "@/components/Wheel";

export default function Home() {
  return (
    <div>
      {/* <p className="text-xs">This is the one with 12px font size</p>
      <p className="text-lg">This is the one with 18px font size</p>
      <p className="text-2xl">This is the one with 24px font size</p> */}

      {/* <div className="bg-blue-500 h-24 w-52 hover:h-32 hover:w-60"></div> */}

      <div className="bg-blue-500 h-24 w-52 hover:scale-150"></div>
      <CarWheel />
      <CarWheel />
      <CarWheel />
      <CarWheel />
      <CarHeadlight />
      <CarHeadlight />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
    </div>
  );
}
