import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { shopContext } from '../Context/Store'
import Item from '../Components/Item/Item'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import all_product from '../Components/Assets/all_product'
import RelatedProduct from '../Components/Relatedproduct/RelatedProduct'
const ShopCategory=(props)=> {
  // const all_product=useContext(shopContext)
  return (
   <div className="shop-category">
<img className="shopcategory-banner" src={props.banner} alt="" />
<div className="shopcategory-indexSort">
  <p>
    <span>Showing 1-12</span>
    out of 36 products
  </p>
  <div className="shopcategory-sort">
    Sort by <img src={dropdown_icon} alt="" />
  </div>
</div>
<div className="shopcategory-products">
  {all_product.map((item,i)=>{
    if(props.category===item.category){
      return<Item key ={i} {...item} />

    }
else{
  return(null)
}
  })}
</div>
<div className="shopcategory-loadmore">
  Explore More

</div>

   </div>
  )
}

export default ShopCategory