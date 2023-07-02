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

  //checkout side menu - open / close
  const [isCheckoutOpen, setisCheckoutOpen] = useState(false);
  const openCheckout = () => {
    setisCheckoutOpen(true);
  };
  const closeCheckout = () => {
    setisCheckoutOpen(false);
  };

  //product detail - Show product
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: [],
  });

  //shopping cart - add items to cart
  const [cartItems, setCartItems] = useState([]);

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
        cartItems,
        setCartItems,
        isCheckoutOpen,
        openCheckout,
        closeCheckout
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
