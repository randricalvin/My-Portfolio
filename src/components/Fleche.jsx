import React from 'react'
import { Link } from 'react-router-dom'
import fleche from '../assets/fleche.svg'

const Fleche = () => {
  return (
    <div className='fleche-home'>
        <Link to="/skills">
            <img 
            src={fleche} 
            alt="image fleche"
            />
        </Link>
    </div>
  )
}   


export default Fleche