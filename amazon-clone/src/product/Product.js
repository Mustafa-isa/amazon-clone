import React from "react";
import header from "../image/images.jpg";
import "./products.css";
import ProductItem from "./product_item/ProductItem";
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image2.jpg";
function Product() {
  const myProducts = [
    {
      id: 1,
      description:
        "car is the life style of your body so it avaslibael for you an where you can buy it ",
      title: "car",
      price: 233,
      imageUrl:`${image3}`
    },
    {
      id: 2,
      description:
        "car is the life style of your body so it avaslibael for you an where you can buy it ",
      title: "shmeta",
      price: 133,
      imageUrl: `${image2}`
    },
    {
      id: 3,
      description:
        "car is the life style of your body so it avaslibael for you an where you can buy it ",
      title: "glaseete",
      price: 433,
      imageUrl: `${image1}`
    },
    {
      id: 4,
      description:
        "car is the life style of your body so it avaslibael for you an where you can buy it ",
      title: "cksar",
      price: 254,
      imageUrl: `${image4}`
    }
  ];
  return (
    <div className="container_products">
      <div className="header_product">
        <img src={header} alt="" />
      </div>
      <div className="product_contaienr_div">
        {myProducts.length > 0
          ? myProducts.map(el => {
              return (
                <ProductItem
                  key={el.id}
                  description={el.description}
                  title={el.title}
                  price={el.price}
                  imageUrl={el.imageUrl}
                  id={el.id}
                />
              );
            })
          : ""}
    
      </div>
    </div>
  );
}

export default Product;
