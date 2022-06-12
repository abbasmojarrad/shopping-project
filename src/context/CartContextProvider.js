import React, { createContext, useReducer } from "react";
import { totalCount } from "../helper/functions";

const initialState = {
  cartList: [],
  itemCount: 0,
  totalPrise: 0,
  checkout: false,
};
const reduceHandler = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.cartList.find((product) => product.id === action.payload.id)) {
        state.cartList.push({ ...action.payload, number: 1 });
      }
      return { ...state, ...totalCount(state.cartList) };

    case "REMOVE":
      const newList = state.cartList.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, ...totalCount(newList),cartList: newList,  };

    case "INCREASE":
      state.cartList.find((product) => {
        if (product.id === action.payload.id) {
          product.number++;
          return true;
        }
      });
      return { ...state, ...totalCount(state.cartList) };

    case "DECREASE":
      state.cartList.find((product) => {
        if (product.id === action.payload.id) {
          product.number--;
          return true;
        }
      });
      return { ...state, ...totalCount(state.cartList) };

    case "PAYOUT":
      return {
        cartList: [],
        itemCount: 0,
        totalPrise: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        cartList: [],
        itemCount: 0,
        totalPrise: 0,
        checkout: false,
      };

    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduceHandler, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
