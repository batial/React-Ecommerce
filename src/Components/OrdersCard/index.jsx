/* eslint-disable react/prop-types */
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts , date } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg  p-4 w-80">
      <div className="flex justify-between w-full">
        <div className="flex flex-col font-light">
          <span>{date}</span>
          <span>{totalProducts} articles</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
