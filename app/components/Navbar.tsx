"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "../data/portfolio";

export default function Navbar() {
  const { personal } = portfolioData;
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl rounded-full border border-outline-variant/20 bg-surface-container/60 backdrop-blur-xl flex justify-between items-center px-8 py-3 z-50 shadow-[0_8px_32px_rgba(175,162,255,0.06)] font-sans tracking-tight font-medium text-sm">
      <Link href="/" className="text-xl font-black tracking-tighter text-secondary">
        Ashwin Biju
      </Link>

      <div className="hidden md:flex gap-4 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href}
              href={link.href} 
              className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-primary bg-primary/10 shadow-[0_0_15px_rgba(175,162,255,0.15)]" 
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-bright/40"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
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
