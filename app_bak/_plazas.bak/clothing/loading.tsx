export default function Loading(){
return (
<main className="mx-auto max-w-6xl px-4 py-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
{Array.from({length:8}).map((_,i)=>(
<div key={i} className="animate-pulse rounded-[16px] bg-[var(--panel)] p-3 ring-1 ring-[var(--ring)]">
<div className="aspect-square rounded-[14px] bg-white/10" />
<div className="mt-3 h-4 w-3/4 rounded bg-white/10" />
<div className="mt-2 h-4 w-2/5 rounded bg_white/10" />
</div>
))}
</main>
);
}