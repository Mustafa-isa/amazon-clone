import {React,useEffect} from 'react'
import { Route ,Routes } from "react-router-dom";
import Header from './Head/Header';
import SignUp from './Sign/SignUp';
import {Useapi} from "../src/context/Context"
import Order from './order/Order';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Product from './product/Product';
import Checkout from './checkout/Checkout';
function App() {
const {dispatch} =Useapi()
useEffect(() => {
auth.onAuthStateChanged(user =>{
  if(user){

    dispatch({
      type:"ADD_USER",
      user:user
    })
  }
  else{
    
    dispatch({
      type:"ADD_USER",
      user:null
    })
  }
})
}, [dispatch]);
  return (
  <div className="app">
    <Routes>
      <Route path='/' element={
        <>
        <Header />
        <Product />
        </>
      } />
      <Route path='/login' element={<SignUp />} />
      <Route path='cart' element={<Checkout/>}/>
      <Route path='/order' element={<Order/>}/>
    </Routes>
  </div>
  )
}

export default App