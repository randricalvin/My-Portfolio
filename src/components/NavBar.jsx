import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div>
        <Link to='/'><button>Home</button></Link>
      </div>
      <div>
        <Link to='/skills'><button>Skills</button></Link>
      </div>
      <div>
        <Link to='/projects'><button>Projects</button></Link>
      </div>
      <div>
        <Link to='/contact'><button>Contact</button></Link>
      </div>
    </div>
    </>
  )
}

export default NavBar