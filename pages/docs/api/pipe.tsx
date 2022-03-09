import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../components/ApiPage';
import { TopBar } from '../../../components/TopBar';
import api from '../../../rhax.api';

const PipePage: NextPage = () => {
  const exports = api["pipe.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - pipe</title>
      </Head>
      <TopBar />
      <ApiPage source={"pipe.ts"} exports={exports} />
    </>
  );
};

export default PipePage;