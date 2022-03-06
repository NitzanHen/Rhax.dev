import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const findEntry = exports.find(e => e.name === "findEntry");

  return {
    props: {
      findEntry
    }
  };
}

const FindEntryPage: NextPage<{ findEntry: Module }> = ({ findEntry }) => {

  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <ApiPage module={findEntry} />
    </>
  );
};

export default FindEntryPage;