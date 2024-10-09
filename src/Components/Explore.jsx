import React, { useState } from "react";
import axios from "axios";

function Explore() {
    // const [recipes, setRecipes] = useState();
  const [inputVal,setinputVal]=useState("");
 
  const fetchRecipeData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`)
      .then((res) => {
        console.log(res.data.meals[0]);
        setRecipes(res.data.meals[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
     const handleSearch=()=>{
       if(inputVal===""){
        alert("Enter dish name first")
       }
       else{
           fetchRecipeData();

       }
          
     }
  

 
  return (
  
    <div className='container w-full'>
      <div className='w-full text-center my-5'>
        <input
          className='w-1/4 px-3 py-1 border-2 border-black rounded-md outline-none'
          type='text'  placeholder='Enter Dish here' value={inputVal}
          onChange={(e)=>{setinputVal(e.target.value)}}
        />
        <button onClick={handleSearch} className='px-3 py-1 bg-violet-600 text-white font-bold mx-3 rounded-md transition-all hover:bg-violet-900'>
          Search
        </button>
      </div>
      <div className='w-1/3 px-4 py-2 h-full m-auto border-2 border-black rounded-md'>
        
        <div className='flex flex-col justify-center'>
          <div className='text-center'>
            <h1>hhh</h1>
          </div>
          <div className='mx-auto'>
            <img src="" alt='' />
          </div>
        </div>
        <div className='ingredient-list relative'>
          <ul className=' list-disc grid grid-cols-2 px-8 py-7 gapx-10 '>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
          </ul>
        <div className='absolute right-0 bottom-0 '>
          <button className='text-white font-bold bg-violet-600 px-3 py-1 rounded-md hover:bg-violet-900'>
            Show Recipe
          </button>
        </div>
        </div>
        
        
    
      </div>
    </div>
    
  );
}

export default Explore;
