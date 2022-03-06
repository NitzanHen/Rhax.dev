import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const keys = exports.find(e => e.name === "keys");

  return {
    props: {
      keys
    }
  };
}

const KeysPage: NextPage<{ keys: Module }> = ({ keys }) => {

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