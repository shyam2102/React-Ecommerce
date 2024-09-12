import React from 'react'
import Hero from '../components/Hero'
import LatestCollecetion from '../components/LatestCollecetion'
import BestSeller from '../components/BestSeller'
import OutPolicy from '../components/OutPolicy'
import NewLetterBox from '../components/NewLetterBox'



const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollecetion />
      <BestSeller />
      <OutPolicy />
      <NewLetterBox />
    </div>
  )
}

export default Home
