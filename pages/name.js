import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';

const name = () => {
  return (
    <div className='bg-slate-50 h-screen'>
      <Head>
        <title>Certify</title>
        <meta name='description' content='Will change this later' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Container className='flex items-center justify-center'>
        <div className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 h-96 w-96'></div>
      </Container>
    </div>
  );
};

export default name;
