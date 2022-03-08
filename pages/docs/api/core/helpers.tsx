import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports from '../../../../rhax.api';

const KeysPage: NextPage = () => {
  const keys = exports.find(e => e.name === "keys")!;

  return (
    <>
      <Head>
        <title>Rhax docs - keys</title>
      </Head>
      <TopBar />
      <ApiPage module={keys} />
    </>
  );
};

export default KeysPage;