// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '@/adapters/ui/layout/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
