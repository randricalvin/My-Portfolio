import React from 'react'
import HardSkillsTitle from '../components/HardSkillsTitle'
import CarousselSkills from '../components/CarousselSkills/CarousselSkills'
import SoftSkillsTitle from '../components/SoftSkillsTitle'
import SoftSKillsElement from '../components/SoftSKillsElement'

const Skills = () => {
  return (
    <div className='page-skills'>
      <HardSkillsTitle />
      <div className='mt-10'>
        <CarousselSkills />
      </div>
        <SoftSkillsTitle />    
        <SoftSKillsElement />
    </div>
  )
}

export default Skills