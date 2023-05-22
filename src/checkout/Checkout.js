import React from 'react'
import "./checkout.css"
import Header from "../Head/Header"
import checkoutImage from "../image/checkout.jpg"
import { Useapi } from '../context/Context'
import Checkout_product from './Checkout_product'
import { useNavigate } from 'react-router-dom'
function Checkout() {
  const navigate =useNavigate()
  const basket = Useapi().basket;
  const totalPrice = basket.reduce((a,e)=>{
    return a+e.price
  },0)
  const goOrderPage =() =>{
navigate("/order")
  }
  const user = Useapi().user

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
        <div className="checkout_box">
          <p>Sup({basket.length} item) TotalPrice:{totalPrice}</p>
          <div className="input">
            <label htmlFor="checkbox"> a gift is added</label>
            <input type="checkbox" name='checkbox' />
          </div>
          <button onClick={goOrderPage}>Porceed to checkout</button>
        </div>
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