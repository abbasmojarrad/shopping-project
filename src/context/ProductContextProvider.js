import React, { createContext, useState, useEffect } from "react";
import {getData} from "../services/api";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      setProduct(await getData());
    })();
  }, []);
  

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
