import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useDispatch } from 'react-redux'
import {addItem} from '../../Context/CartSlice'
// import { shopContext } from '../../Context/Store'
import { Link } from 'react-router-dom'
const ProductDisplay = (props) => {
    const {product}= props;
    const dispatch = useDispatch();
    const handleAddItem = ()=>{
        dispatch(addItem(product))
    }
    
    return (
        <div className='productdisplay'>
           <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    </div>
                     <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img'src={product.image} alt="" />
                </div>
            </div>
           </div>
           <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-start">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">{product.old_price}</div>
                <div className="productdisplay-right-price-new">{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">A shirt is a versatile and commonly worn garment that typically consists of a piece of fabric with openings for the arms and a central opening with buttons or a zipper for fastening. Shirts come in various styles, including formal dress shirts, casual T-shirts, and a wide range of designs in between.</div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div className="dubbutton">
            <button onClick={()=>{
                handleAddItem()
                
            }}>ADD TO CART</button>
               <Link className="Link"to="/cart">
            <button className='btn-carts' >CART</button>
            </Link>
            </div>
            <p className="productdisplay-right-category"><span>Category:</span>Women,T-Shirt,Crop Top</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Modern,Latest</p>

           </div>

        </div>
    )
}

export default ProductDisplay