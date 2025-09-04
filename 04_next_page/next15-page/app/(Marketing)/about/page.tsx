import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <>
        <h1>About</h1>
        <Link href={'/'}>Home</Link>
        <Image src={'/next.svg'} alt="logo next.js" width={'100'} height={'100'} />
        </>
    )
}
