import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const ClampPage: NextPage = () => {
  const exports = api["number/clamp.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - clamp</title>
      </Head>
      <TopBar />
      <ApiPage source={"number/clamp.ts"} exports={exports} />
    </>
  );
};

export default ClampPage;