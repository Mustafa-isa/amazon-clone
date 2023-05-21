import {React,useEffect} from "react";
import "./productitem.css";
import { Useapi } from "../../context/Context";
function ProductItem({ description, title, price, imageUrl ,id}) {
  const dispatch = Useapi().dispatch;
  const basket = Useapi().basket;
  const addToBasket = () => {
    dispatch({
      type: "ADD_PRODUCT",
      product: {
        description,
        title,
        price,
        imageUrl,
        id
      }
    });
  };
  useEffect(() => {
    const handleMouseMove = event => {
      const el = event.currentTarget;
      const xPosition = event.layerX;
      const yPosition = event.layerY;
      console.log(xPosition, yPosition);
      // console.log(el);
      // el.style.transform= `rotateY(${xPosition}deg) rotateX(${-yPosition/50}deg)`
    };

    const productDivs = document.querySelectorAll('.product_item_div');
    productDivs.forEach(el => {
      el.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      productDivs.forEach(el => {
        el.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  console.log(basket);
  return (
    <div className="product_item_div">
      <p className="description">{description}</p>
      <div className="image_container">
        <div className="info">
          <p className="title">{title}</p>
          <p className="price_">
            <span className="S_PRICE">$</span>

            {price}
          </p>
        </div>

        <img src={imageUrl} alt="" />
      </div>
      <button onClick={addToBasket}>add</button>
    </div>
  );
}

export default ProductItem;
