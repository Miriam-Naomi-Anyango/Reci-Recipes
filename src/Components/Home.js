import React from 'react'

export const Home = ({dish}) => {
  return (
    <div>
      <div className='banner'>
        <div className='wordings'>
          <h1>
            <strong>Let's Start<br />
            Cooking With<br />
            Popular Recipes</strong>
          </h1>
          <p>Want to learn how to cook but confused how to start?<br />
          No need to worry again!<br />
          Reci is the place to be...</p>
        </div>
        <div>
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGAy-rlgerfkDOhnRWKaoczq5MVFg9Tt6EQ&usqp=CAU'
        alt='patter'
        className='is'
        />
        </div>
        <div>
        <img 
        src='https://t4.ftcdn.net/jpg/03/09/28/17/360_F_309281741_9mv4msJPDjPPIxlqaHPIpxWVFg31AlyA.jpg'
        alt='burger'
        className='isi'
        />
        </div>
      </div>
      <hr className='grad'></hr>
     
      <div className= "food-display">
        <div text>
          <h1><strong>Popular Food</strong></h1>
          <p>We provide a variety of food recipes <br />
          with high taste from famous chefs</p>
        </div>
      {dish}
      </div>
    </div>

  )
}
export default Home;