const DEFAULT_IMOBIPRO_URL = 'http://localhost:5173/';

export const IMOBIPRO_URL =
  (import.meta.env.VITE_IMOBIPRO_URL || '').trim() || DEFAULT_IMOBIPRO_URL;

export function getImobiProHomeUrl() {
  if (typeof window === 'undefined') return IMOBIPRO_URL;

  const referrer = document.referrer;
  if (!referrer) return IMOBIPRO_URL;

  try {
    const refUrl = new URL(referrer);
    const refSignature = `${refUrl.hostname}${refUrl.pathname}`.toLowerCase();
    if (refSignature.includes('imobi')) {
      return new URL('/', refUrl.origin).toString();
    }
  } catch {
    // Ignora referrer inválido e usa fallback configurável.
  }

  return IMOBIPRO_URL;
}
