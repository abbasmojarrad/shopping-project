import React, { useContext, useEffect  } from "react";
import { Link ,useHistory } from "react-router-dom";
//context
import { ProductContext } from "../context/ProductContextProvider";
import { CartContext } from "../context/CartContextProvider";
//helper function
import { hasProduct, ProductNumber } from "../helper/functions";

const ProductDetails = (props) => {
  const products = useContext(ProductContext);
  const [state, dispatch] = useContext(CartContext);
  let history = useHistory();
  const id = +props.match.params.id;
  let product = products[id - 1];
  useEffect(() => {
    if (products.length) {
      !products.find((item) =>item.id === id) && history.push("/product");;
    }
  });
  return (
    <div>
      <img style={{ width: "200px" }} src={product?.image} alt="" />
      <h3>{product?.category}</h3>
      <h3>{product?.title}</h3>
      <p>{product?.price}$</p>
      <p>{product?.description}</p>
      <div>
        <Link to="/product">back to shop</Link>
        <div>
          {hasProduct(state.cartList, product?.id) ? (
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: product })}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch({ type: "ADD", payload: product })}>
              add to cart
            </button>
          )}
          {ProductNumber(state.cartList, product?.id) === 1 && (
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: product })}
            >
              remove
            </button>
          )}
          {ProductNumber(state.cartList, product?.id) > 1 && (
            <button
              onClick={() => dispatch({ type: "DECREASE", payload: product })}
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
