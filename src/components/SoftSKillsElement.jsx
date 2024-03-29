import React from 'react'
import organisation from '../assets/softskills/organisation.svg'
import autonomie from '../assets/softskills/autonomie.svg'
import travailequipe from '../assets/softskills/travailequipe.svg'
import curiosite from '../assets/softskills/curiosite.svg'
import forceproposition from '../assets/softskills/forceproposition.svg'
import creativite from '../assets/softskills/creativite.svg'

const SoftSKillsElement = () => {
  return (
    <div className='soft-skills  m-auto'>
      <div className='flex flex-row content-between justify-around items-center'>
      <div>
        <img
        alt='logoorganisation'
        src={organisation}
        style={{width : '5rem'}}
      />
      <h3 className='text-[#F5F4F2]'>
        Organisation
      </h3>
      </div>
      <div>
        <img
        alt='logoautonomie'
        src={autonomie}
        style={{width : '5rem'}}
      />
      <h3 className='text-[#F5F4F2]'>
        Independence
      </h3>
      </div>
      <div>
        <img
        alt='logotravailequipe'
        src={travailequipe}
        style={{width : '5rem'}}
      />
      <h3 className='text-[#F5F4F2]'>
        Teamwork
      </h3>
      </div>
    </div>
    <div className='flex flex-row content-between justify-around items-center my-20'>
      <div>
        <img
        alt='logocuriosite'
        src={curiosite}
        style={{width : '5rem'}}
      />
      <h3 className='text-[#F5F4F2]'>
        Curiosity
      </h3>
      </div>
      <div className='flex items-center flex-col'>
        <img 
        alt='logoforceproposition'
        src={forceproposition}
        style={{width : '5rem'}}
      />
      <h3 className='text-[#F5F4F2]'>
        Proactive
      </h3>
      </div>
      <div>
        <img
        alt='logocreativite'
        src={creativite}
        style={{width : '5rem'}}
      />
      <h3 className='text-[#F5F4F2] text-center'>
        Creativity
      </h3>
      </div>
      
    </div>
    </div>
  )
}


export default SoftSKillsElement

