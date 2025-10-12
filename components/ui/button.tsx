export default function Button({children,className="",...props}:{children:React.ReactNode} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
return (
<button {...props}
className={`rounded-[var(--radius)] bg-white text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition ${className}`} />
);
}