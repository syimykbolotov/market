import React, { useEffect, useState } from "react";
import { ShopContext } from ".";

const RootContext = ({ children }) => {
  const [productUrl, setProductUrl] = useState("hello");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productAll, setProductAll] = useState([]);
  const [productOne, setProductOne] = useState([]);
  const getProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || []
    setProductAll(res)
  }
  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setProductOne(res)
  }
  useEffect(() => {
    getProduct()
    getBasket()
  }, [])
  return (
    <ShopContext.Provider
      value={{
        productUrl,
        productName,
        productPrice,
        productAll,
        productOne,
        setProductName,
        setProductPrice,
        setProductUrl,
        setProductAll,
        setProductOne,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default RootContext;
