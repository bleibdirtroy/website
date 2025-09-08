// Professionelle, minimale Farbpalette
export const colors = {
  // Primärfarben - Gedeckte, professionelle Töne
  primary: {
    50: '#f8fafc',   // Sehr helles Grau-Blau
    100: '#f1f5f9',  // Helles Grau-Blau
    200: '#e2e8f0',  // Mittelhelles Grau
    300: '#cbd5e1',  // Mittleres Grau
    400: '#94a3b8',  // Dunkleres Grau
    500: '#64748b',  // Hauptgrau (primär)
    600: '#475569',  // Dunkles Grau
    700: '#334155',  // Sehr dunkles Grau
    800: '#1e293b',  // Fast schwarz
    900: '#0f172a'   // Tiefschwarz
  },
  
  // Akzentfarbe - Gedämpftes Orange/Amber
  accent: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#f59e0b',  // Hauptakzent
    500: '#d97706',  // Dunklerer Akzent
    600: '#b45309',
    700: '#92400e',
    800: '#78350f'
  },
  
  // Status-Farben - Sehr gedeckt
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    500: '#22c55e',  // Gedecktes Grün
    600: '#16a34a'
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',  // Wie Akzent
    600: '#d97706'
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',  // Gedecktes Rot
    600: '#dc2626'
  },
  
  // Neutralfarben
  white: '#ffffff',
  black: '#000000',
  
  // Spezielle UI Farben
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9'
  },
  
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    tertiary: '#64748b',
    muted: '#94a3b8'
  },
  
  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
    dark: '#94a3b8'
  }
} as const;

export type ColorScale = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;