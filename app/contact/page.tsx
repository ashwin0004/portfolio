import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surface-container-lowest text-on-surface selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      
      <div className="pt-48 pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          <ContactHero />
          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
