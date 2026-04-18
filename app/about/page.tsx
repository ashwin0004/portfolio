import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import BentoGrid from "../components/BentoGrid";
import DeepDive from "../components/DeepDive";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <AboutHero />
        <BentoGrid />
        <DeepDive />
      </div>
      <Footer />
    </main>
  );
}
