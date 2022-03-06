import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const isEmpty = exports.find(e => e.name === "isEmpty");

  return {
    props: {
      isEmpty
    }
  };
}

const IsEmptyPage: NextPage<{ isEmpty: Module }> = ({ isEmpty }) => {

  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <ApiPage module={isEmpty} />
    </>
  );
};

export default IsEmptyPage;