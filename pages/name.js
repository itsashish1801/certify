import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import Badge from '../assets/logo-badge.svg';
import Image from 'next/image';

const name = () => {
  return (
    <div className='bg-slate-900 h-screen'>
      <Head>
        <title>Certify</title>
        <meta name='description' content='Will change this later' />
        <link rel='icon' href='/public/favicon.png' />
      </Head>
      <Header />
      <Container className='flex items-center justify-center'>
        <div className='relative rounded-2xl bg-white mt-6 p-8 h-[500px] w-1/2'></div>
      </Container>
    </div>
  );
};

export default name;
