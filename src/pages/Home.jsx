import React from 'react'
import ButtonLetsTalk from '../components/ButtonLetsTalk'
import Presentation from '../components/Presentation'
import HomeAnimation from '../components/HomeAnimation'
import wave from '../assets/wave.svg'

const Home = () => {
  return (
    <div className='container-home'>
        <div className='page-home'>
          <div>
            <Presentation />
            <ButtonLetsTalk />
          </div>
          <div>
            <HomeAnimation />
          </div>
      </div>
    <img src={wave} alt='wave' className='wave' />
    </div>
    
  )
}

export default Home
