import React, {useState, useEffect} from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import Home from './Components/Home';
import { Route, Switch } from "react-router-dom";
import Recipe from './Components/Recipe';
import Help from './Components/Help';
import Footer from './Components/Footer';




function App() {
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/meals')
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      setMeals(data)
    })
  })

  const dish= meals.map((meal)=>{
    return(
      <div className='meals'>
        <div className='card'>
          <img 
          src={meal.strMealThumb}
          alt={meal.strMeal} 
          className="card-image" 
        />
      
        <div className='card-body'>
          <span className='category'>{meal.strCategory}</span>
          <h3>{meal.strMeal}</h3>
        </div>
        </div>
      </div>
    )
  })
  return (
    <div>
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Home dish = {dish}/>
        </Route>
        <Route exact path="/recipe">
          <Recipe />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
      </Switch> 
      <Footer />
    </div> 
  );
}

export default App;
