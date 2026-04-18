import Image from "next/image";
import { portfolioData } from "../data/portfolio";

export default function BentoGrid() {
  const { bento } = portfolioData.about;

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
      {/* Education Card */}
      <div className="md:col-span-2 p-10 bg-surface-container rounded-xl flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
        <div className="z-10">
          <div className="flex items-center gap-2 text-primary mb-8">
            <span className="material-symbols-outlined text-3xl">school</span>
            <span className="font-bold tracking-widest uppercase text-xs">Foundation</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">{bento.education.title}</h3>
          <p className="text-on-surface-variant max-w-md">
            {bento.education.description}
          </p>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
          <Image 
            alt="Abstract architectural lines" 
            className="object-cover" 
            src={bento.education.image}
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
          {bento.arsenal.map((item) => (
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
              src={bento.philosophy.image}
              fill
              unoptimized
            />
          </div>
          <div className="flex-1">
            <span className="material-symbols-outlined text-tertiary mb-4">palette</span>
            <h3 className="text-2xl font-bold mb-4">{bento.philosophy.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {bento.philosophy.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
