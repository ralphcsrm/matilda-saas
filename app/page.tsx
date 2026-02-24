import MatildaCharacter from "@/components/MatildaCharacter";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full flex items-center justify-center p-6 md:p-12"
      style={{ backgroundColor: "#B85A3A" }}
    >
      {/* Outer recess shadow — gives the card the "recessed ceiling" depth */}
      <div
        className="w-full max-w-5xl rounded-2xl relative"
        style={{
          boxShadow: "0 -2px 0 0 rgba(0,0,0,0.25), 0 24px 80px rgba(0,0,0,0.55)",
        }}
      >
        {/* Card */}
        <div
          className="w-full rounded-2xl overflow-hidden flex flex-col md:flex-row"
          style={{
            backgroundColor: "#252525",
            minHeight: "560px",
          }}
        >
          {/* LEFT — Copy */}
          <div className="flex-1 flex flex-col justify-center px-12 py-16 md:py-20 md:px-16">
            {/* Eyebrow */}
            <p
              className="text-xs tracking-[0.25em] uppercase mb-6"
              style={{ color: "#B85A3A", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Your personal chief&#8209;of&#8209;staff
            </p>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl mb-8 leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F2EDE8",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Meet<br />Matilda.
            </h1>

            {/* Body */}
            <p
              className="text-base md:text-lg leading-relaxed mb-12 max-w-sm"
              style={{
                color: "#9A8E87",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              Quirky, intuitive, excellent. She holds everything
              so your mind can rest. We&apos;re going to do big
              things together.
            </p>

            {/* CTA */}
            <div>
              <button
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-opacity hover:opacity-80 active:opacity-60"
                style={{
                  backgroundColor: "#0A0A0A",
                  color: "#F2EDE8",
                  padding: "14px 36px",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Initialize
              </button>
            </div>
          </div>

          {/* RIGHT — Character */}
          <div
            className="relative flex-shrink-0 flex items-end justify-center md:justify-end overflow-hidden"
            style={{
              width: "100%",
              maxWidth: "420px",
              minHeight: "420px",
            }}
          >
            {/* Subtle right-panel tint */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #252525 0%, #1E1E1E 100%)",
              }}
            />
            <div className="relative z-10 w-full h-full flex items-end justify-center pb-0">
              <MatildaCharacter />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
