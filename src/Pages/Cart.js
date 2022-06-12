import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

import CartProduct from "../component/CartProduct";
const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div>
      {state.cartList.map((product) => (
        <CartProduct
          key={product.id}
          data={product}
          dispatch={dispatch}
          state={state}
        />
      ))}
      {state.itemCount > 0 && (
        <div>
          <h3>number of items: {state.itemCount} </h3>
          <h3>total price: {state.totalPrise}$ </h3>
          <button onClick={() => dispatch({ type: "PAYOUT", payload: null })}>
            buy
          </button>
          <button onClick={() => dispatch({ type: "CLEAR", payload: null })}>
            clear
          </button>
        </div>
      )}

      {state.itemCount === 0 && !state.checkout && (
        <div>
          <h3>need item? goto shop</h3>
          <Link to="/product">shop</Link>
        </div>
      )}
      {state.itemCount === 0 && state.checkout && (
        <div>
          <h3>thanks for buying !</h3>
          <Link to="/product">shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
