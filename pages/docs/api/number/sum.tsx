import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports from '../../../../rhax.api';

const SumItemsPage: NextPage = () => {
  const sumItems = exports.find(e => e.name === "sumItems")!;

  return (
    <>
      <Head>
        <title>Rhax docs - sumItems</title>
      </Head>
      <TopBar />
      <ApiPage module={sumItems} />
    </>
  );
};

export default SumItemsPage;