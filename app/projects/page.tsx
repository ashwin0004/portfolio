import ProjectHero from "../components/ProjectHero";
import ProjectGrid from "../components/ProjectGrid";
import ProjectCTA from "../components/ProjectCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-on-surface selection:bg-primary/30 selection:text-primary">
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <ProjectHero />
        <ProjectGrid />
        <ProjectCTA />
      </div>
    </main>
  );
}
