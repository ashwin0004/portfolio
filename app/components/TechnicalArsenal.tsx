import { portfolioData } from "../data/portfolio";

export default function TechnicalArsenal() {
  const { techStack } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-background border-t border-outline-variant/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-outline-variant" />
          <h2 className="text-2xl font-bold tracking-tight text-on-surface">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
          {techStack.map((tech) => (
            <div 
              key={tech.name}
              className={`flex items-center justify-center p-3 rounded-md border border-transparent transition-all hover:scale-105 hover:z-10 cursor-default shadow-lg ${tech.bg} ${tech.text || "text-white/90"} ${tech.border || ""}`}
            >
              <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
