import React from 'react'
import homeanimation from '../assets/homeanimation.svg'

const HomeAnimation = () => {
  return (
    <div>
      <div className='home-animation'>
        <img src={homeanimation} 
        alt="image home animation" 
        width = "450"/>
      </div>
    </div>
  )
}

export default HomeAnimation