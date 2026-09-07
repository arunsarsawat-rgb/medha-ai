import { BookOpen, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600">
                <BookOpen className="h-5 w-5 text-blue-950" />
              </span>
              <span className="text-lg font-semibold text-white">
                Medha<span className="text-amber-400"> AI</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/50">
              Bharat ka apna AI study partner. NCERT notes, mock tests, and
              24/7 doubt solving — sab kuch ek jagah.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-100/70 transition-colors hover:border-amber-400/30 hover:text-amber-400"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-100/70 transition-colors hover:border-amber-400/30 hover:text-amber-400"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-100/70 transition-colors hover:border-amber-400/30 hover:text-amber-400"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a
                href="mailto:hello@medhaai.in"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-100/70 transition-colors hover:border-amber-400/30 hover:text-amber-400"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
            <a
              href="mailto:hello@medhaai.in"
              className="text-sm text-blue-100/50 transition-colors hover:text-amber-400"
            >
              hello@medhaai.in
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-blue-100/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Medha AI. Made with pride in Bharat.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-amber-400">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-amber-400">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-amber-400">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
