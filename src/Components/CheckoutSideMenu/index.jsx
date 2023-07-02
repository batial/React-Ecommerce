import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredItems = context.cartItems.filter((item) => item.id !== id);
    console.log(filteredItems);
    context.setCartItems(filteredItems);
    console.log(context.cartItems);
  };

  return (
    <aside
      className={`${
        context.isCheckoutOpen ? "flex" : "hidden"
      } flex flex-col fixed right-0 top-20 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}
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
      <div className="px-6 overflow-y-scroll">
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
    </aside>
  );
};

export default CheckoutSideMenu;
