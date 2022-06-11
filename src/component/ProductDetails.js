import React, { useContext } from "react";
import { Link } from "react-router-dom";
//context
import { ProductContext } from "../context/ProductContextProvider";
const ProductDetails = (props) => {
  const products = useContext(ProductContext);
  const id = props.match.params.id;
  const product = products[id - 1];
  return (
    <div>
      <img style={{ width: "200px" }} src={product.image} alt="" />
      <h3>{product.category}</h3>
      <h3>{product.title}</h3>
      <p>{product.price}$</p>
      <p>{product.description}</p>
      <div>
        <Link to="/product">back to shop</Link>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
