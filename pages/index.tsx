import type { NextPage } from 'next';
import { LandingView } from '../components/LandingView';
import { TopBar } from '../components/TopBar';

const Home: NextPage = () => {
  return (
    <div>
      <TopBar />
      <LandingView />
    </div>
  );
};

export default Home;
