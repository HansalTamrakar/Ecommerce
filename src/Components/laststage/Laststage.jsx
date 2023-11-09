import React, { useEffect } from 'react'
import './Laststage.css'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'


const Structure = ({name,category,new_price,image})=>{
    function getFirstTwoWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Take the first two elements (words) from the array
    const firstTwoWords = words.slice(0, 3);

    // Join the words back into a string
    const result = firstTwoWords.join(' ');

    return result;
}
return(
       <div className='box'>
        <div className='collectionsss'>
        <img className="image"src={image} alt="" />
        <div className='collectionss'>
           <span className='product-name'>{getFirstTwoWords(name)}</span>
           <div className='product-category'>Category:{category.charAt(0).toUpperCase()+category.slice(1)}</div>
           </div>
  </div>
  <div className='new_prices'>
    {new_price}.00$
    </div>     </div>


    )
}

const Laststage = () => {
    const cartItems = useSelector(store=>store.cart.items)


    
    const [price,setPrice] =useState(0);

    function cost(cartItems){
        let c=0;
    let x=0;
     for(let i =0;i<=cartItems.length-1;i++){
        c=cartItems[i].new_price+c;
         console.log(c)
         x=c;

         }
         setPrice(x)
        
}

            
         useEffect(()=>{
            cost(cartItems)
         },[])
  return (
    <div className='page'>
    <div className='Box'>
        <div className='h1'> CART ITEMS</div><br />
        
        
        {
            cartItems.map((item)=>{
                return <Structure {...item} />
            })
        }
        <hr />
        <div className='Total'>
           
            Card Total
          
          

        </div>
         <div className='amount'>${price
        
         }.00</div>
         <button className='pay-btn'>Pay</button>
        
        

    </div>
    </div>
    
  )
}

export default Laststage;