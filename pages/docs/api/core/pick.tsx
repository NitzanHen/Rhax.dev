import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports from '../../../../rhax.api';

const PickPage: NextPage = () => {
  const pick = exports.find(e => e.name === "pick")!;

  return (
    <>
      <Head>
        <title>Rhax docs - pick</title>
      </Head>
      <TopBar />
      <ApiPage module={pick} />
    </>
  );
};

export default PickPage;