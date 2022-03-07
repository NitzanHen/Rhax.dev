import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const OmitPage: NextPage = () => {
  const omit = exports.find(e => e.name === "omit")!;

  return (
    <>
      <Head>
        <title>Rhax docs - omit</title>
      </Head>
      <TopBar />
      <ApiPage module={omit} />
    </>
  );
};

export default OmitPage;