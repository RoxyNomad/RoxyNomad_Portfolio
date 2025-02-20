import type { AppProps } from 'next/app';
import globalStyles from '@/styles/global.module.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Hintergrund */}
      <div className={globalStyles.background} />
      {/* Titel */}
      <div className={globalStyles.backgroundTitle}>
        <h1 className={globalStyles.backgroundTitleOne}>Roxy</h1>
        <h1 className={globalStyles.backgroundTitleTwo}>Nomad</h1>
			</div>

      {/* Seiteninhalt */}
      <Component {...pageProps} />
    </div>
  );
}
