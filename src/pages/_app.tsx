import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import '../styles/globals.scss';
import { GoogleTagManager, sendGTMEvent } from '@next/third-parties/google';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const gtmId: string = process.env.NEXT_PUBLIC_GTM || '';

  useEffect(() => {
    sendGTMEvent({
      event: 'pageView',
      pageTitle: 'landigPage',
      visitorType: 'low-value',
    });
  }, []);

  return (
    <>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
      <GoogleTagManager gtmId={gtmId} />
    </>
  );
};

export default MyApp;
