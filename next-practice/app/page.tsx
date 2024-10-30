import Link from "next/link";

export default function Home() {
  return (
    <div className="border-2 border-cyan-600 bg-amber-300 p-4">
      <h1 className="text-red-950 font-bold">Hello World!</h1><br />

      <Link href={'./products'}>Products</Link><br />
      <Link href={'./about'}>About</Link>
    </div>
  );
}
