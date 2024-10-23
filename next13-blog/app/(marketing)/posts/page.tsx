"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Posts() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Posts</h1>
        <Link href={'/'}>⬅ Back to home</Link>

        {/* <button type="button" onClick={() => router.push('/')}>Back to home</button> */}
      </main>
    </div>
  );
}
