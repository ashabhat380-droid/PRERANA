import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DarkColors, LightColors, CampusColors } from '@/constants/colors';

type ThemeMode = 'light' | 'dark' | 'system';
type ThemeContextValue = {
  mode: ThemeMode;
  colors: CampusColors;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>('dark');
  const resolved = mode === 'system' ? system : mode;
  const colors = resolved === 'light' ? LightColors : DarkColors;

  const value = useMemo(() => ({
    mode, colors,
    setMode,
    toggleTheme: () => setMode(resolved === 'light' ? 'dark' : 'light'),
  }), [mode, colors, resolved]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useCampusTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useCampusTheme must be used inside ThemeProvider');
  return ctx;
}
