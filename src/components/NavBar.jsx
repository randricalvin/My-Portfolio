import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
{/* adding a burger button */}
<div className="shadow-md">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden justify-end mr-5">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-[#5C64CF]"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-[#5C64CF]"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-[#5C64CF]"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-[#5C64CF]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </div>
            <div className="flex justify-center items-center">
            <ul className="min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase hover:text-[#5C64CF]">
              <Link to='/'><button className='font-bold'>Home</button></Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-[#5C64CF]">
              <Link to='/skills'><button className='font-bold'>Skills</button></Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-[#5C64CF]">
              <Link to='/projects'><button className='font-bold'>Projects</button></Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-[#5C64CF]">
              <Link to='/contact'><button className='font-bold'>Contact</button></Link>
              </li>
            </ul>
            </div>
          </div>
        </section>
        <section className="DESKTOP-MENU navbar flex lg:flex-col lg:justify-center lg:items-center lg:flex-1">
        <ul className=" DESKTOP-MENU hidden space-x-8 lg:flex">
          {/* center menu navigation */}
          <li>
          <Link to='/'><button className='font-bold hover:text-[#5C64CF]'>Home</button></Link>
          </li>
          <li>
          <Link to='/skills'><button className='font-bold hover:text-[#5C64CF]'>Skills</button></Link>
          </li>
          <li>
          <Link to='/projects'><button className='font-bold hover:text-[#5C64CF]'>Projects</button></Link>
          </li>
          <li>
          <Link to='/contact'><button className='font-bold hover:text-[#5C64CF]'>Contact</button></Link>
          </li>
        </ul>
        </section>
      </nav>
      <style>
        {`.hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
      </style>

    </div>
      </>
  )
}

export default NavBar