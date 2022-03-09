import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const MapPage: NextPage = () => {
  const exports = api["core/map.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - map</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/map.ts"} exports={exports} />
    </>
  );
};

export default MapPage;