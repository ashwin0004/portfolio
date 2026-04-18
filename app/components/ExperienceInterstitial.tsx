import Image from "next/image";
import { portfolioData } from "../data/portfolio";

export default function ExperienceInterstitial() {
  const { interstitial } = portfolioData.experience;

  return (
    <section className="relative h-[600px] overflow-hidden rounded-3xl my-32 group">
      <div className="absolute inset-0 z-10 bg-linear-to-t from-background via-background/20 to-transparent"></div>
      <Image
        alt="Engineering visual"
        className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
        src={interstitial.image}
        fill
        unoptimized
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 md:p-24">
        <span className="text-secondary font-black tracking-[0.5em] mb-4 text-xs uppercase">{interstitial.badge}</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-on-surface">
          {interstitial.title}
        </h2>
      </div>
    </section>
  );
}
