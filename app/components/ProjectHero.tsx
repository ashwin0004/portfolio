import { portfolioData } from "../data/portfolio";

export default function ProjectHero() {
  const { hero } = portfolioData.projects;

  return (
    <header className="mb-20">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 bg-linear-to-br from-primary to-primary-container bg-clip-text text-transparent">
        {hero.title}
      </h1>
      <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
        {hero.description}
      </p>
    </header>
  );
}
