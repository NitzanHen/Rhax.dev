import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const omit = exports.find(e => e.name === "omit");

  return {
    props: {
      omit
    }
  };
}

const OmitPage: NextPage<{ omit: Module }> = ({ omit }) => {

  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <ApiPage module={omit} />
    </>
  );
};

export default OmitPage;