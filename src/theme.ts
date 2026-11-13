import { configureFonts, MD2DarkTheme as PaperDarkTheme, MD2LightTheme as PaperLightTheme, MD2Theme as PaperTheme, useTheme as usePaperTheme } from "react-native-paper";
import Color from "color";

// Inter, one family per weight (Android doesn't pick the weight of a custom font by itself).
// They're loaded in App.
export const fonts = {
  regular: "Inter_400Regular",
  medium: "Inter_500Medium",
  semibold: "Inter_600SemiBold",
  bold: "Inter_700Bold",
};

const paperFonts = (() => {
  const config = {
    regular: { fontFamily: fonts.regular, fontWeight: "normal" as const },
    medium: { fontFamily: fonts.medium, fontWeight: "normal" as const },
    light: { fontFamily: fonts.regular, fontWeight: "normal" as const },
    thin: { fontFamily: fonts.regular, fontWeight: "normal" as const },
  };
  return configureFonts({ isV3: false, config: { web: config, ios: config, android: config, default: config } });
})();

export interface Theme extends PaperTheme {
  colors: PaperTheme["colors"] & {
    accentText: string;
    onAccent: string;
    active: string;
    activeIcon: string;
    activeBackground: string;
    inactiveIcon: string;
    // The text of headings and titles, of the body of notes, and of things that are less important
    textBody: string;
    textSecondary: string;
    textMuted: string;
    // Lines around cards and fields, and between the rows of a list
    border: string;
    divider: string;
    // The top of the menu and the background around a note, the fields (e.g. search) and the chosen chip
    sidebar: string;
    field: string;
    chipActive: string;
    onChipActive: string;
    // The accent on the chosen chip and the messages at the bottom (dark on the light theme, light on the dark one)
    accentOnChipActive: string;
    // Under the chosen row of a list (a tint of the accent) and its outline
    accentTint: string;
    accentRing: string;
    highlight: string;
    success: string;
    warning: string;
  };
}

// The colours of the brand guidelines (v1). Every colour of the themes is one of them, or a mix of two.
const brand = {
  navy: "#0B1F33",
  teal: "#0E7C86",
  cyan: "#13C2C2",
  ice: "#E6F9FA",
  white: "#FFFFFF",
  ink: "#081726",
  body: "#365265",
  muted: "#617889",
  border: "#D9E8EB",
  surface: "#F6FAFB",
  surfaceAlt: "#EEF7F8",
  darkSurface: "#102A3F",
  darkElevated: "#163A50",
  success: "#15856A",
  warning: "#A96F13",
  error: "#B93843",
};

const mix = (from: string, to: string, weight: number) => Color(from).mix(Color(to), weight).hex();
const alpha = (color: string, value: number) => Color(color).alpha(value).rgb().string();

// Teal is the accent on the light theme: white text can be read on it and it on white, which cyan can't
const light = {
  accent: brand.teal,
  background: brand.surface,
  surface: brand.white,
  text: brand.ink,
  // The muted slate is a bit too light for small text on the tinted backgrounds (4.2:1), so it's darkened
  textMuted: mix(brand.muted, brand.body, 0.3),
};

export const LightTheme: Theme = {
  ...PaperLightTheme,
  fonts: paperFonts,
  roundness: 10,
  colors: {
    ...PaperLightTheme.colors,
    primary: light.accent,
    accent: light.accent,
    background: light.background,
    surface: light.surface,
    text: light.text,
    onSurface: light.text,
    error: brand.error,
    placeholder: light.textMuted,
    disabled: mix(brand.muted, brand.white, 0.45),
    accentText: light.accent,
    onAccent: brand.white,
    active: light.accent,
    activeIcon: light.accent,
    activeBackground: brand.ice,
    inactiveIcon: brand.muted,
    textBody: brand.navy,
    textSecondary: brand.body,
    textMuted: light.textMuted,
    border: brand.border,
    divider: brand.surfaceAlt,
    sidebar: brand.surfaceAlt,
    field: brand.surfaceAlt,
    chipActive: brand.navy,
    onChipActive: brand.white,
    accentOnChipActive: brand.cyan,
    accentTint: brand.ice,
    accentRing: alpha(brand.cyan, 0.5),
    highlight: alpha(brand.cyan, 0.28),
    success: brand.success,
    warning: brand.warning,
  },
};

const dark = {
  accent: brand.cyan,
  background: brand.navy,
  surface: brand.darkSurface,
  text: brand.surface,
};

// The slates and the colours of success, warning and error are for light backgrounds: on the dark ones they're
// mixed with a light colour until they can be read
export const DarkTheme: Theme = {
  ...PaperDarkTheme,
  fonts: paperFonts,
  roundness: 10,
  colors: {
    ...PaperDarkTheme.colors,
    primary: dark.accent,
    accent: dark.accent,
    background: dark.background,
    surface: dark.surface,
    text: dark.text,
    onSurface: dark.text,
    error: mix(brand.error, brand.white, 0.45),
    placeholder: mix(brand.ice, brand.muted, 0.55),
    disabled: mix(brand.muted, brand.navy, 0.15),
    accentText: dark.accent,
    onAccent: brand.ink,
    active: dark.accent,
    activeIcon: dark.accent,
    activeBackground: alpha(dark.accent, 0.16),
    inactiveIcon: mix(brand.ice, brand.muted, 0.55),
    textBody: mix(brand.ice, brand.muted, 0.15),
    textSecondary: mix(brand.ice, brand.muted, 0.35),
    textMuted: mix(brand.ice, brand.muted, 0.55),
    border: brand.darkElevated,
    divider: mix(brand.darkSurface, brand.darkElevated, 0.5),
    sidebar: brand.ink,
    field: brand.darkElevated,
    chipActive: brand.ice,
    onChipActive: brand.navy,
    accentOnChipActive: brand.teal,
    accentTint: alpha(dark.accent, 0.16),
    accentRing: alpha(dark.accent, 0.45),
    highlight: alpha(brand.cyan, 0.35),
    success: mix(brand.success, brand.white, 0.45),
    warning: mix(brand.warning, brand.white, 0.45),
  },
};

export function useTheme() {
  return usePaperTheme() as Theme;
}
