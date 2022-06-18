import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
//component
import CartProduct from "../component/CartProduct";
import EmptyCartDetail from "../component/EmptyCartDetail";
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
          <h3 className={styles.totalprice}>
            total price: {state.totalPrise} ${" "}
          </h3>
          <div className={styles.payment__btns}>
            <button
              className={styles.clear__btn}
              onClick={() => dispatch({ type: "CLEAR", payload: null })}
            >
              clear
            </button>
            <button
              className={styles.buy__btn}
              onClick={() => dispatch({ type: "PAYOUT", payload: null })}
            >
              checkout
            </button>
          </div>
        </div>
      )}

      {state.itemCount === 0 && !state.checkout && (
        <EmptyCartDetail
          title="need item? goto shop"
          classlist={styles.buyitem}
        />
      )}
      {state.itemCount === 0 && state.checkout && (
        <EmptyCartDetail
          title="thanks for buying !"
          classlist={styles.checkout}
        />
      )}
    </div>
  );
};

export default Cart;
