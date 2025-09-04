export default function Home({params}: {params: { products: string }}) {
    return (
        <>
        <h1>Dynamic Route</h1>
        <p>This is a product which name is : {params.products}</p>
        </>
    )
}
