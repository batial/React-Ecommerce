import { createContext } from "react";
import { useState, useEffect } from "react";
import { apiUrl } from "../api";

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

  //shopping cart - order
  const [order, setOrder] = useState([]);

  //get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Algo salió mal: ${error}`);
      }
    };

    fetchData();
  }, []);

  //get products by title / category
  const [searchByTitle, setSearchByTitle] = useState(null);

  const [searchByCategory, setSearchByCategory] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((items) =>
      items.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((items) =>
      items.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  useEffect(() => {
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === "BY_TITLE") {
        return filteredItemsByTitle(items, searchByTitle);
      }
      if (searchType === "BY_CATEGORY") {
        return filteredItemsByCategory(items, searchByCategory);
      }
      if (searchType === "BY_TITLE_AND_CATEGORY") {
        return filteredItemsByCategory(items, searchByCategory).filter((item) =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );
      }
      if (!searchType) {
        return items;
      }
    };

    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    }
    if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
  }, [items, searchByTitle, searchByCategory]);

  //user Logged detector
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);


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
        closeCheckout,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
