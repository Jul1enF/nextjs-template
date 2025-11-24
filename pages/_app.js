import '../styles/globals.css';
import '@/styles/colors.css'
import '@/styles/components.css'
import '@/styles/fonts.css'
import '@/styles/screenCoeff.css'
import Head from 'next/head';
import ComputerHeader from '@/components/layout/computer/ComputerHeader';
import PhoneHeader from '@/components/layout/phone/PhoneHeader';
import { useWindowDimensions } from '@/hooks/useWindowDimensions';

function App({ Component, pageProps }) {
  const { computerDisplay } = useWindowDimensions()

  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>

     {computerDisplay ? <ComputerHeader /> : <PhoneHeader />}

      <Component {...pageProps} />
    </>
  );
}

export default App;
