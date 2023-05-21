import React from 'react'
import "./checkout.css"
import Header from "../Head/Header"
import checkoutImage from "../image/checkout.jpg"
import { Useapi } from '../context/Context'
import Checkout_product from './Checkout_product'

function Checkout() {
  const basket = Useapi().basket;
  const user = Useapi().user
  console.log(user)
  console.log(basket)
  return (
  <div className="checkout_container_page">
    <Header/>
    <div className="checkout_body">
      <div className="bodyStart">
        <div className="flex_left">
          <img src={checkoutImage} alt="" />
        <span> hello {user ? user.email : "geust"}</span>
        <br/>
        <span>checkout cart products</span>
        </div>
        {/* flex right */}
      </div>
    </div>
    {basket.length >0 ?   <div className="checkout_content">
    
{
  basket.map(product =>{
    return <Checkout_product key={product.id} product={product}/>
  })
}
    </div> : <h2>There is no products added</h2> }
  
  </div>
  )
}

export default Checkout