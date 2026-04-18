import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import TechnicalArsenal from "./components/TechnicalArsenal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <Background />
      <TechnicalArsenal />
      <Footer />
    </main>
  );
}
