import { portfolioData } from "../data/portfolio";

export default function SkillCloud() {
  const { skills } = portfolioData.experience;

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-on-surface">{skills.title}</h2>
          <p className="text-on-surface-variant leading-relaxed max-w-lg mb-8">
            {skills.description}
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-primary px-6 py-3 rounded-md font-bold text-on-primary hover:opacity-90 transition-all">
              Get In Touch
            </button>
            <button className="px-6 py-3 rounded-md font-bold text-secondary border border-outline-variant/20 hover:bg-secondary/5 transition-all">
              View Projects
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {skills.list.map((skill) => (
            <div key={skill.name} className="glass-card px-6 py-4 rounded-xl flex items-center gap-3">
              <span className={`material-symbols-outlined ${skill.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                {skill.icon}
              </span>
              <span className="font-bold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
