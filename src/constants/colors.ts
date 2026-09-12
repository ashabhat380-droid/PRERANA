export const DarkColors = {
  background: '#02080D', surface: '#07121B', surfaceElevated: '#0A1722',
  surfaceSoft: '#0D1C28', border: '#263746', borderSoft: '#1A2A37',
  borderStrong: '#354A5A', textPrimary: '#F4F7F9', textSecondary: '#C5CDD3',
  textMuted: '#7F8B95', textDim: '#56636D', green: '#00E676',
  greenBright: '#19F58A', greenSoft: '#0D3B2A', greenGlow: '#123F2D',
  purple: '#8B00FF', purpleBright: '#A833FF', purpleSoft: '#29124A',
  purpleGlow: '#321553', warning: '#FFB300', danger: '#FF3D71',
  info: '#2196F3', white: '#FFFFFF', black: '#000000', transparent: 'transparent',
} as const;

export const LightColors = {
  background: '#F5F8FA', surface: '#FFFFFF', surfaceElevated: '#FFFFFF',
  surfaceSoft: '#EEF3F6', border: '#D6E0E6', borderSoft: '#E4EBEF',
  borderStrong: '#B8C7D0', textPrimary: '#101820', textSecondary: '#34434D',
  textMuted: '#65747E', textDim: '#87949C', green: '#00B85A',
  greenBright: '#00C968', greenSoft: '#DDF7E9', greenGlow: '#C9F2DC',
  purple: '#7200D9', purpleBright: '#8B20F5', purpleSoft: '#EDE0FF',
  purpleGlow: '#E3D0FF', warning: '#D99000', danger: '#E52E5D',
  info: '#1976D2', white: '#FFFFFF', black: '#000000', transparent: 'transparent',
} as const;

export const Colors = DarkColors;
export type CampusColors = typeof DarkColors | typeof LightColors;
