import Navbar from "../components/Navbar";
import ExperienceHero from "../components/ExperienceHero";
import TimelineItem from "../components/TimelineItem";
import ExperienceHighlights from "../components/ExperienceHighlights";
import SkillCloud from "../components/SkillCloud";
import ExperienceInterstitial from "../components/ExperienceInterstitial";
import Footer from "../components/Footer";
import { portfolioData } from "../data/portfolio";

export default function ExperiencePage() {
  const { timeline } = portfolioData.experience;

  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <ExperienceHero />
      
      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 timeline-line w-px -translate-x-1/2 opacity-20"></div>
        
        <div className="space-y-32">
          {timeline.map((item, index) => (
            <TimelineItem 
              key={index}
              {...item}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </section>

      <ExperienceHighlights />
      <SkillCloud />
      <ExperienceInterstitial />

      <Footer />
    </main>
  );
}
