import '../styles/globals.css';
import '@/styles/fonts.css'
import '@/styles/colors.css'
import '@/styles/components.css'
import '@/styles/screenCoeff.css'
import Head from 'next/head';
import Header from '@/components/layout/Header';
import HorizontalMenu from '@/components/layout/horizontal-menu/HorizontalMenu';
import PhoneTabBar from '@/components/layout/phone/PhoneTabBar';
import useWindowDimensions from '@/hooks/useWindowDimensions';

function App({ Component, pageProps }) {
const { computerDisplay } = useWindowDimensions()

  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>

      <Header />

      <HorizontalMenu />

      <Component {...pageProps} />

      {!computerDisplay && <PhoneTabBar />}
    </>
  );
}

export default App;
