import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const MakeArrayPage: NextPage = () => {
  const exports = api["core/makeArray.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - makeArray</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/makeArray.ts"} exports={exports} />
    </>
  );
};

export default MakeArrayPage;