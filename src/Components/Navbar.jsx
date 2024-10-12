import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isClicked, setIsClicked] = useState(false)
  const dropdownNavbar=()=>{
    console.log("button clicked");
         setIsClicked(!isClicked);
  }
  return (
    <>
  
    <nav className='flex justify-between bg-slate-600 text-white py-4 uppercase w-[641px] sm:w-[768px]  md:w-[1024px]  lg:w-full'>
        <div className='mx-3 sm:mx-5 md:mx-7 lg:mx-7'>
            <h1 className='text-orange-500 font-bold italic text-3xl tracking-widest md:text-3xl'>Food Heaven</h1>
        </div>
        <div className="navbar flex items-center list-none gap-10 mr-5 text-base tracking-wide sm:text-md md:text-md">
                <li><NavLink to='/' className='cursor-pointer hidden sm:block md:block lg:block'>Home</NavLink></li>
                <li><NavLink to='/Explore'className='cursor-pointer hidden sm:block md:block lg:block'>Get Recipe</NavLink></li>
                <li><NavLink to='/Cuisines' className='cursor-pointer hidden sm:block md:block lg:block '>Cuisines</NavLink></li>
                <FontAwesomeIcon onClick={dropdownNavbar} icon={faBars} className=' block text-3xl sm:hidden  md:hidden lg:hidden'/>
        </div>
    </nav>
        {isClicked&&
          <div className="dropdown-nav py-5 list-none bg-gray-700 text-white flex flex flex-col items-center gap-4 w-[640px] text-xl uppercase transition-all delay-500 duration-1000 sm:hidden md:hidden lg:hidden">
                <li><NavLink to='/' className='cursor-pointer'>Home</NavLink></li>
                <li><NavLink to='/Explore'className='cursor-pointer '>Get Recipe</NavLink></li>
                <li><NavLink to='/Cuisines' className='cursor-pointer'>Cuisines</NavLink></li>
           </div>
         
}
    </>
  )
}

export default Navbar