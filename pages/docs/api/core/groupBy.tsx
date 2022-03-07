import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const GroupByPage: NextPage = () => {
  const groupBy = exports.find(e => e.name === "groupBy")!;

  return (
    <>
      <Head>
        <title>Rhax docs - groupBy</title>
      </Head>
      <TopBar />
      <ApiPage module={groupBy} />
    </>
  );
};

export default GroupByPage;