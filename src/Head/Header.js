import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import {Useapi} from "../context/Context"
import {auth} from "../firebase"
import { signOut } from "firebase/auth";

function Header() {
  const basket = Useapi().basket
  console.log(basket)
   const handleauthentication =() =>{
try{

  auth.signOut()
  console.log("user signout successfully")
}catch(err){
  console.log(err)
}
console.log("test function")
   }
  const {user} = Useapi()

  return (
    <header>
      <Link to="/" className="logo-link">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="logoHeader"
        />
      </Link>
      <form className="search-form">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="header-links ">
        <Link to= {`${user ? "/" : "/login"}`} className="header-link  user_authentication">
          <div className="email">
          {
            user? user.email : ""
          }
          </div>
        <div class onClick={handleauthentication}>
        {
          user ? "signout" :"sign in"
        }
        </div>
        </Link>
        <Link to="/order" className="header-link ">
        Orders
        </Link>
        <Link to="/cart" className="header-link cart-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          {
                basket.length>0? <span className="numOf_Products">{

                  basket.length
                            }</span> :null
          }
    
        </Link>
      </div>
    </header>
  );
}

export default Header;
