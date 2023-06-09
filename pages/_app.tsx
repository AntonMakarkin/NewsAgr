import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Head>
        <title key="title">News Aggregator</title>
        <meta name="description" key="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress/>
        <NavBar/>
        <Component {...pageProps} />
    </div>
  )
}
