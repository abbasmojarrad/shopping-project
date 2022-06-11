import React from "react";
import { Link } from "react-router-dom";
const ProductItems = ({ data }) => {
  return (
    <div style={{ width: "350px", height: "400px", border: "1px solid black" }}>
      <img style={{ width: "50%" }} src={data.image} alt="productPicture" />
      <h1>{data.title}</h1>
      <span>{data.price}</span>
      <div>
        <Link to={`/product/${data.id}`}>detail</Link>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default ProductItems;
