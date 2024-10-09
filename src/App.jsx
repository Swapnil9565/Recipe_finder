import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Explore from "./Components/Explore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Recipes' element={<Recipes/>}></Route>
          <Route path='/Explore' element={<Explore/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
