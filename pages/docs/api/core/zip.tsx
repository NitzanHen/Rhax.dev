import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const ZipPage: NextPage = () => {
  const exports = api["core/zip.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - zip</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/zip.ts"} exports={exports} />
    </>
  );
};

export default ZipPage;