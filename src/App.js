import React, {useState, useEffect} from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from "react-router-dom";
import Recipe from './Components/Recipe';
import Help from './Components/Help';
import Footer from './Components/Footer';
import Display  from './Components/Display';




function App() {
  const [meals, setMeals] = useState([]);  
  
  useEffect(() => {
    fetch('https://reci-react.herokuapp.com/meals')
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      setMeals(data)
    })
  })

  
  return (
    <div>
    <NavBar />
      <Routes>

        <Route path="/" element={<Home meals={meals}/>} />
          

        <Route path="/recipe" element={<Recipe />} >
          <Route path="display" element={<Display />} />
        </Route>
        <Route exact path="/help" element={<Help />} />
          
      </Routes> 
      <Footer />
    </div> 
  );
}

export default App;
