// import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

export default function Home() {
  return (
    // <div className="flex bg-gray-800 text-gray-300 text-2xl justify-end">
    //   <div className="px-2 mx-4 my-6 hover:font-bold">Home</div>
    //   <div className="px-2 mx-4 my-6 hover:font-bold">About</div>
    //   <div className="px-2 mx-4 my-6 hover:font-bold">Contact</div>
    // </div>

    <>
      {/* <Navbar /> */}

      <Team />
      <Reviews />
      <Subscribe />
    </>
  );
}
