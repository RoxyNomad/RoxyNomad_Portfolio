/**
 * Konvertiert einen R2 Key/Pfad in eine vollständige öffentliche URL.
 * Falls bereits eine vollständige HTTP(S)-URL übergeben wird, wird diese direkt zurückgegeben.
 */
export function getR2PublicUrl(key: string): string {
  if (!key) return "";
  
  if (key.startsWith("http://") || key.startsWith("https://")) {
    return key;
  }

  const publicDomain = process.env.NEXT_PUBLIC_R2_PUBLIC_DOMAIN;

  if (!publicDomain) {
    console.warn("NEXT_PUBLIC_R2_PUBLIC_DOMAIN ist nicht konfiguriert.");
    return key;
  }

  // Entfernt führende Slashs, um doppelte Slashs in der URL zu vermeiden
  const cleanKey = key.startsWith("/") ? key.slice(1) : key;
  const cleanDomain = publicDomain.endsWith("/") ? publicDomain.slice(0, -1) : publicDomain;

  return `${cleanDomain}/${cleanKey}`;
}