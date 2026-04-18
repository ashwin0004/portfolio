import Image from "next/image";

export default function BentoGrid() {
  const stack = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma", "Three.js", "GSAP"];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
      {/* Education Card */}
      <div className="md:col-span-2 p-10 bg-surface-container rounded-xl flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
        <div className="z-10">
          <div className="flex items-center gap-2 text-primary mb-8">
            <span className="material-symbols-outlined text-3xl">school</span>
            <span className="font-bold tracking-widest uppercase text-xs">Foundation</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">BCA at Kannur University</h3>
          <p className="text-on-surface-variant max-w-md">
            Built the logical backbone through rigorous Computer Application studies. My journey from algorithmic thinking to visual implementation started here, translating abstract logic into human-centric interfaces.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
          <Image 
            alt="Abstract architectural lines" 
            className="object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADpx7GXoX-3Jhp6PjpSwi5Aof2PkUM_yBS5dFaYY_lajNq5GFBOSm0CncVszZutwcV3DaNQQF9VvQGiWZBavju71xZHUiSkYKNb2-xdn6LDf9OBYS8RNAbTNEqIQYo4FOKISFShc9VqLaWwMXMULI-YrGNKBFW_nGnraPZRx7EphXLHFpI5p8pF2hwIwclIbTx9fzFS0RcFpkvj0AbbFQncsTLho8XAJbykoSRDmyXLn8Dczg9ed7ZoyzfwGzKM6Rd4X_OXx2usN0"
            fill
            unoptimized
          />
        </div>
      </div>

      {/* Tech Stack Card */}
      <div className="p-10 bg-surface-container-high rounded-xl flex flex-col border border-outline-variant/10">
        <div className="text-secondary mb-8">
          <span className="material-symbols-outlined text-3xl">terminal</span>
        </div>
        <h3 className="text-xl font-bold mb-6">Core Arsenal</h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-full font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Performance Focus Card */}
      <div className="p-10 bg-surface-container-low rounded-xl flex flex-col justify-end min-h-[300px] border border-outline-variant/5">
        <h3 className="text-4xl font-black text-primary mb-4">99+</h3>
        <p className="font-bold text-on-surface mb-2">Performance Obsessed</p>
        <p className="text-sm text-on-surface-variant">
          Lighthouse scores aren&apos;t just numbers; they represent my commitment to inclusive, fast, and accessible digital experiences for everyone.
        </p>
      </div>

      {/* Design Philosophy Card */}
      <div className="md:col-span-2 bg-linear-to-br from-surface-container to-surface p-px rounded-xl">
        <div className="bg-surface w-full h-full rounded-lg p-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 relative aspect-square">
            <Image 
              alt="Macro light prism" 
              className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700 object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkyXJ0WE_AbYKziCkqmmc35FvOeuHRpw1RUZzuouJ-3jNlvCtwUXrxtKXQbzQZ9pc35VwemJQ0L1urF0G4LIaHx_3l22cNOPgWsemuciPycEEL7zmyAwKaaPxvnT_rx3d6h1LynwNsido2x8CeRjzJXlcCzU_mfaf0ye40JmEWvOZahiS4RQ2dmaGZ0-d2E8yse899-B8bYWU3wegObZkhShYo9ar4LDxvUlsgqqqGC0zWZFwwGmg-leCk_eHwRjameokFOCJS3CA"
              fill
              unoptimized
            />
          </div>
          <div className="flex-1">
            <span className="material-symbols-outlined text-tertiary mb-4">palette</span>
            <h3 className="text-2xl font-bold mb-4">The Obsidian Flux</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Design is the bridge between functionality and emotion. I believe in interfaces that feel invisible yet essential—leveraging light, depth, and intentional whitespace to guide users through complex data landscapes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
