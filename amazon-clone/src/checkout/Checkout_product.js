import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Checkout_product(props) {
  const product =  props.product
  const description =product.description
  const id =product.id
  const imageUrl =product.imageUrl
  const price =product.price

  console.log(product)
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
    <span>{price}</span>
  </div>
  <button>Delete</button>
</div>
</div>
  )
}

export default Checkout_product