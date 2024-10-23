import { posts } from "@/data/posts";

export async function generateStaticParams() {
    const ids: string[] = ["1", "2"];
    return ids.map(id => ({ id: id }));
}

async function getPost(id: string) {
    const post = posts.find(post => post.id === id);
    return post;
}

export default async function Post({params}: {params: {id: string}}) {
    const { id } = params;
    const post = await getPost(id);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>{post!.title}</h1>
            <p>{post!.date}</p>
        </main>
        </div>
    );
}
  