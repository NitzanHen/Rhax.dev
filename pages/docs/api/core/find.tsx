import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const findKey = exports.find(e => e.name === "findKey");

  return {
    props: {
      findKey
    }
  };
}

const FindKeyPage: NextPage<{ findKey: Module }> = ({ findKey }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - findKey</title>
      </Head>
      <TopBar />
      <ApiPage module={findKey} />
    </>
  );
};

export default FindKeyPage;