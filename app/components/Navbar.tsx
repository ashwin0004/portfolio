import Link from "next/link";
import { portfolioData } from "../data/portfolio";

export default function Navbar() {
  const { personal } = portfolioData;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl rounded-full border border-outline-variant/20 bg-surface-container/60 backdrop-blur-xl flex justify-between items-center px-8 py-3 z-50 shadow-[0_8px_32px_rgba(175,162,255,0.06)] font-sans tracking-tight font-medium text-sm">
      <Link href="/" className="text-xl font-black tracking-tighter text-secondary">
        Neon Architect
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors">Home</Link>
        <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">About</Link>
        <Link href="/projects" className="text-on-surface-variant hover:text-primary transition-colors">Projects</Link>
        <Link href="/experience" className="text-on-surface-variant hover:text-primary transition-colors">Experience</Link>
        <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact</Link>
      </div>

      <a 
        href={personal.resumeUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-primary text-on-primary px-5 py-1.5 rounded-full font-bold scale-95 active:scale-90 transition-transform"
      >
        Resume
      </a>
    </nav>
  );
}
