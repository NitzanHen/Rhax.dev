import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const IsEmptyPage: NextPage = () => {
  const isEmpty = exports.find(e => e.name === "isEmpty")!;

  return (
    <>
      <Head>
        <title>Rhax docs - isEmpty</title>
      </Head>
      <TopBar />
      <ApiPage module={isEmpty} />
    </>
  );
};

export default IsEmptyPage;