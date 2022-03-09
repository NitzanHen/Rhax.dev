import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const MinPage: NextPage = () => {
  const exports = api["number/min.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - min</title>
      </Head>
      <TopBar />
      <ApiPage source={"number/min.ts"} exports={exports} />
    </>
  );
};

export default MinPage;