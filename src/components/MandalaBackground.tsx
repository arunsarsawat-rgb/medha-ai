function MandalaBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Radial mandala top-right */}
      <svg
        viewBox="0 0 400 400"
        className="absolute -top-24 -right-24 h-[42rem] w-[42rem] text-amber-500/[0.06]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <MandalaSVG />
      </svg>
      {/* Radial mandala bottom-left */}
      <svg
        viewBox="0 0 400 400"
        className="absolute -bottom-32 -left-32 h-[38rem] w-[38rem] text-amber-400/[0.05]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <MandalaSVG />
      </svg>
      {/* Faint center watermark */}
      <svg
        viewBox="0 0 400 400"
        className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 text-amber-300/[0.025]"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <MandalaSVG />
      </svg>
    </div>
  );
}

function MandalaSVG() {
  const petals = Array.from({ length: 24 });
  const innerPetals = Array.from({ length: 16 });
  const dots = Array.from({ length: 36 });
  return (
    <g>
      {/* Outer ring dots */}
      <circle cx="200" cy="200" r="195" />
      <circle cx="200" cy="200" r="178" />
      <circle cx="200" cy="200" r="150" />
      {dots.map((_, i) => {
        const angle = (i * 360) / dots.length;
        const rad = (angle * Math.PI) / 180;
        const x = 200 + 165 * Math.cos(rad);
        const y = 200 + 165 * Math.sin(rad);
        return <circle key={`d-${i}`} cx={x} cy={y} r="2.5" />;
      })}
      {/* Outer petals */}
      {petals.map((_, i) => {
        const angle = (i * 360) / petals.length;
        return (
          <g key={`p-${i}`} transform={`rotate(${angle} 200 200)`}>
            <path
              d="M200 40 C 215 70, 215 100, 200 120 C 185 100, 185 70, 200 40 Z"
              transform="translate(0 0)"
            />
          </g>
        );
      })}
      {/* Middle ring */}
      <circle cx="200" cy="200" r="120" />
      {/* Inner petals */}
      {innerPetals.map((_, i) => {
        const angle = (i * 360) / innerPetals.length;
        return (
          <g key={`ip-${i}`} transform={`rotate(${angle} 200 200)`}>
            <path d="M200 90 C 210 108, 210 128, 200 140 C 190 128, 190 108, 200 90 Z" />
          </g>
        );
      })}
      {/* Inner rings */}
      <circle cx="200" cy="200" r="70" />
      <circle cx="200" cy="200" r="48" />
      <circle cx="200" cy="200" r="24" />
      {/* Center flower */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={`c-${i}`} transform={`rotate(${i * 45} 200 200)`}>
          <path d="M200 180 C 208 190, 208 200, 200 210 C 192 200, 192 190, 200 180 Z" />
        </g>
      ))}
      <circle cx="200" cy="200" r="6" />
    </g>
  );
}

export default MandalaBackground;
