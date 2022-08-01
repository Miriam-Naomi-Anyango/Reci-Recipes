import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//import {useParams} from 'react-router'

function Recipe(){
  const [searchTerm, setSearchTerm] = useState("")
  const [meals, setMeals] = useState([])
  

//  const Display = ({val}) => {
//    let {food} = useParams()
//  return (
//    <div id={food}>
//        <p>hello world</p>
//        <img src= {val.strMealThumb}/>
//        <p>{val.strInstructions}</p>
//        <a href={val.strYoutube}>Watch Instructions</a>
//    </div>
//  )
//}

  
  useEffect(() => {
    fetch('https://reci-react.herokuapp.com/meals')
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      setMeals(data)
    })
  })

  return (
  <>
   <div className='templateContainer'>
     <div className='myInput'>
     <input id="searchInput" type="text" placeholder='Search Recipe...' onChange={(event) =>{
       setSearchTerm(event.target.value);
     }} />
     </div>
     <div className='recipes-good'>
     {
       meals.filter((val) =>{
            if(searchTerm === ""){
              return val;
            }else if (val.strMeal.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
            else if (val.strArea.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
            else if (val.strCategory.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((val) =>{

            return(
              <div className='meals'>
              <div className='card'>
                <img 
                src={val.strMealThumb}
                alt={val.strMeal} 
                className="card-image" 
              />
            
              <div className='card-body'>
                <span className='category'>{val.strCategory}</span>
                <h3>{val.strMeal}</h3>
                <h5>{val.strArea}</h5>
                
                <NavLink to="/recipe/display">Instructions</NavLink>
              </div>
              </div>
            </div>
            )
            
          })
          
     }
   </div>
   </div>
  </>
    
  )
}
export default Recipe;