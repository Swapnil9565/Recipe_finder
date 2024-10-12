import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cuisines from "./Components/Cuisines";
import Explore from "./Components/Explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MealRecipe from "./Components/MealRecipe";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cuisines' element={<Cuisines/>}></Route>
          <Route path='/Explore' element={<Explore/>}></Route>
          <Route path="/:mealId" element={<MealRecipe/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
