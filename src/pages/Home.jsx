import React from 'react'
import ButtonLetsTalk from '../components/ButtonLetsTalk'
import Presentation from '../components/Presentation'
import HomeAnimation from '../components/HomeAnimation'

const Home = () => {
  return (
    <div className='page-home flex justify-between'>
      <div>
      <Presentation />
      <ButtonLetsTalk />
      </div>
      <div>
      <HomeAnimation />
      </div>
    </div>
  )
}

export default Home
