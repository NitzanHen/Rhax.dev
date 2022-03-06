import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const zip = exports.find(e => e.name === "zip");

  return {
    props: {
      zip
    }
  };
}

const ZipPage: NextPage<{ zip: Module }> = ({ zip }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - zip</title>
      </Head>
      <TopBar />
      <ApiPage module={zip} />
    </>
  );
};

export default ZipPage;