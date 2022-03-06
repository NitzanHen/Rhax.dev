import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const filter = exports.find(e => e.name === "filter");

  return {
    props: {
      filter
    }
  };
}

const FilterPage: NextPage<{ filter: Module }> = ({ filter }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - filter</title>
      </Head>
      <TopBar />
      <ApiPage module={filter} />
    </>
  );
};

export default FilterPage;