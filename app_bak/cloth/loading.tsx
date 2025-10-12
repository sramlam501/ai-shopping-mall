import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
return (
<main className="mx-auto max-w-6xl px-4 py-8">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
{Array.from({length:12}).map((_,i)=>(
<div key={i} className="rounded-2xl border overflow-hidden">
<Skeleton className="aspect-[4/5]" />
<div className="p-3 space-y-2">
<Skeleton className="h-4" />
<Skeleton className="h-4 w-2/3" />
<Skeleton className="h-4 w-1/3" />
</div>
</div>
))}
</div>
</main>
);
}
