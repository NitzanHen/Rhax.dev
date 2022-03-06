import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const max = exports.find(e => e.name === "max");

  return {
    props: {
      max
    }
  };
}

const MaxPage: NextPage<{ max: Module }> = ({ max }) => {

  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <ApiPage module={max} />
    </>
  );
};

export default MaxPage;