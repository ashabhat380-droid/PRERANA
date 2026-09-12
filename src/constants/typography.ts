export const Typography = {
  display: { fontSize: 32, fontWeight: '800' as const, lineHeight: 38 },
  h1: { fontSize: 25, fontWeight: '800' as const, lineHeight: 31 },
  h2: { fontSize: 20, fontWeight: '700' as const, lineHeight: 26 },
  h3: { fontSize: 16, fontWeight: '700' as const, lineHeight: 21 },
  body: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  bodySmall: { fontSize: 12, fontWeight: '400' as const, lineHeight: 17 },
  caption: { fontSize: 10, fontWeight: '600' as const, lineHeight: 14 },
  label: { fontSize: 11, fontWeight: '700' as const, lineHeight: 15, letterSpacing: 0.8 },
  button: { fontSize: 13, fontWeight: '700' as const, lineHeight: 18 },
} as const;
