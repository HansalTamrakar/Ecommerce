import React from 'react'
import './Buy.css'
import all_product from '../Assets/all_product'
// import { shopContext } from '../../Context/shopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {removeItem} from '../../Context/CartSlice'
// import {all_product} from '../Assets/all_product'
function Item(props) {
   const dispatch = useDispatch();
    const handleremove = ()=>{
        dispatch(removeItem(props.id))
    }
  return (
    <div className="item-mat">
      <Link to={`/product/${props.id}`}>
        
        
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
        </Link>
        
        <p>{props.name} </p>
        <div className="item-prices">
            <div className="item-price-new">
               {props.new_price} 
            </div>
            <div className="item-price-old">
                {props.old_price}
                
            </div>
            <div>
            <button className='btn-cross' onClick={()=>{
              handleremove()
            }}>REMOVE</button>
            
            </div>
              <div>
             
            </div>
        </div>
      
        
    </div>
  )
}

export default Item