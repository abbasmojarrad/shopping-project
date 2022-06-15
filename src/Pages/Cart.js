import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";

import CartProduct from "../component/CartProduct";
//css
import styles from "../component/css/cart.module.css";
const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        {state.cartList.map((product) => (
          <CartProduct
            key={product.id}
            data={product}
            dispatch={dispatch}
            state={state}
          />
        ))}
      </div>
      {state.itemCount > 0 && (
        <div className={styles.payment}>
          <h3 className={styles.number}>number of items: {state.itemCount} </h3>
          <h3 className={styles.totalprice}>total price: {state.totalPrise} $ </h3>
          <div className={styles.payment__btns}>
            <button className={styles.clear__btn} onClick={() => dispatch({ type: "CLEAR", payload: null })}>
              clear
            </button>
            <button className={styles.buy__btn} onClick={() => dispatch({ type: "PAYOUT", payload: null })}>
              checkout
            </button>
          </div>
        </div>
      )}

      {state.itemCount === 0 && !state.checkout && (
        <div  className={styles.buyitem}>
          <h3>need item? goto shop</h3>
          <Link to="/product">shop</Link>
        </div>
      )}
      {state.itemCount === 0 && state.checkout && (
        <div  className={styles.checkout}>
          <h3>thanks for buying !</h3>
          <Link to="/product">shop</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
