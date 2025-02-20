import localFont from 'next/font/local';

export const orbitron = localFont({
	src: '../public/fonts/Orbitron.ttf',
	display: 'swap',
	weight: '400',
	style: 'normal',
	variable: '--font-Orbitron'
});

export const pacifico = localFont({
	src: '../public/fonts/Pacifico.ttf',
	display: 'swap',
	weight: '400',
	style: 'normal',
	variable: '--font-Pacifico'
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${pacifico.variable} ${orbitron.variable}`}>
      {children}
    </div>
  );
}
