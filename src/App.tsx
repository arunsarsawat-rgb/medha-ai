import MandalaBackground from '@/components/MandalaBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a1a3f] text-white selection:bg-amber-400/30">
      {/* Gradient overlay for depth */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-[#0a1a3f] via-[#0d2050] to-[#0a1a3f]" />
      {/* Mandala watermark pattern */}
      <MandalaBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
