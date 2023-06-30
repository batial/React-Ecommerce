import { createContext } from "react";
import { useState } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  // shopping cart - Items counter
  const [count, setCount] = useState(0);

  //product detail - open / close
  const [isItemDetailOpen, setItemDetailOpen] = useState(false);
  const openItemDetail = () => {
    setItemDetailOpen(true);
  };
  const closeItemDetail = () => {
    setItemDetailOpen(false);
  };

  //product detail - Show product
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isItemDetailOpen,
        openItemDetail,
        closeItemDetail,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
