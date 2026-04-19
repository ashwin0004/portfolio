import Hero from "./components/Hero";
import TechnicalArsenal from "./components/TechnicalArsenal";
import Background from "./components/Background";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cyan-500/30 pt-20">
      <Hero />
      <Background />
      <TechnicalArsenal />
    </main>
  );
}
