import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const SumPage: NextPage = () => {
  const exports = api["number/sum.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - sum</title>
      </Head>
      <TopBar />
      <ApiPage source={"number/sum.ts"} exports={exports} />
    </>
  );
};

export default SumPage;