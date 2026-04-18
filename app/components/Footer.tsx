"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-zinc-500 uppercase tracking-widest" suppressHydrationWarning>
            © {currentYear} ASHWIN BIJU. BUILT WITH DESIGN-FIRST PRINCIPLES.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold text-zinc-500 transition-colors hover:text-white uppercase tracking-widest">GitHub</a>
            <a href="#" className="text-xs font-bold text-zinc-500 transition-colors hover:text-white uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="text-xs font-bold text-zinc-500 transition-colors hover:text-white uppercase tracking-widest">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
