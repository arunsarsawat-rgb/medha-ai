import { useState } from 'react';
import { Check, ShieldCheck, AlertTriangle, Lock } from 'lucide-react';

function Pricing() {
  const [verified, setVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const features = [
    'Unlimited AI Study Notes (NCERT/PYQ)',
    'Adaptive Personal Mock Tests',
    '24/7 Doubt Solver — Hindi & English',
    'Detailed performance analytics',
    'Photo & voice doubt upload',
    'Priority response time',
  ];

  const handleSubscribe = () => {
    if (!verified) return;
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <section id="pricing" className="relative px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Pricing
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, affordable pricing
          </h2>
          <p className="mt-4 text-blue-100/60">
            One plan. Everything included. Cancel anytime.
          </p>
        </div>

        {/* Plan card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl sm:p-10">
          {/* Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />

          {/* Badge */}
          <div className="relative mb-6 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-blue-950 shadow-lg shadow-amber-500/20">
              Most Popular
            </span>
          </div>

          {/* Price */}
          <div className="relative text-center">
            <p className="text-sm font-medium text-blue-100/70">Premium Plan</p>
            <div className="mt-3 flex items-end justify-center gap-1">
              <span className="text-5xl font-extrabold text-white sm:text-6xl">
                ₹99
              </span>
              <span className="mb-2 text-lg font-medium text-blue-100/60">
                /month
              </span>
            </div>
            <p className="mt-2 text-sm text-blue-100/50">
              Billed monthly • No hidden charges
            </p>
          </div>

          {/* Feature list */}
          <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-sm text-blue-100/85"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/30">
                  <Check className="h-3 w-3 text-amber-400" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* reCAPTCHA + bot warning */}
          <div className="relative flex flex-col items-center gap-5">
            {/* reCAPTCHA placeholder */}
            <div
              className="w-full max-w-sm rounded-lg border-2 border-blue-200/60 bg-white/95 p-3 shadow-lg"
              role="group"
              aria-label="reCAPTCHA verification"
            >
              <div className="flex items-center gap-3">
                {/* Checkbox */}
                <button
                  type="button"
                  onClick={() => setVerified((v) => !v)}
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded border-2 transition-all ${
                    verified
                      ? 'border-green-600 bg-green-600'
                      : 'border-gray-300 bg-white hover:border-blue-400'
                  }`}
                  aria-pressed={verified}
                  aria-label="I'm not a robot"
                >
                  {verified && <Check className="h-4 w-4 text-white" />}
                </button>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800">
                    I'm not a robot
                  </span>
                  <span className="text-xs text-gray-500">
                    Verify to continue
                  </span>
                </div>
                {/* reCAPTCHA branding */}
                <div className="ml-auto flex flex-col items-center">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                  <span className="mt-0.5 text-[9px] font-medium text-gray-500">
                    reCAPTCHA
                  </span>
                  <span className="text-[8px] text-gray-400">Privacy · Terms</span>
                </div>
              </div>
            </div>

            {/* Bot warning */}
            <div className="flex w-full max-w-md items-start gap-2.5 rounded-xl border border-amber-400/25 bg-amber-400/[0.08] px-4 py-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <p className="text-xs leading-relaxed text-amber-200/90">
                <span className="font-semibold">Bot protection:</span> Please
                complete the reCAPTCHA above before subscribing. Automated or
                spam submissions will be blocked and reported. Bots ko entry
                nahi milegi!
              </p>
            </div>

            {/* Subscribe button */}
            <button
              onClick={handleSubscribe}
              disabled={!verified || submitting}
              className={`relative inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-all sm:w-auto ${
                verified && !submitting
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-blue-950 shadow-xl shadow-amber-500/25 hover:scale-[1.03] hover:shadow-amber-500/40'
                  : 'cursor-not-allowed bg-white/10 text-blue-100/40'
              }`}
            >
              {submitting ? (
                'Processing...'
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Subscribe Now — ₹99/month
                </>
              )}
            </button>

            {!verified && (
              <p className="text-xs text-blue-100/40">
                Verify the reCAPTCHA to activate the subscribe button.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
