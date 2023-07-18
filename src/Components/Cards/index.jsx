import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  //open item details , and set the text on the details
  const showProduct = (productDetail) => {
    context.openItemDetail();
    context.setProductToShow(productDetail);
  };

  const addItemsToCart = (event, itemData) => {
    event.stopPropagation();
    context.openCheckout();
    context.setCartItems([...context.cartItems, itemData]);
  };

  const renderIcon = (id) => {
    const isInCard =
      context.cartItems.filter((item) => item.id === id).length > 0;

    //If the user doesn't log in, they can't add items.
    if (!context.isLoggedIn) {
      return;
    }

    // If the user already has an item, they can't go back to buy it.
    if (isInCard) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center bg-black/50 text-white w-6 h-6 rounded-full m-2 pb-0.5 ">
          <CheckIcon className="h-4 w-4 text-black-600" />
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-0.5 "
          onClick={(event) => {
            addItemsToCart(event, data);
          }}
        >
          <PlusIcon className="h-4 w-4 text-black-600" />
        </button>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
