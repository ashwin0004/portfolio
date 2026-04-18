import { portfolioData } from "../data/portfolio";

export default function ExperienceHighlights() {
  const { highlights } = portfolioData.experience;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-32">
      <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10">
        <span className="material-symbols-outlined text-primary mb-4 text-4xl">hub</span>
        <h3 className="text-xl font-bold mb-4">{highlights.api.title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {highlights.api.description}
        </p>
      </div>
      <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10">
        <span className="material-symbols-outlined text-secondary mb-4 text-4xl">speed</span>
        <h3 className="text-xl font-bold mb-4">{highlights.performance.title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {highlights.performance.description}
        </p>
      </div>
    </div>
  );
}
