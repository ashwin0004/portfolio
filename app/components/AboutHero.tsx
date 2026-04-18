export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
      <div className="lg:col-span-8">
        <span className="text-secondary uppercase tracking-[0.2em] font-medium mb-4 block text-xs">Origin Story</span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-on-surface">
          Ashwin <span className="text-primary">Biju</span>. <br/>
          Crafting <span className="italic font-light text-on-surface-variant">Digital</span> <br/>
          Performance.
        </h1>
      </div>
      <div className="lg:col-span-4 lg:text-right pb-4">
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-xs ml-auto">
          Frontend Engineer & UI Designer specializing in high-fidelity interfaces and hyper-optimized user experiences.
        </p>
      </div>
    </section>
  );
}
