import Link from "next/link";

export default function Products() {
    return (
      <div className="border-2 border-slate-950 bg-amber-900 p-4">
        <h1 className="text-red-100 font-bold underline">My Products!</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti, itaque esse excepturi eos omnis cum soluta optio cupiditate amet ullam? Tempora provident recusandae, excepturi iure eos sit quis quos.</p>
        <br />
        <Link href={'/'}>⬅ Back to Home</Link>
      </div>
    );
  }
  