import type { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { LandingConclusion } from '../components/LandingConclusion';
import { LandingExamples } from '../components/LandingExamples';
import { LandingFeatures } from '../components/LandingFeatures';
import { LandingView } from '../components/LandingView';
import { TopBar } from '../components/TopBar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rhax: The magical Functional Progamming library for JavaScript</title>
      </Head>
      <TopBar />
      <LandingView />
      <LandingExamples />
      <LandingFeatures />
      <LandingConclusion />
      <Footer />
    </>
  );
};

export default Home;
