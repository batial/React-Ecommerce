import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isItemDetailOpen ? "flex" : "hidden"
      } flex flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center py-2 px-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black-600 cursor-pointer"
            onClick={() => context.closeItemDetail()}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg "
          src={context.productToShow.images[0]}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col py-1 px-6">
        <span className="font-medium text-2xl">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-light text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
