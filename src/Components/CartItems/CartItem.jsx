// import React, { useContext } from 'react'
import './cartItem.css'

import { useDispatch, useSelector } from 'react-redux'
import Buy from '../Buy/Buy'
import {clearCart} from '../../Context/CartSlice'
import { Link } from 'react-router-dom'


const CartItem = () => {
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
const cartItems = useSelector(store=>store.cart.items)
  return (
    <>
    <button className='clear-cart' onClick={()=>{
        handleClearCart()
    }}>CLEAR CART</button>

    <div className="cartitems">
        <div className="cartitems-format-main">
            {
                cartItems.map((item,i)=>{
                    return <Buy key = {i} {...item} />
                })
                
            }
           { console.log(cartItems.length)}
           
        </div>
        <Link className='Link' to="/buy">
       <div className='buyy'>
        
         {cartItems.length >0?<button className='click-buy' 
   
         >BUY</button>:null
         
         }
         </div>
         </Link>
         
    </div>
        </>
  )
}

export default CartItem