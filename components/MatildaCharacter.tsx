"use client";

// Matilda — line drawing character. Starbucks-poster style.
// Confident single-line aesthetic. She fills the right panel, anchored at the bottom.
// This is a living placeholder — illustration will be replaced with a commissioned piece.

export default function MatildaCharacter() {
  return (
    <svg
      viewBox="0 0 340 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ maxHeight: "520px" }}
      aria-label="Matilda"
    >
      {/* ── Hair — big, wavy, fills the upper right ── */}
      <path
        d="M170 30
           C140 20, 95 25, 80 60
           C65 90, 68 120, 72 140
           C60 135, 52 148, 55 165
           C58 182, 70 188, 78 185
           C74 210, 76 235, 82 255
           C110 270, 130 272, 150 268
           C152 255, 153 242, 152 228
           C168 232, 185 230, 198 222
           C196 238, 195 254, 196 268
           C218 272, 238 268, 258 252
           C264 232, 266 208, 262 185
           C272 188, 284 180, 284 163
           C284 146, 274 134, 262 138
           C268 118, 272 92, 260 65
           C245 30, 205 18, 170 30Z"
        stroke="#F2EDE8"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── Face ── */}
      <ellipse
        cx="170"
        cy="178"
        rx="58"
        ry="68"
        stroke="#F2EDE8"
        strokeWidth="2.2"
        fill="none"
      />

      {/* ── Eyes — big, expressive ── */}
      {/* Left eye */}
      <path
        d="M138 162 C143 155, 153 155, 158 162"
        stroke="#F2EDE8"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="148" cy="165" r="6" stroke="#F2EDE8" strokeWidth="1.8" fill="none" />
      <circle cx="150" cy="163" r="2" fill="#F2EDE8" />

      {/* Right eye */}
      <path
        d="M182 162 C187 155, 197 155, 202 162"
        stroke="#F2EDE8"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="192" cy="165" r="6" stroke="#F2EDE8" strokeWidth="1.8" fill="none" />
      <circle cx="194" cy="163" r="2" fill="#F2EDE8" />

      {/* ── Eyebrows — confident arc ── */}
      <path d="M136 152 C141 146, 151 145, 158 149" stroke="#F2EDE8" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <path d="M182 149 C189 145, 199 146, 204 152" stroke="#F2EDE8" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* ── Nose — simple elegant line ── */}
      <path d="M170 172 C167 182, 163 190, 165 196 C167 199, 175 199, 177 196 C179 190, 175 182, 170 172" stroke="#F2EDE8" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* ── Lips — warm, symmetrical smile ── */}
      <path d="M152 212 C158 208, 165 206, 170 207 C175 206, 182 208, 188 212" stroke="#F2EDE8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M152 212 C158 220, 165 224, 170 224 C175 224, 182 220, 188 212" stroke="#F2EDE8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Cupid's bow */}
      <path d="M160 212 C163 210, 167 210, 170 211 C173 210, 177 210, 180 212" stroke="#F2EDE8" strokeWidth="1.2" strokeLinecap="round" fill="none" />

      {/* ── Neck ── */}
      <path d="M155 242 L152 272" stroke="#F2EDE8" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M185 242 L188 272" stroke="#F2EDE8" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* ── Shoulders & body ── */}
      <path
        d="M152 272 C130 278, 105 292, 88 318 C75 340, 70 370, 68 400 C68 440, 70 480, 72 520"
        stroke="#F2EDE8"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M188 272 C210 278, 235 292, 252 318 C265 340, 270 370, 272 400 C272 440, 270 480, 268 520"
        stroke="#F2EDE8"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Collar / neckline ── */}
      <path d="M152 272 C158 285, 170 290, 170 290 C170 290, 182 285, 188 272" stroke="#F2EDE8" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* ── Left arm — holding notepad ── */}
      <path
        d="M108 320 C100 345, 95 370, 90 395 C88 410, 92 425, 100 435"
        stroke="#F2EDE8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Notepad ── */}
      <rect x="68" y="390" width="72" height="88" rx="4" stroke="#F2EDE8" strokeWidth="1.8" fill="none" />
      {/* Notepad lines */}
      <line x1="78" y1="408" x2="130" y2="408" stroke="#F2EDE8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="78" y1="420" x2="130" y2="420" stroke="#F2EDE8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="78" y1="432" x2="118" y2="432" stroke="#F2EDE8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="78" y1="444" x2="124" y2="444" stroke="#F2EDE8" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      {/* Notepad clip */}
      <rect x="92" y="386" width="24" height="10" rx="3" stroke="#F2EDE8" strokeWidth="1.5" fill="none" />

      {/* ── Pencil in right hand ── */}
      <path
        d="M232 320 C240 345, 245 370, 248 400"
        stroke="#F2EDE8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Pencil */}
      <line x1="216" y1="360" x2="250" y2="398" stroke="#F2EDE8" strokeWidth="2.2" strokeLinecap="round" />
      {/* Pencil tip */}
      <path d="M248 396 L254 404 L246 402 Z" fill="#F2EDE8" />

      {/* ── Subtle waist suggestion ── */}
      <path d="M100 360 C120 355, 145 352, 170 352 C195 352, 220 355, 240 360" stroke="#F2EDE8" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.4" />

      {/* ── Brand mark — small, bottom center ── */}
      <text
        x="170"
        y="514"
        textAnchor="middle"
        fill="#F2EDE8"
        fontSize="9"
        fontFamily="'Inter', sans-serif"
        letterSpacing="0.15em"
        opacity="0.25"
      >
        MATILDA
      </text>
    </svg>
  );
}
