import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const minItem = exports.find(e => e.name === "minItem");

  return {
    props: {
      minItem
    }
  };
}

const MinItemPage: NextPage<{ minItem: Module }> = ({ minItem }) => {

  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <ApiPage module={minItem} />
    </>
  );
};

export default MinItemPage;