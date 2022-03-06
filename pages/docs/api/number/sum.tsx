import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const sumItems = exports.find(e => e.name === "sumItems");

  return {
    props: {
      sumItems
    }
  };
}

const SumItemsPage: NextPage<{ sumItems: Module }> = ({ sumItems }) => {

  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <ApiPage module={sumItems} />
    </>
  );
};

export default SumItemsPage;