export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <span className="text-[#D4AF37] font-semibold">AI SHOPPING MALL</span>
        <div className="flex gap-5 text-sm">
          <a href="/cloth" className="hover:text-[#D4AF37]">Cloth</a>
          <a href="/beauty" className="hover:text-[#D4AF37]">Beauty</a>
          <a href="/food" className="hover:text-[#D4AF37]">Food</a>
          <a href="/travel" className="hover:text-[#D4AF37]">Travel</a>
        </div>
      </div>
    </nav>
  );
}

