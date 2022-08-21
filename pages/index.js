import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Certify</title>
        <meta name='description' content='Will change this later' />
        <link rel='icon' href='/public/favicon.png' />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
