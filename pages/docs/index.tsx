import { NextPage } from 'next';
import Head from 'next/head';
import { TopBar } from '../../components/TopBar';

const DocsPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Rhax Docs: home</title>
      </Head>
      <TopBar />
      welcome to docs home
    </>
  );
};

export default DocsPage;