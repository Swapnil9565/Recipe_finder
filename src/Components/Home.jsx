import React from 'react'
import img from '../Assets/Images/cooking.jpg'
import { useNavigate } from 'react-router-dom';
function Home() {
  let navigate=useNavigate();
  return (
  
    <div className='w-full text-white h-[631px] flex justify-around items-center' style={{backgroundColor:"rgb(10 1 44)"}}>
      <div className="right px-3 ">
           <h1 className='leading-normal tracking-wide uppercase font-bold text-5xl italic'>Make Your <br /> <span className='text-orange-500 '>Dream Food</span> <br />With Us</h1>
           <p className='w-1/2 leading-normal my-6 tracking-wide'>Say good bye to long and frustrating food blogs and recipe videos.Access our Recipe cards to prepare any dish in minutes.</p>
           <button onClick={()=>navigate('/Recipes')} className='px-3 py-1 font-bold bg-red-700 text-white rounded-md cursor-pointer'>Browse Dish</button>
      </div>
      <div className="left">
          <img src={img} className='text-slate-900 bg-slate-900' alt="" />
      </div>
    </div>
    
  )
}

export default Home;