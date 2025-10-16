// src/features/error/pages/Error500Page.tsx
import Link from 'next/link';
import pacifico from '@/adapters/ui/layout/Layout';
import orbitron from '@/adapters/ui/layout/Layout';
import { ErrorController } from '@/adapters/controllers/ErrorController'; // oder anpassen

export function Error500Page() {
  const { title, message } = ErrorController.handle500();

  return (
    <div className={`${pacifico} ${orbitron}`} style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.message}>{message}</p>
      <Link href="/" style={styles.link}>Zurück zur Startseite</Link>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
    padding: '2rem',
  },
  title: {
    fontSize: '6rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  link: {
    fontSize: '1.2rem',
    color: '#0070f3',
    textDecoration: 'underline',
  },
};
