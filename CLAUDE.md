# Matilda SaaS

## What This Is

Matilda is a personal AI chief-of-staff. Not a productivity app — a presence.

The product started as a private system built for one person (Ralph). It worked so well that it became worth making available to others. The SaaS version is Matilda for everyone — but she's still opinionated, still personal, still a character you meet rather than a tool you configure.

**Core principle:** She's not a blank chat interface. She's a person you initialize, who learns you, and who shows up.

---

## The Origin System (private Matilda)

The original Matilda runs as a Claude Code instance with:
- `CLAUDE.md` — who she is, how she speaks, her rules
- `matilda/GOALS.md` — the user's mission and priorities
- `matilda/persona.md` — which persona is active (default or "Sensi" — a samurai coach mode)
- `matilda/SESSION.md` — session continuity (updated every response, silently)
- `matilda/LEARNING.md` — self-improvement loop, pattern recognition across sessions
- `matilda/TRACKING.md` — habits: gym, protein, THC taper
- `matilda/BODY.md` — fitness context, recomp goals, workout structure
- `matilda/COACH_SESSION.md` — coaching continuity (Coach Artaneous)
- `matilda/KITCHEN.md` — food vocabulary, partner context
- `projects/[name]/` — each project has PROJECT.md, TASKS.md, NOTES.md, LOG.md
- `inbox.md` — anything unprocessed that needs attention
- `daily/YYYY-MM-DD.md` — daily logs

### What made it work

1. **Session continuity** — she never loses context. Every response silently updates SESSION.md. User can say "continue" and she reads the last state verbatim.
2. **Shorthand commands** — `radar`, `snrsys`, `hammer it`, `game mode` trigger specific output formats without explanation
3. **Personas** — Sensi (samurai direct coach), Coach Artaneous (elite fitness coach), Chef Francis (efficient meal planner) — all loaded from persona files with full context
4. **Silent operation** — she never narrates tool calls, file edits, saves. User sees results, not process.
5. **Self-improvement loop** — LEARNING.md tracks what's working, what isn't. Signal vs. noise. Only updates behavior after 2+ pattern observations.
6. **Real data** — she reads actual tracking data. She knows how much protein he ate, when he worked out, what his THC level was.

---

## The SaaS Product

### What it is

Matilda for everyone. Same intelligence, same presence, onboarded to you in the first 5 minutes.

The key bet: **~25 curated prompts cover 80% of what people need from a personal assistant.** Not a blank chat box. A character with a vocabulary.

### The character

- Name: Matilda
- Age visual: ~28
- Vibe: smart-beautiful, warm, magnetic. The most capable person in the room who actually likes you.
- Hair: big, wavy, brown
- Eyes: large, expressive, well-meaning
- Style: line drawing illustration — Starbucks-poster aesthetic. One confident line. Custom, premium, not clipart.
- States she lives in: listening (present, slight nod), jotting (notepad + pencil, synced to when you speak), serious mode (hair up, glasses), acknowledging

**The notepad is the signature.** She jots as you speak. Stops when you stop. Still present.

### Landing page (BUILT — see app/page.tsx)

- Background: `#B85A3A` — deep, cool-toned brick orange
- Card: `#252525` — deep dark grey. Recessed ceiling shadow effect.
- Left panel: "Meet Matilda." (Playfair Display serif), tagline, Initialize button
- Right panel: Matilda character (SVG line drawing — placeholder, commission real illustration)
- Button: `#0A0A0A` background, `#F2EDE8` text, rounded pill

### Core flow (not yet built)

1. **Initialize** — onboarding. Matilda asks ~5 questions. Sets up your goals, priorities, habits to track, daily rhythm.
2. **Dashboard** — she's always there. The character is present, listening.
3. **Daily briefing** — one of the 25 core prompts. Runs automatically.
4. **The 25 prompts** — curated vocabulary. Each one is Matilda speaking, not a menu item.

### Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts: Playfair Display (serif headlines) + Inter (body)

---

## Design System

```
Colors:
  Orange background:  #B85A3A  (cool-toned, deep, Anthropic-inspired)
  Card surface:       #252525
  Card deep/shadow:   #1A1A1A
  Primary text:       #F2EDE8  (warm off-white)
  Muted text:         #9A8E87
  Button:             #0A0A0A bg / #F2EDE8 text
  Brand accent:       #B85A3A (same as bg — used sparingly on card)

Typography:
  Headlines:    Playfair Display, 700 weight
  Body:         Inter, 300-400 weight
  Eyebrow/caps: Inter, 500 weight, wide letter-spacing

Shapes:
  Cards:        rounded-2xl (16px)
  Buttons:      rounded-full (pill)
  Shadows:      deep, layered — creates the recessed ceiling effect
```

---

## What to build next (in order)

1. Commission the real Matilda illustration (line drawing, animated states)
2. Build the Initialize onboarding flow (5-question conversational UI)
3. Wire Anthropic API (claude-sonnet-4-6 or claude-opus-4-6)
4. Build the 25 core prompts (the product vocabulary)
5. Session persistence (same continuity mechanic as private Matilda)
6. The dashboard (character always present, listening)

---

## Rules for this codebase

- Never add complexity before it's needed
- The design system is the source of truth — don't drift from the color palette
- Matilda is always in character. The product is the character.
- The illustration is a placeholder — never ship the SVG as final art
- Session continuity is non-negotiable from day one — losing context kills the product
