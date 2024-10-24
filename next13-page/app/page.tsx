import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <Link href={'/about'}>About</Link>
    <Image src={'./next.svg'} alt="profile image" width={100} height={100} />
    </>
  );
}
