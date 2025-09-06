import Image from "next/image";

export default function Home() {
  return (
    // <h1 className="text-9xl font-bold underline">Hello world!</h1>

    <div className="flex justify-center bg-sky-300">
      <div className="mx-4 order-last">
        <Image src={"/next.svg"} alt="next logo" width={100} height={100} />
      </div>

      <div className="mx-4 self-center text-center">
        <h1 className="text-6xl font-bold text-zinc-200">Usama Israr</h1>
        <h2 className="text-3xl font-semibold text-zinc-200">
          Web3.0 and MetaVerse Classes
        </h2>
        <button className="my-4 px-4 py-2 border-2 border-zinc-200 rounded-lg text-zinc-200">
          Learn more
        </button>
      </div>
    </div>
  );
}
