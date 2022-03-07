import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const MinItemPage: NextPage = () => {
  const minItem = exports.find(e => e.name === "minItem")!;

  return (
    <>
      <Head>
        <title>Rhax docs - minItem</title>
      </Head>
      <TopBar />
      <ApiPage module={minItem} />
    </>
  );
};

export default MinItemPage;