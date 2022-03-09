import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const HelpersPage: NextPage = () => {
  const exports = api["core/helpers.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - helpers</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/helpers.ts"} exports={exports} />
    </>
  );
};

export default HelpersPage;