import React from 'react'
import Header from '../Head/Header'
import Checkout_product from "../checkout/Checkout_product"
import { Useapi } from '../context/Context'
import "./order.css"
function Order() {
  const basket = Useapi().basket
  const TotalPrice = basket.reduce((e,a)=>{
    return e+a.price
  },0)
  const user = Useapi().user
  return (
<div className="order_container">
  <Header />
  <div className="order_body">
    <div className="order_heade">
      <h2>Checkout({basket.length}items)</h2>
    </div>
    <div className="order_item_div">
      <h2>Delivery Address</h2>
      <div className="addrees_flex">
        <span>{user ? user.email:"geust"}</span>
        <span>Qena,Egypt</span>
      </div>
      
    </div>
    <div className="order_item_div">
      <h2>Review Items and Delivery</h2>
      <div className="addrees_flex">
    {
      basket.map(product =>{
        return <Checkout_product key={product.id} product={product}/>
      })
    }
      </div>
      
    </div>


    <div className="order_item_div">
      <h2>Payment Method</h2>
      <div className="addrees_flex">
  <div className="sure_buy">
    <span>Order Total:{TotalPrice}</span>
    <button>Buy Now</button>
  </div>
      </div>
      
    </div>

  </div>
</div>
  )
}

export default Order