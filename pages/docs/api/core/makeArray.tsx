import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const MakeArrayPage: NextPage = () => {
  const makeArray = exports.find(e => e.name === "makeArray")!;

  return (
    <>
      <Head>
        <title>Rhax docs - makeArray</title>
      </Head>
      <TopBar />
      <ApiPage module={makeArray} />
    </>
  );
};

export default MakeArrayPage;