/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import projectmood from '../assets/projects/projectmood.svg'
import logohtml from '../assets/projects/logohtml.svg'
import logocss from '../assets/projects/logocss.svg'
import logoreact from '../assets/projects/logoreact.svg'
import logojs from '../assets/projects/logojs.svg'
import projecterror from '../assets/projects/projecterror.svg'
import hackathon from '../assets/projects/hackathon.svg'
import projectpimleaf from '../assets/projects/projectpimleaf.svg'
import logotailwind from '../assets/projects/logotailwind.svg'
import hackathon2 from '../assets/projects/hackathon2.svg'
import logonode from '../assets/projects/logonode.svg'
import logomysql from '../assets/projects/logomysql.svg'
import projectmcd from '../assets/projects/projectmcd.svg'
import projectchatchatgo from '../assets/projects/projectchatchatgo.svg'
import logofirebase from '../assets/projects/logofirebase.svg'



const ProjectsComponents = () => {
  return (
      <div className='cards mt-10 flex m-auto gap-8'>

        {/* 1 */}
        <div className='card-four rounded-lg bg-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg'>
        <div className='rounded-t-lg overflow-hidden'>
            <img className='card-four-image lg:h-60 md:h-36 w-full object-cover object-center scale-100 transition-all duration-200 hover:scale-110' src={projectchatchatgo} alt="projet chatchatgo" />
        </div>
        <div className='flex flex-row justify-center items-center gap-3 py-5'>
            <img src={logotailwind} alt="logo tailwind" style={{width : '2rem', height : '2rem'}}/>
            <img src={logoreact} alt="logo css" style={{width : '2rem', height : '2rem'}}/>
            <img src={logojs} alt="logo react" style={{width : '2rem', height : '2rem'}}/>
            <img src={logofirebase} alt="logo firebase" style={{width : '2.5rem', height : '2.5rem'}}/>
        </div>
        <div className='flex flex-row justify-center py-4'>
            <div className='card-four-button rounded-full button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://github.com/randricalvin/AppChat">Github</a>
            </div>
            <div className='card-four-button rounded-full ml-5 button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://www.chatchatgo.fr/">Consulter</a>
            </div>
        </div>
        </div>

        {/* 2 */}
        <div className='card-four rounded-lg bg-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg'>
        <div className='rounded-t-lg overflow-hidden'>
            <img className='card-four-image lg:h-60 md:h-36 w-full object-cover object-center scale-100 transition-all duration-200 hover:scale-110' src={projectmcd} alt="projet mcd" />
        </div>
        <div className='flex flex-row justify-center gap-3 py-5'>
            <img src={logotailwind} alt="logo tailwind" style={{width : '2rem', height : '2rem'}}/>
            <img src={logoreact} alt="logo css" style={{width : '2rem', height : '2rem'}}/>
            <img src={logojs} alt="logo react" style={{width : '2rem', height : '2rem'}}/>
        </div>
        <div className='flex flex-row justify-center py-4'>
            <div className='card-four-button rounded-full button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://github.com/randricalvin/My-CryptoData">Github</a>
            </div>
            <div className='card-four-button rounded-full ml-5 button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://mycryptodata.netlify.app/">Consulter</a>
            </div>
        </div>
        </div>

        {/* 3 */}
        <div className='card-four rounded-lg bg-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg'>
        <div className='rounded-t-lg overflow-hidden'>
            <img className='card-four-image lg:h-60 md:h-36 w-full object-cover object-center scale-100 transition-all duration-200 hover:scale-110' src={projectpimleaf} alt="projet mood" />
        </div>
        <div className='flex flex-row justify-center gap-3 py-5'>
            <img src={logotailwind} alt="logo tailwind" style={{width : '2rem', height : '2rem'}}/>
            <img src={logoreact} alt="logo css" style={{width : '2rem', height : '2rem'}}/>
            <img src={logojs} alt="logo react" style={{width : '2rem', height : '2rem'}}/>
            <img src={logonode} alt="logo node" style={{width : '2rem', height : '2rem'}}/>
            <img src={logomysql} alt="logo mysql" style={{width : '2rem', height : '2rem'}}/>
        </div>
        <div className='flex flex-row justify-center py-4'>
            <div className='card-four-button rounded-full button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://github.com/randricalvin/2022-03-JS-Remote-404-Pim_Leaf">Github</a>
            </div>
            <div className='card-four-button rounded-full ml-5 button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out pointer-events-none opacity-70'>
                <a href="">Consulter</a>
            </div>
        </div>
        </div>

        {/* 4 */}
        <div className='card-one rounded-lg bg-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg'>
        <div className='rounded-t-lg overflow-hidden'>
            <img className='card-one-image lg:h-60 md:h-36 w-full object-cover object-center scale-100 transition-all duration-200 hover:scale-110' src={projectmood} alt="projet mood" />
        </div>
        <div className='flex flex-row justify-center gap-3 py-5'>
            <img src={logotailwind} alt="logo tailwind" style={{width : '2rem', height : '2rem'}}/>
            <img src={logoreact} alt="logo css" style={{width : '2rem', height : '2rem'}}/>
            <img src={logojs} alt="logo react" style={{width : '2rem', height : '2rem'}}/>
        </div>
        <div className='flex flex-row justify-center py-4 '>
        <div className='card-one-button rounded-full button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://github.com/randricalvin/Projet_2_React_Mood_WCS">Github</a>
        </div>
        <div className='card-one-button rounded-full ml-5 button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://mood-une-application-de-choix.netlify.app/">Consulter</a>
        </div>
        </div>
        </div>

        {/* 5 */}
        <div className='card-two rounded-lg bg-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg'>
        <div className='rounded-t-lg overflow-hidden'>
            <img className='card-two-image lg:h-60 md:h-36 w-full object-cover object-center scale-100 transition-all duration-200 hover:scale-110' src={projecterror} alt="projet mood" />
        </div>
        <div className='flex flex-row justify-center gap-3 py-5'>
            <img src={logohtml} alt="logo html" style={{width : '2rem', height : '2rem'}}/>
            <img src={logocss} alt="logo css" style={{width : '2rem', height : '2rem'}}/>
            <img src={logojs} alt="logo javascript" style={{width : '2rem', height : '2rem'}}/>
        </div>
        <div className='flex flex-row justify-center py-4'>
            <div className='card-two-button rounded-full button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://github.com/randricalvin/Pojet-1-Error404-WCS">Github</a>
            </div>
            <div className='card-two-button rounded-full ml-5 button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://kevinlavigne.github.io/projet1-error404/accueil.html">Consulter</a>
            </div>
        </div>
        </div>

        {/* 6 */}
        <div className='card-three rounded-lg bg-gray-200 transition duration-300 ease-in-out drop-shadow-2xl shadow-lg'>
        <div className='rounded-t-lg overflow-hidden'>
            <img className='card-three-image lg:h-60 md:h-36 w-full object-cover object-center scale-100 transition-all duration-200 hover:scale-110' src={hackathon} alt="projet mood" />
        </div>
        <div className='flex flex-row justify-center gap-3 py-5'>
            <img src={logotailwind} alt="logo tailwind" style={{width : '2rem', height : '2rem'}}/>
            <img src={logoreact} alt="logo css" style={{width : '2rem', height : '2rem'}}/>
            <img src={logojs} alt="logo react" style={{width : '2rem', height : '2rem'}}/>
        </div>
        <div className='flex flex-row justify-center py-4'>
            <div className='card-three-button rounded-full button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://github.com/randricalvin/Hackathon_Save_Ourselves">Github</a>
            </div>
            <div className='card-three-button rounded-full ml-5 button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out pointer-events-none opacity-70'>
                <a href="">Consulter</a>
            </div>
        </div>
        </div>

        {/* 7 */}
        <div className='card-three rounded-lg bg-gray-200 transition duration-300 ease-in-out drop-shadow-2xl mb-10 shadow-lg'>
        <div className='rounded-t-lg overflow-hidden'>
            <img className='card-three-image lg:h-60 md:h-36 w-full object-cover object-center scale-100 transition-all duration-200 hover:scale-110' src={hackathon2} alt="projet mood" />
        </div>
        <div className='flex flex-row justify-center gap-3 py-5'>
            <img src={logocss} alt="logo tailwind" style={{width : '2rem', height : '2rem'}}/>
            <img src={logoreact} alt="logo css" style={{width : '2rem', height : '2rem'}}/>
            <img src={logojs} alt="logo react" style={{width : '2rem', height : '2rem'}}/>
            <img src={logonode} alt="logo node" style={{width : '2rem', height : '2rem'}}/>
            <img src={logomysql} alt="logo mysql" style={{width : '2rem', height : '2rem'}}/>
        </div>
        <div className='flex flex-row justify-center py-4'>
            <div className='card-three-button rounded-full button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out'>
                <a href="https://github.com/randricalvin/Hackathon2_Karaout404">Github</a>
            </div>
            <div className='card-three-button rounded-full ml-5 button-project bg-[#5C64CF] text-[#F5F4F2] transition duration-300 ease-in-out pointer-events-none opacity-70'>
                <a href="">Consulter</a>
            </div>
        </div>
        </div>
        
      </div>
    
    
  )
}


export default ProjectsComponents