import type { NextPage } from 'next'
import { LandingInfoSection } from '../components/LandingInfoSection'
import { LandingView } from '../components/LandingView'
import { TopBar } from '../components/TopBar'

const Home: NextPage = () => {
  return (
    <div>
      <TopBar />
      <LandingView />
      <LandingInfoSection />
    </div>
  )
}

export default Home
