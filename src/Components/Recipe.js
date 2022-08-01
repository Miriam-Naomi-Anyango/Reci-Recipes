import React, { useState, useEffect } from 'react';

function Recipe(){
  const [searchTerm, setSearchTerm] = useState("")
  const [meals, setMeals] = useState([])
  

  
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
                <a href={val.strSource}>Instructions</a>
                
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