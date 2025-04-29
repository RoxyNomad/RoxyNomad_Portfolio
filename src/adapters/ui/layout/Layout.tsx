// src/adapters/ui/layout/Layout.tsx
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import globalStyles from '../../../theme/global.module.css';

const orbitron = localFont({
  src: '../../../../public/fonts/Orbitron.ttf',
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-Orbitron',
});

const pacifico = localFont({
  src: '../../../../public/fonts/Pacifico.ttf',
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-Pacifico',
});

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${pacifico.variable} ${orbitron.variable}`}>
      {/* Hintergrund */}
      <div className={globalStyles.background} />
      
      {/* Titel */}
      <div className={globalStyles.backgroundTitle}>
        <h1 className={globalStyles.backgroundTitleOne}>Roxy</h1>
        <h1 className={globalStyles.backgroundTitleTwo}>Nomad</h1>
      </div>

      {/* Seiteninhalt */}
      <main>{children}</main>
    </div>
  );
}
