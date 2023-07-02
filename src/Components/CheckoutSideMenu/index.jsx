import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.isCheckoutOpen);

  return (
    <aside
      className = {`${
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
    </aside>
  );
};

export default CheckoutSideMenu;
