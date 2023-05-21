import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Useapi} from "../context/Context"
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
function Checkout_product(props) {
const dispatch =Useapi().dispatch
  const product =  props.product
  const description =product.description
  const id =product.id
  const imageUrl =product.imageUrl
  const price =product.price
const DeleteProduct =() =>{
dispatch({
  type:"DELETE_PRODUCT",
  product
})
}
  return (
<div className="product_checkout_hh">
<img src={imageUrl} alt="" />
<div className="global_info">
  <p>{description}</p>
  <div className="flex_price">
    <div className="icons">
      
    <FontAwesomeIcon icon={faStar} color="yellow" />
      <FontAwesomeIcon icon={faStar} color="yellow" />
      <FontAwesomeIcon icon={faStar} color="yellow" />
      <FontAwesomeIcon icon={faStar} color="yellow" />
      <FontAwesomeIcon icon={faStar} color="yellow" />
    </div>
    <span> Price:  <FontAwesomeIcon icon={faDollarSign}/>  {price} </span>
  </div>
  <button onClick={DeleteProduct}>Delete</button>
</div>
</div>
  )
}

export default Checkout_product