import React from 'react'
import img from '../Assets/Images/cooking.jpg'
import { useNavigate } from 'react-router-dom';
function Home() {
  let navigate=useNavigate();
  return (
  
    <div className='text-white w-[641px] flex flex-col-reverse justify-evenly items-center h-[191vh] lg:w-full sm:w-[768px]  md:w-[1024px] md:h-[123vh] md:px-10 md:flex md:flex-row md:justify-around md:items-center lg:h-[92vh]' style={{backgroundColor:"rgb(10 1 44)"}}>
      <div className="text-center  sm:text-left sm:py-20 md:text-left md:py-0 md:w-[90vw]">
           <h1 className='leading-relaxed tracking-wide uppercase font-bold text-4xl italic md:leading-normal md:text-5xl'>Make Your <br /> <span className='text-orange-500 '>Dream Food</span> <br />With Us</h1>
           <p className='w-full text-center leading-normal my-6 tracking-wide sm:w-full sm:text-left md:w-1/2 md:text-left'>Say good bye to long and frustrating food blogs and recipe videos.Access our Recipe cards to prepare any dish in minutes.</p>
           <button onClick={()=>navigate('/Cuisines')} className='px-10 py-5 mb-5 text-xl font-bold bg-red-700 text-white rounded-md cursor-pointer sm:px-5 sm:py-2 sm:text-xl md:mb-0 md:px-3 md:py-2 lg:px-2 lg:py-2 lg:text-sm'>Browse Dish</button>
      </div>
      <div className="right md:h-[80vh] lg:h-[60vh]">
          <img src={img} className='h-[62vh] text-slate-900 bg-slate-900 md:h-[80vh]  md:w-[80vw] lg:h-[60vh] lg:w-[40vw]' alt="" />
      </div>
    </div>
    
  )
}

export default Home;