import Link from "next/link";
import { portfolioData } from "../data/portfolio";

export default function ProjectCTA() {
  const { cta } = portfolioData.projects;

  return (
    <section className="mt-32 py-20 bg-surface-container-low rounded-3xl text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(175,162,255,0.08),transparent_70%)]"></div>
      <div className="relative z-10 px-6">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-on-surface">{cta.headline}</h3>
        <p className="text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
          {cta.description}
        </p>
        <Link 
          href="/contact" 
          className="inline-block px-10 py-4 border border-outline-variant/30 text-secondary font-bold rounded-full hover:bg-secondary/10 hover:border-secondary transition-all text-lg"
        >
          {cta.button}
        </Link>
      </div>
    </section>
  );
}
