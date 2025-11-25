import '../styles/globals.css';
import '@/styles/fonts.css'
import '@/styles/colors.css'
import '@/styles/components.css'
import '@/styles/screenCoeff.css'
import Head from 'next/head';
import Header from '@/components/layout/Header';

function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>

      <Header />

      <Component {...pageProps} />
    </>
  );
}

export default App;
