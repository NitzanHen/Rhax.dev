import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const FindEntryPage: NextPage = () => {
  const findEntry = exports.find(e => e.name === "findEntry")!;

  return (
    <>
      <Head>
        <title>Rhax docs - findEntry</title>
      </Head>
      <TopBar />
      <ApiPage module={findEntry} />
    </>
  );
};

export default FindEntryPage;