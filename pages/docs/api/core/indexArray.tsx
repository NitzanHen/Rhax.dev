import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const IndexArrayPage: NextPage = () => {
  const indexArray = exports.find(e => e.name === "indexArray")!;

  return (
    <>
      <Head>
        <title>Rhax docs - indexArray</title>
      </Head>
      <TopBar />
      <ApiPage module={indexArray} />
    </>
  );
};

export default IndexArrayPage;