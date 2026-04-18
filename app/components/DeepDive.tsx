import { portfolioData } from "../data/portfolio";

export default function DeepDive() {
  const { deepDive } = portfolioData.about;

  return (
    <section className="max-w-4xl mx-auto py-20 border-t border-surface-container-highest">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-on-surface-variant sticky top-32">The Deep Dive</h2>
        </div>
        <div className="md:w-2/3 space-y-12">
          <p className="text-2xl text-on-surface leading-snug">
            {deepDive.intro}
          </p>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            {deepDive.paragraphs.map((p, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p.replace(/Performance, Accessibility, and Scalability/g, '<span class="text-secondary font-medium">Performance, Accessibility, and Scalability</span>') }} />
            ))}
          </div>
          <div className="pt-8">
            <button className="group flex items-center gap-4 text-primary font-bold tracking-tight text-xl">
              {deepDive.cta}
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
