// Inline-SVG glyph icons for conceptual skills that have no brand logo
// (RAG, prompt engineering, multi-agent, etc.). Returned as data-URI strings so
// they drop straight into the IconCloud's <img src>. Each is stroked in the
// given color and sits on a subtle rounded tile so it matches the brand logos.

const svg = (color: string, inner: string) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
      <rect x="2" y="2" width="44" height="44" rx="11" fill="${color}" fill-opacity="0.12" stroke="${color}" stroke-opacity="0.5"/>
      <g stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none">${inner}</g>
    </svg>`
  );

// glyph library ------------------------------------------------------------
const glyphs = {
  // sparkle / AI-assisted
  sparkle: `<path d="M24 13l2.4 6.1L32.6 21 26.4 23.4 24 29.6 21.6 23.4 15.4 21l6.2-1.9z"/><path d="M33 31l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z"/>`,
  // system design (nodes + links)
  system: `<circle cx="24" cy="14" r="3.2"/><circle cx="14" cy="33" r="3.2"/><circle cx="34" cy="33" r="3.2"/><path d="M22 17l-6 13M26 17l6 13M17 33h14"/>`,
  // multi-agent (three linked dots)
  agents: `<circle cx="16" cy="18" r="3"/><circle cx="32" cy="18" r="3"/><circle cx="24" cy="32" r="3"/><path d="M19 18h10M17 21l6 9M31 21l-6 9"/>`,
  // prompt (chat / terminal caret)
  prompt: `<path d="M13 16l6 5-6 5"/><path d="M23 30h12"/><rect x="9" y="11" width="30" height="26" rx="4"/>`,
  // LLM / OpenAI-ish (brain-node)
  llm: `<circle cx="24" cy="24" r="10"/><path d="M24 14v-3M24 37v-3M14 24h-3M37 24h-3M17 17l-2-2M33 33l-2-2M31 17l2-2M15 33l2-2"/>`,
  // RAG (retrieval: magnifier + doc)
  rag: `<rect x="13" y="12" width="16" height="20" rx="2"/><path d="M17 18h8M17 22h8M17 26h5"/><circle cx="31" cy="30" r="4.5"/><path d="M34 33l3 3"/>`,
  // document grounding (doc + anchor line)
  doc: `<rect x="14" y="11" width="20" height="26" rx="2"/><path d="M18 18h12M18 23h12M18 28h8"/>`,
  // vector DB (cylinder + dots)
  vector: `<ellipse cx="24" cy="14" rx="10" ry="3.5"/><path d="M14 14v20c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5V14"/><path d="M14 24c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5"/>`,
  // automation (gear + arrow)
  automation: `<circle cx="24" cy="24" r="6"/><path d="M24 12v3M24 33v3M12 24h3M33 24h3M15.5 15.5l2.1 2.1M30.4 30.4l2.1 2.1M32.5 15.5l-2.1 2.1M17.6 30.4l-2.1 2.1"/>`,
};

export const conceptIcon = (name: keyof typeof glyphs, color: string) =>
  svg(color, glyphs[name]);
