export function getR2PublicUrl(key: string): string {
  if (!key) return "/placeholder.jpg";;
  
  if (key.startsWith("http://") || key.startsWith("https://")) {
    return key;
  }

  const publicDomain = process.env.NEXT_PUBLIC_R2_PUBLIC_DOMAIN;

  if (!publicDomain) {
    console.warn("NEXT_PUBLIC_R2_PUBLIC_DOMAIN ist nicht konfiguriert.");
    return `${key}`;
  }

  const cleanKey = key.startsWith("/") ? key.slice(1) : key;
  const cleanDomain = publicDomain.endsWith("/") ? publicDomain.slice(0, -1) : publicDomain;

  return encodeURI(`${cleanDomain}/${cleanKey}`);
}