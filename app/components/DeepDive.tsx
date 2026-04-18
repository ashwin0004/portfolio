export default function DeepDive() {
  return (
    <section className="max-w-4xl mx-auto py-20 border-t border-surface-container-highest">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-on-surface-variant sticky top-32">The Deep Dive</h2>
        </div>
        <div className="md:w-2/3 space-y-12">
          <p className="text-2xl text-on-surface leading-snug">
            I approach frontend development like an architect approaches a skyscraper: the foundation must be immutable, while the facade must be breathtaking.
          </p>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p>
              My background in BCA from Kannur University gave me more than just a degree; it provided a systematic way of thinking. I learned that every beautiful UI is backed by an efficient data structure. This realization drove me to specialize in the intersection of Design and Engineering.
            </p>
            <p>
              Whether it&apos;s building complex state-managed dashboards or interactive marketing sites, my focus remains the same: <span className="text-secondary font-medium">Performance, Accessibility, and Scalability</span>. I don&apos;t just build components; I build systems.
            </p>
            <p>
              Away from the keyboard, you&apos;ll find me exploring the latest in spatial computing, studying typography trends, or experimenting with generative art. I&apos;m constantly seeking that perfect balance between technical constraints and creative freedom.
            </p>
          </div>
          <div className="pt-8">
            <button className="group flex items-center gap-4 text-primary font-bold tracking-tight text-xl">
              Let&apos;s build something next-gen
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
