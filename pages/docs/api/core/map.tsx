import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

export function getStaticProps() {
  const map = exports.find(e => e.name === "map");

  return {
    props: {
      map
    }
  };
}

const MapPage: NextPage<{ map: Module }> = ({ map }) => {

  return (
    <>
      <Head>
        <title>Rhax docs - map</title>
      </Head>
      <TopBar />
      <ApiPage module={map} />
    </>
  );
};

export default MapPage;