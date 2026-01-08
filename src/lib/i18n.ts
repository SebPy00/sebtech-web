export const SUPPORTED_LOCALES = ["es", "en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function normalizeLocale(value?: string): Locale {
  const v = (value || "").toLowerCase();
  const base = v.split("-")[0];
  return isLocale(base) ? base : "en";
}
