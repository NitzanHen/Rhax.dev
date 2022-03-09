import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const GroupByPage: NextPage = () => {
  const exports = api["core/groupBy.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - groupBy</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/groupBy.ts"} exports={exports} />
    </>
  );
};

export default GroupByPage;