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
        <section className="MOBILE-MENU flex lg:hidden justify-end mr-5 ">
          <button
                className="relative w-10 text-[#5C64CF] bg-white rounded-sm focus:outline-none mt-5"
                onClick={() => setIsNavOpen(!isNavOpen)}>
                <span className="sr-only">Open main menu</span>
                <div className="absolute block w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-1 w-8 bg-current transform transition duration-500 ease-in-out ${
                      isNavOpen ? "rotate-45" : "-translate-y-1.5"
                    }`}></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-1 w-8 bg-current   transform transition duration-500 ease-in-out ${
                      isNavOpen && "opacity-0"
                    }`}></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-1 w-8 bg-current transform  transition duration-500 ease-in-out ${
                      isNavOpen ? "-rotate-45" : "translate-y-1.5"
                    }`}></span>
                </div>
              </button>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="flex justify-center items-center">
            <ul className="min-h-[250px]"
            // close menu burger onclick
            onClick={() => setIsNavOpen(false)}
            >
              <li className="border-b border-gray-400 my-8 text-xl hover:text-[#5C64CF]">
              <Link to='/'><button className='font-bold'>Home</button></Link>
              </li>
              <li className="border-b border-gray-400 my-8 text-xl hover:text-[#5C64CF]">
              <Link to='/skills'><button className='font-bold'>Skills</button></Link>
              </li>
              <li className="border-b border-gray-400 my-8 text-xl hover:text-[#5C64CF]">
              <Link to='/projects'><button className='font-bold'>Projects</button></Link>
              </li>
              <li className="border-b border-gray-400 my-8 text-xl hover:text-[#5C64CF]">
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
          <Link to='/'><button className='text-xl font-extrabold hover:text-[#5C64CF]'>Home</button></Link>
          </li>
          <li>
          <Link to='/skills'><button className='text-xl font-extrabold hover:text-[#5C64CF]'>Skills</button></Link>
          </li>
          <li>
          <Link to='/projects'><button className='text-xl font-extrabold hover:text-[#5C64CF]'>Projects</button></Link>
          </li>
          <li>
          <Link to='/contact'><button className='text-xl font-extrabold hover:text-[#5C64CF]'>Contact</button></Link>
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