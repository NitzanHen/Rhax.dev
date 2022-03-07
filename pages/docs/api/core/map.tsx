import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import exports, { Module } from '../../../../rhax.api';

const MapPage: NextPage = () => {
  const map = exports.find(e => e.name === "map")!;

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