import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import Badge from '../assets/logo-badge.svg';
import Image from 'next/image';
import FormLayout from '../components/FormLayout';

import { TextField } from '../components/Fields';
import { Button } from '../components/Button';
import InputPage from '../components/InputPage';

const name = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>Certify</title>
      </Head>
      <Header />
      <Container className='pt-16'>
        <InputPage />
      </Container>
    </div>
  );
};

export default name;
