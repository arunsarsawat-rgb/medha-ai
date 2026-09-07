import { Play, Sparkles, Star } from 'lucide-react';

function Hero() {
  return (
    <section id="top" className="relative px-4 pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-300 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          भारत में बना • AI से संचालित
        </div>

        {/* Title */}
        <h1 className="bg-gradient-to-b from-white via-blue-50 to-blue-200/70 bg-clip-text text-4xl font-bold leading-[1.15] tracking-tight text-transparent sm:text-6xl sm:leading-[1.1]">
          मेधा AI: भारत का अपना
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            एआई स्टडी पार्टनर
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100/70 sm:text-lg">
          एनसीईआरटी नोट्स, पर्सनल मॉक टेस्ट, और 24/7 डाउट सॉल्विंग — भारत के
          छात्रों के लिए, हिंदी और अंग्रेजी दोनों में। अपने एग्जाम्स को क्रैक करो,
          देसी एआई के साथ।
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#pricing"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-7 py-3.5 text-base font-semibold text-blue-950 shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.03] hover:shadow-amber-500/40 sm:w-auto"
          >
            Start Free Trial
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#demo"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
          >
            <Play className="h-4 w-4 fill-amber-400 text-amber-400" />
            Watch Demo
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-blue-100/60 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="ml-1 font-medium text-blue-100/80">4.9/5</span>
            <span>• 50,000+ students</span>
          </div>
          <span className="hidden h-4 w-px bg-white/15 sm:block" />
          <span>Trusted across 200+ schools</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
