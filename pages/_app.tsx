import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import globalStyles from '@/styles/global.module.css';

function MyApp({ Component, pageProps }: AppProps) {
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

export default appWithTranslation(MyApp);
