import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const OmitPage: NextPage = () => {
  const exports = api["core/omit.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - omit</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/omit.ts"} exports={exports} />
    </>
  );
};

export default OmitPage;