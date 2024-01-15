import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import all_product from '../Assets/all_product'
const RelatedProduct = (props) => {
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
  <div className="relatedproducts-item">
{
    all_product.map((item,i)=>{
   
      return props.category===item.category ?<Item key ={i} {...item} />:null;

    
    })
}
    </div>
 </div>
  )
}

export default RelatedProduct