import '../styles/globals.css';
import '@/styles/fonts.css'
import '@/styles/colors.css'
import '@/styles/components.css'
import '@/styles/screenCoeff.css'
import Head from 'next/head';
import Header from '@/components/layout/Header';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from '@/reducers/user';

const store = configureStore({
  reducer: { user },
});

function App({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Next.js App</title>
        </Head>

        <Header />

        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
