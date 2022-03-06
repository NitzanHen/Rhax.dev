import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const pick = exports.find(e => e.name === "pick");

  return {
    props: {
      pick
    }
  };
}

const PickPage: NextPage<{ pick: Module }> = ({ pick }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - pick</title>
      </Head>
      <TopBar />
      <ApiPage module={pick} />
    </>
  );
};

export default PickPage;