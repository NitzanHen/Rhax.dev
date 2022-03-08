import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports from '../../../../rhax.api';

const MaxPage: NextPage = () => {
  const max = exports.find(e => e.name === "max")!;

  return (
    <>
      <Head>
        <title>Rhax docs - max</title>
      </Head>
      <TopBar />
      <ApiPage module={max} />
    </>
  );
};

export default MaxPage;