import React, { useState } from 'react';
import data from '../db.json'
function Recipe(){
  const [searchTerm, setSearchTerm] = useState("")

  return (
  <>
   <div className='templateContainer'>
     <div className='searchInput_Container'>
     <input id="serchInput" type="text" placeholder='Search Recipe...' onChange={(event) =>{
       setSearchTerm(event.target.value);
     }} />
     </div>
     <div className='recipes-good'>
     {
       data.filter((val) =>{
            if(searchTerm === ""){
              return val;
            }else if (val.strMeal.toLowerCase().includes(searchTerm.toLowerCase())){
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