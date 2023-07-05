/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { title, imageUrl, price, handleDelete, id } = props;

  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        className="h-6 w-6 text-black-600 cursor-pointer"
        onClick={() => handleDelete(id)}
      />
    );
  }

  return (
    <div className="flex justify-between items center mb-3 bg-white rounded-lg">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-50">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
