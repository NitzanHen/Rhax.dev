import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const MaxPage: NextPage = () => {
  const exports = api["number/max.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - max</title>
      </Head>
      <TopBar />
      <ApiPage source={"number/max.ts"} exports={exports} />
    </>
  );
};

export default MaxPage;