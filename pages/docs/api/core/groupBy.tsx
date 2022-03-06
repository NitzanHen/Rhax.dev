import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const groupBy = exports.find(e => e.name === "groupBy");

  return {
    props: {
      groupBy
    }
  };
}

const GroupByPage: NextPage<{ groupBy: Module }> = ({ groupBy }) => {

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