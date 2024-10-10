import React, { useState, useEffect } from "react";
import axios from "axios";


function Recipes() {
  const [cards, setCards] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Indian");

  const fetchMeal = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedOption}`
      )
      .then((res) => {
        let meals = res.data.meals;

        if (meals.length > 15) {
          setCards(meals.slice(0, 18));
        } else {
          setCards(meals);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchMeal();
  }, [selectedOption]);
 
  return (
    <>
      <div className='w-[504px] bg-red-100 h-full sm:w-[768px] md:w-[1024px] lg:w-full'>
        <div className='dropdown text-center py-5'>
          <h1 className='font-bold text-lg my-3'>Select Cuisine</h1>
          <select
            className='border-2 p-2 border-orange-200 font-semibold  outline-none rounded-md'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}>
            <optgroup label='Asian Cuisine'>
              <option className="text-base md:text-lg" value='Indian'>Indian</option>
              <option className="text-base md:text-lg" value='Chinese'>Chinese</option>
              <option className="text-base md:text-lg" value='Malaysian'>Malaysian</option>
              <option className="text-base md:text-lg" value='Japanese'>Japanese</option>
            </optgroup>

            <optgroup label='European Cuisine'>
              <option className="text-base md:text-lg" value='Italian'>Italian</option>
              <option className="text-base md:text-lg" value='French'>French</option>
              <option className="text-base md:text-lg" value='British'>British</option>
              <option className="text-base md:text-lg" value='Polish'>Polish</option>
            </optgroup>

            <optgroup label='American Cuisine'>
              <option className="text-base md:text-lg" value='American'>American</option>
              <option className="text-base md:text-lg" value='Mexican'>Mexican</option>
              <option className="text-base md:text-lg" value='Canadian'>Canadian</option>
            </optgroup>
          </select>
        </div>

        <h1 className='font-bold text-xl text-violet-900 text-center uppercase'>
          {selectedOption} Foods
        </h1>
        <div className='mx-auto w-20 border-4 border-b-violet-900'></div>
        <div className='w-full flex flex-wrap gap-10 justify-center py-10'>
          {cards.map((card) => {
            return (
              <div
                key={card.idMeal}
                className='card w-52 shadow-2xl bg-gray-100 rounded-md p-5 bg-white-300 transform transition duration-300 cursor-pointer hover:scale-105 hover:bg-white'>
                <h2 className='text-center font-bold'>{card.strMeal}</h2>
                <img
                  className='rounded-sm w-30 mx-auto my-5'
                  src={card.strMealThumb}
                />
              
              </div>
            );
          })}
         
        </div>
      </div>
      
      </>
   
  );
}

export default Recipes;
