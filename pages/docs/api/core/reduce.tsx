import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const reduce = exports.find(e => e.name === "reduce");

  return {
    props: {
      reduce
    }
  };
}

const ReducePage: NextPage<{ reduce: Module }> = ({ reduce }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - reduce</title>
      </Head>
      <TopBar />
      <ApiPage module={reduce} />
    </>
  );
};

export default ReducePage;