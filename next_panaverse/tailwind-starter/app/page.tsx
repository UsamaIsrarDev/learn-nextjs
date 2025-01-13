import Image from "next/image";

export default function Home() {
  return (
    // <h1 className="text-6xl font-bold underline">
    //   Hello world!
    // </h1>

    <div className="flex justify-center bg-sky-700">
      {""}
      <div className="m-4 order-last">
        <Image src={'/profile.jpg'} alt="Next Logo" width={100} height={100}/>
      </div>
      <div className="mx-4 self-center text-center">
        <h1 className="text-3xl font-bold text-zinc-200">Usama Israr Khan</h1>
        <h2 className="text-1xl font-semibold text-zinc-200">Teaching Web 3 & Metaverse classes</h2>
        <button className="my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200">Learn more</button>
      </div>
    </div>
  );
}
