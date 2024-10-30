import Head from "next/head";
import Link from "next/link";

export default function About() {
    return (
      <div className="border-2 border-gray-300 bg-green-700 p-4">
        <Head>
          <title>About</title>
        </Head>

        <h1 className="text-purple-950 font-bold underline">About</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti, itaque esse excepturi eos omnis cum soluta optio cupiditate amet ullam? Tempora provident recusandae, excepturi iure eos sit quis quos.</p>
        <br />
        <Link href={'/'}>⬅ Back to Home</Link>
      </div>
    );
  }
  