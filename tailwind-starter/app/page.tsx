import Image from "next/image";

export default function Home() {
  return (
    // <h1 className="text-6xl font-bold underline">
    //   Hello world!
    // </h1>

    <div className="flex justify-center">
      {""}
      <div className="mx-4 order-last">
        <Image src={'/profile.jpg'} alt="Next Logo" width={100} height={100}/>
      </div>
      <div className="mx-4 self-center">
        <h1>Usama Israr Khan</h1>
        <h2>A premium in sight and sound</h2>
        <button>Learn more</button>
      </div>
    </div>
  );
}
