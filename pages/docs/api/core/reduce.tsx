import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports from '../../../../rhax.api';

const ReducePage: NextPage = () => {
  const reduce = exports.find(e => e.name === "reduce")!;

  return (
    <>
      <Head>
        <title>Rhax docs - reduce</title>
      </Head>
      <TopBar />
      <ApiPage module={reduce} />
    </>
  );
};

export default ReducePage;