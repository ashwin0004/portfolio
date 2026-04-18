import { portfolioData } from "../data/portfolio";

export default function ExperienceHero() {
  const { hero } = portfolioData.experience;

  return (
    <header className="relative pt-44 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12">
      <div className="max-w-3xl">
        <span className="text-secondary uppercase tracking-[0.2em] font-bold mb-4 block text-xs">{hero.badge}</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
          {hero.title.split("Architecture")[0]}
          <span className="text-primary">Architecture</span>
          {hero.title.split("Architecture")[1]}
        </h1>
      </div>
      <div className="text-right max-w-xs mb-4">
        <p className="text-lg text-on-surface-variant italic leading-relaxed">
          {hero.description}
        </p>
      </div>
    </header>
  );
}
