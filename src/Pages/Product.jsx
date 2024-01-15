// import React, { useContext } from 'react'
// import { shopContext } from '../Context/shopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import all_product from '../Components/Assets/all_product';
import Descritpionbox from '../Components/DescriptionBox/Descritpionbox';
import RelatedProduct from '../Components/Relatedproduct/RelatedProduct';
function Product() {
  
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  console.log(product)
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <Descritpionbox/>
      <RelatedProduct category={product.category}/>
    </div>
  )
}

export default Product