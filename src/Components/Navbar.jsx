import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
  
    <nav className='flex w-full bg-slate-600 text-white justify-between py-4 uppercase'>
        <div className='mx-7'>
            <h1 className='text-orange-500 font-bold italic text-2xl tracking-widest'>Food Heaven</h1>
        </div>
        <div className="flex list-none gap-10 mx-5 text-lg tracking-wide">
                <li><NavLink to='/' className='cursor-pointer'>Home</NavLink></li>
                <li><NavLink to='/Recipes' className='cursor-pointer'>Recipes</NavLink></li>
                <li><NavLink to='/Explore'className='cursor-pointer'>Explore</NavLink></li>
        </div>
    </nav>
    </>
  )
}

export default Navbar