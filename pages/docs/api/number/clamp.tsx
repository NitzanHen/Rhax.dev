import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const ClampPage: NextPage = () => {
  const clamp = exports.find(e => e.name === "clamp")!;

  return (
    <>
      <Head>
        <title>Rhax docs - clamp</title>
      </Head>
      <TopBar />
      <ApiPage module={clamp} />
    </>
  );
};

export default ClampPage;