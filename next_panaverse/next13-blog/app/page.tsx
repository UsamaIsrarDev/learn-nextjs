import Link from "next/link";
import { posts } from "@/data/posts";

type Post = {
  id: string;
  title: string;
  date: string;
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Home</h1>
        <div>
          {posts.map(({id, title, date}: Post) => (
            <>
               <Link href={`/posts/${id}`}>{title}</Link>
               <br />
               <p>{date}</p>
               <br />
            </>
          ))}
        </div>
        <Link href={'/posts'}>Post</Link>
        <Link href={'/account'}>Accounts</Link>
      </main>
    </div>
  );
}
