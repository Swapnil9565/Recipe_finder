import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Explore() {
  const [isClicked,setIsClicked]=useState(false);
  const [inputVal, setinputVal] = useState("");
  const [mealCards, setMealCards] = useState([]);
 

  const fetchRecipeData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputVal}`)
      .then((res) => {
       
          console.log(res.data.meals);
          setMealCards(res.data.meals);

        
      })
      .catch((err) => { 
     console.error(err);
      });
  };

  const handleSearch = () => {
    if (inputVal === "" ) {
      alert("Enter dish name first");

    } 
    else {
      fetchRecipeData();
    }
    setIsClicked(true);
  };

  return (
    <div className={`w-[641px] ${isClicked&&'h-auto bg-purple-300'} ${mealCards===null ?'bg-white':''} text-lg sm:w-[768px] md:w-[1024px] lg:w-full`}>
      <div className='w-full text-center py-5'>
        <input
          className='w-1/2 px-4 py-2 border-2 border-blue-900 rounded-md outline-none sm:w-1/3 md:w-1/4 lg:w-1/5'
          type='text'
          placeholder='Enter Dish here'
          value={inputVal}
          onChange={(e) => {
            setinputVal(e.target.value);
          }}
        />
        <button
          onClick={handleSearch}
          className='px-4 py-2 bg-orange-600 text-white font-bold mx-3 rounded-md transition-all hover:bg-blue-500'>
          Search
        </button>
      </div>
      <div className='w-full flex flex-wrap gap-6 justify-center py-10 sm:gap-8 md:gap-10 lg:gap-12'>
       {mealCards ? (mealCards.map((mealCard) => {
          return (  
              <div key={mealCard.idMeal}
                className='card text-center w-72 shadow-2xl bg-gray-100 rounded-md p-5 bg-white-300  hover:bg-white sm:w-64 md:w-64 lg:w-60'>
                <h2 className='text-center font-bold'>{mealCard.strMeal}</h2>
                <h6 className="text-sm">({mealCard.strArea})</h6>
                <img
                  className='rounded-sm w-30 mx-auto my-5'
                  src={mealCard.strMealThumb}
                />
                <div className="flex flex-col items-center justify-center gap-3">
                <NavLink to={`/${mealCard.idMeal}`}>
                <button className="px-3 py-1 font-bold bg-orange-600 text-white rounded-sm">Recipe</button></NavLink>
                <a href={mealCard.strYoutube} target="_blank"><FontAwesomeIcon className="text-red-600 text-3xl cursor-pointer" icon={faYoutube} /></a>
               
                </div>
              </div>  
          )
        })):(<h1 className="text-red-700 font-bold text-2xl">Ooops!...Recipe not found</h1>)}
      </div>
    </div>
  );
}

export default Explore;
