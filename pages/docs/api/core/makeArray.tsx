import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const makeArray = exports.find(e => e.name === "makeArray");

  return {
    props: {
      makeArray
    }
  };
}

const MakeArrayPage: NextPage<{ makeArray: Module }> = ({ makeArray }) => {

  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <ApiPage module={makeArray} />
    </>
  );
};

export default MakeArrayPage;