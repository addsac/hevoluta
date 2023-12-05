import ProductCard from "./product-card";


export default function ProductRow({ items = [] } : { items: any[] }) {
    return (
        <div className="w-full flex gap-2.5">
            {items.map(item => (
                <ProductCard item={item} />                
            ))}
        </div>
    )
}