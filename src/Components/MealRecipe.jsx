import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MealRecipe() {
  const [recipes, setRecipes] = useState([]);
  let { mealId } = useParams();
  const showRecipe = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => {
        console.log(res.data.meals);
        setRecipes(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    showRecipe();
  }, []);

  return (
    <div className="bg-[#F9B9FF] font-medium w-[641px] sm:w-[1024px] md:[1024px] lg:w-full">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.idMeal} className="" >
            <div className='flex flex-col items-center gap-5'>
              <div className='text-center mt-5'>
                <h1 className='font-bold text-3xl text-violet-900 sm:text-2xl md:text-xl lg:text-2xl'>{recipe.strMeal}</h1>
                <h3 className="text-lg sm:text-lg md:text-md lg:text-md">({recipe.strArea})</h3>
              </div>
              <div className='image '>
                <img
                  className='rounded-lg mx-auto w-3/5 md:w-2/5 lg:w-1/3'
                  src={recipe.strMealThumb}
                  alt=''
                />
              </div>
              <div className="mealInfo mb-5">
                <p className="text-xl font-bold">{recipe.strCategory}</p>
              </div>
            </div>
            <div className='ingredientList flex flex-col items-center w-full px-4'>
              <h1 className='font-bold text-3xl text-violet-900 uppercase sm:text-2xl md:text-xl lg:text-xl'>
                Ingredients:
              </h1>
              <ul className='grid grid-cols-2 my-5 gap-y-2 gap-x-20 text-2xl sm:text-2xl md:text-xl lg:text-lg'>
                <li>
                  {recipe.strMeasure1} {recipe.strIngredient1}
                </li>
               
                <li>
                  {recipe.strMeasure2} {recipe.strIngredient2}
                </li>
                <li>
                  {recipe.strMeasure3} {recipe.strIngredient3}
                </li>
                <li>
                  {recipe.strMeasure4} {recipe.strIngredient4}
                </li>
                <li>
                  {recipe.strMeasure5} {recipe.strIngredient5}
                </li>
                <li>
                  {recipe.strMeasure6} {recipe.strIngredient6}
                </li>
                <li>
                  {recipe.strMeasure7} {recipe.strIngredient7}
                </li>
                <li>
                  {recipe.strMeasure8} {recipe.strIngredient8}
                </li>
                <li>
                  {recipe.strMeasure9} {recipe.strIngredient9}
                </li>
                <li>
                  {recipe.strMeasure10} {recipe.strIngredient10}
                </li>
                <li>
                  {recipe.strMeasure11} {recipe.strIngredient11}
                </li>
                <li>
                  {recipe.strMeasure12} {recipe.strIngredient12}
                </li>
                <li>
                  {recipe.strMeasure13} {recipe.strIngredient13}
                </li>
                <li>
                  {recipe.strMeasure14} {recipe.strIngredient14}
                </li>
                <li>
                  {recipe.strMeasure15} {recipe.strIngredient15}
                </li>
                <li>
                  {recipe.strMeasure16} {recipe.strIngredient16}
                </li>
                <li>
                  {recipe.strMeasure17} {recipe.strIngredient17}
                </li>
                <li>
                  {recipe.strMeasure18} {recipe.strIngredient18}
                </li>
                <li>
                  {recipe.strMeasure19} {recipe.strIngredient19}
                </li>
                <li>
                  {recipe.strMeasure20} {recipe.strIngredient20}
                </li>
              </ul>
            </div>
            <div className='instructions w-full flex flex-col items-center'>
              <h1 className='font-bold text-3xl text-violet-900 uppercase sm:text-2xl md:text-xl lg:text-xl'>
                Instructions:
              </h1>
              <p className='my-5 w-[90%] tracking-wide text-2xl sm:text-2xl md:text-lg lg:text-md lg:w-1/2'>{recipe.strInstructions}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MealRecipe;
