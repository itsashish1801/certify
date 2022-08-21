import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import Badge from '../assets/logo-badge.svg';
import Image from 'next/image';

const name = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>Certify</title>
      </Head>
      <Header />
      <Container className='flex items-center justify-center'></Container>
    </div>
  );
};

export default name;
