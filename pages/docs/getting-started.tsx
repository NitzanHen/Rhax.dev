import { NextPage } from 'next';
import Head from 'next/head';
import { TopBar } from '../../components/TopBar';

const GettingStartedPage: NextPage = () => {

  return (
    <>
      <Head>
        <title>Rhax Docs: getting started</title>
      </Head>
      <TopBar />
      welcome to getting started
    </>
  );
};

export default GettingStartedPage;