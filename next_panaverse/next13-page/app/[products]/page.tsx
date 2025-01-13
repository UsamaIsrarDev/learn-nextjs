import Link from "next/link";

export default function Product({params}: {params: {products: string}}) {
  return (
    <>
    <h1>Product</h1>
    <Link href={'/'}>Home</Link>
    <p>This is a some product {params.products}</p>
    </>
  );
}
