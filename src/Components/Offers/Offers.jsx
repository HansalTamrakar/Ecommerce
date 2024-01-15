import React from 'react'
import './Offers.css'
import exclusive_image from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
        <div className="Offers-left">
            <h1>Exclusive Offers</h1>
            <h1>Offers For You</h1>
            <h1>ONLY ON BEST SELL PRODUCR</h1>
            <button className='offers-left'>Check Now</button>
            
        </div>
            <div>
                <img  alt="no" src={exclusive_image}></img>
            
            </div>
    </div>
    
  )
}

export default Offers