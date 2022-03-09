import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const PickPage: NextPage = () => {
  const exports = api["core/pick.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - pick</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/pick.ts"} exports={exports} />
    </>
  );
};

export default PickPage;