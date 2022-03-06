import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../components/ApiPage';
import { TopBar } from '../../../components/TopBar';
import exports, { Module } from '../../../rhax.api';

export function getStaticProps() {
  const pipe = exports.find(e => e.name === "pipe");

  return {
    props: {
      pipe
    }
  };
}

const PipePage: NextPage<{ pipe: Module }> = ({ pipe }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - pipe</title>
      </Head>
      <TopBar />
      <ApiPage module={pipe} />
    </>
  );
};

export default PipePage;