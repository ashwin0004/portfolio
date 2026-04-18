"use client";

import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-12 border-t border-outline-variant/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-on-surface-variant text-sm">
        <div>
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={personal.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
          <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
