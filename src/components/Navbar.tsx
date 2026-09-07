import { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#demo' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-blue-950/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/20">
              <BookOpen className="h-5 w-5 text-blue-950" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              Medha<span className="text-amber-400"> AI</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-blue-100/80 transition-colors hover:text-amber-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#pricing"
            className="hidden rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-blue-950 shadow-lg shadow-amber-500/20 transition-transform hover:scale-105 md:inline-block"
          >
            Get Started
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-1.5 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-white/10 px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-blue-100/90 transition-colors hover:bg-white/5 hover:text-amber-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-3 py-2 text-center text-sm font-semibold text-blue-950"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
