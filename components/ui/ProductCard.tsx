import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
return (
<Link href={`/cloth/p/${product.id}`} className="group block rounded-2xl overflow-hidden border hover:shadow-sm transition">
<div className="relative">
<img
src={product.image}
alt={product.title}
className="w-full aspect-[4/5] object-cover"
loading="lazy"
/>
</div>
<div className="p-3">
<div className="text-sm line-clamp-2">{product.title}</div>
<div className="mt-1 text-sm opacity-70">{product.brand}</div>
<div className="mt-1 font-medium">
{product.price.toFixed(2)} {product.currency}
</div>
</div>
</Link>
);
}
