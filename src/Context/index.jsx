import { createContext } from "react";
import { useState } from "react";

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isItemDetailOpen, setItemDetailOpen] = useState(false);
  const openItemDetail = () => {
    setItemDetailOpen(true);
  };
  const closeItemDetail = () => {
    setItemDetailOpen(false);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isItemDetailOpen,
        openItemDetail,
        closeItemDetail,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
