// Shared design system tokens + glyph for CoSTA Lab.
// Loaded by every design-system page so tokens stay canonical.

const TOKENS = {
  color: {
    ink:       { value: '#003D7C', role: 'Primary — NUS Blue' },
    secondary: { value: '#002D5C', role: 'Deeper blue — headers on paper' },
    accent:    { value: '#EF7C00', role: 'Accent — NUS Orange' },
    paper:     { value: '#f5f1ea', role: 'Paper — warm off-white base' },
    paperWarm: { value: '#ece4d3', role: 'Paper · warm — subtle tint surface' },
    sand:      { value: '#f6d7b0', role: 'Sand — quiet accent / tonal' },
    fog:       { value: '#d7dde6', role: 'Fog — dividers, muted fills' },
  },
  type: {
    display:  { stack: 'Inter Tight, Inter, sans-serif', role: 'Wordmark · UI · Headlines', tracking: '-0.04em' },
    editorial:{ stack: 'Fraunces, "Times New Roman", serif', role: 'Taglines · Pull quotes · Essay body', tracking: '-0.01em', italic: true },
    mono:     { stack: '"JetBrains Mono", ui-monospace, monospace', role: 'Labels · Metadata · Code', tracking: '0.14em' },
  },
  radius: {
    xs: 4, sm: 8, md: 14, lg: 22, xl: 32, pill: 9999,
  },
  spacing: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  shadow: {
    card: '0 1px 3px rgba(15,29,43,.08), 0 8px 24px rgba(15,29,43,.06)',
    deep: '0 8px 32px rgba(0,45,92,.18)',
  },
};

// Canonical wave glyph — drop-in at any size.
function WaveGlyph({ bg = TOKENS.color.ink.value, fg = TOKENS.color.paper.value,
                    acc = TOKENS.color.accent.value, rx = 22, size = 96, stroke = 3 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96">
      <rect width="96" height="96" rx={rx} fill={bg} />
      <path d="M 14 34 Q 28 28 42 34 T 66 34 T 86 34" fill="none" stroke={fg} strokeWidth={stroke} strokeLinecap="round" />
      <path d="M 14 52 Q 28 46 42 52 T 66 52 T 86 52" fill="none" stroke={acc} strokeWidth={stroke + 1} strokeLinecap="round" />
      <path d="M 14 70 Q 28 64 42 70 T 66 70 T 86 70" fill="none" stroke={fg} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

// Page chrome used by every design-system page
function DSPage({ title, subtitle, children, width = 1200 }) {
  const { ink, paper, accent } = { ink: TOKENS.color.ink.value, paper: TOKENS.color.paper.value, accent: TOKENS.color.accent.value };
  return (
    <div style={{ background: paper, minHeight: '100vh', fontFamily: TOKENS.type.display.stack, color: ink }}>
      <div style={{ maxWidth: width, margin: '0 auto', padding: '72px 64px 96px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
          <WaveGlyph size={40} rx={22} stroke={3} />
          <div style={{ fontFamily: TOKENS.type.mono.stack, fontSize: 11, letterSpacing: TOKENS.type.mono.tracking, color: ink, opacity: 0.65 }}>
            COSTA LAB · DESIGN SYSTEM
          </div>
        </div>
        <div style={{ fontFamily: TOKENS.type.editorial.stack, fontStyle: 'italic', fontSize: 16, color: ink, opacity: 0.6, marginBottom: 8 }}>
          {subtitle || ' '}
        </div>
        <div style={{ fontFamily: TOKENS.type.display.stack, fontWeight: 700, fontSize: 64, letterSpacing: '-0.04em', lineHeight: 0.95, color: ink }}>
          {title}
        </div>
        <div style={{ height: 48 }} />
        {children}
      </div>
    </div>
  );
}

function DSSection({ title, children }) {
  return (
    <section style={{ marginBottom: 72 }}>
      <div style={{ fontFamily: TOKENS.type.mono.stack, fontSize: 10.5, letterSpacing: TOKENS.type.mono.tracking, color: TOKENS.color.ink.value, opacity: 0.6, marginBottom: 18, textTransform: 'uppercase' }}>
        {title}
      </div>
      {children}
    </section>
  );
}

Object.assign(window, { TOKENS, WaveGlyph, DSPage, DSSection });
