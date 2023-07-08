import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../Utils";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredItems = context.cartItems.filter((item) => item.id !== id);
    context.setCartItems(filteredItems);
  };
  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartItems,
      totalProducts: context.cartItems.length,
      totalPrice: totalPrice(context.cartItems),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartItems([]);
    context.setSearchByTitle(null);
    context.closeCheckout();
  };

  return (
    <aside
      className={`${
        context.isCheckoutOpen ? "flex" : "hidden"
      } flex flex-col fixed right-0 top-20 border border-black rounded-lg bg-gray-100 w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center py-2 px-4">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black-600 cursor-pointer"
            onClick={() => context.closeCheckout()}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll pb-8">
        {context.cartItems.map((item) => (
          <OrderCard
            title={item.title}
            imageUrl={item.images[0]}
            price={item.price}
            key={item.id}
            id={item.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 sticky bottom-0 p-4">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl mb-2">
            ${totalPrice(context.cartItems)}
          </span>
        </p>
        <Link to="/my-order/last">
          <button
            className="bg-black text-white w-full rounded-lg p-2"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
