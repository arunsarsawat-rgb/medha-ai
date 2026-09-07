import { FileText, ClipboardCheck, MessageCircleQuestion } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}

const features: Feature[] = [
  {
    icon: FileText,
    title: 'AI Study Notes Generator',
    desc: 'NCERT & PYQ based notes generated instantly for any chapter or subject.',
    points: ['NCERT aligned', 'Previous Year Questions', 'Hindi & English'],
  },
  {
    icon: ClipboardCheck,
    title: 'Personal Mock Test',
    desc: 'Adaptive mock tests tuned to your level, with detailed performance analytics.',
    points: ['Adaptive difficulty', 'Instant results', 'Weakness tracking'],
  },
  {
    icon: MessageCircleQuestion,
    title: '24/7 Doubt Solver',
    desc: 'Ask any question any time — get step-by-step explanations in seconds.',
    points: ['Always available', 'Step-by-step answers', 'Photo & voice input'],
  },
];

function Features() {
  return (
    <section id="features" className="relative px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Features
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to crack your exams
          </h2>
          <p className="mt-4 text-blue-100/60">
            Three powerful tools, one smart companion — built for Bharat's
            students.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/30 hover:bg-white/[0.07] sm:p-8"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity duration-300 group-hover:bg-amber-500/20" />

              {/* Icon */}
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 ring-1 ring-amber-400/30">
                <f.icon className="h-7 w-7 text-amber-400" />
              </div>

              {/* Title + desc */}
              <h3 className="relative text-xl font-semibold text-white">
                {f.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-blue-100/60">
                {f.desc}
              </p>

              {/* Points */}
              <ul className="relative mt-5 space-y-2">
                {f.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-blue-100/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
