import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
  
    <nav className='flex justify-between bg-slate-600 text-white py-4 uppercase w-[504px] sm:w-[768px]  md:w-[1024px]  lg:w-full'>
        <div className='mx-3 sm:mx-5 md:mx-7 lg:mx-7'>
            <h1 className='text-orange-500 font-bold italic text-xl tracking-widest md:text-2xl'>Food Heaven</h1>
        </div>
        <div className="flex items-center list-none gap-10 mr-5 text-base tracking-wide sm:text-lg md:text-xl">
                <li><NavLink to='/' className='cursor-pointer'>Home</NavLink></li>
                <li><NavLink to='/Recipes' className='cursor-pointer'>Recipes</NavLink></li>
                <li><NavLink to='/Explore'className='cursor-pointer'>Explore</NavLink></li>
        </div>
    </nav>
    </>
  )
}

export default Navbar