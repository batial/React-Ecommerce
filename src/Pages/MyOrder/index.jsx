import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last'){
    index = (context.order?.length) - 1
    console.log(index)
  }
  const lastOrder = context.order?.[index];
  console.log(lastOrder)


  function displayOrder() {
    if (lastOrder && lastOrder.products) {
      return (
        <div className="px-6 pb-8">
          {lastOrder.products.map((item) => (
            <OrderCard
              title={item.title}
              imageUrl={item.images[0]}
              price={item.price}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      );
    } else {
      return <div>You do not have any order yet </div>;
    }
  }

  return (
    <Layout>
      <div className="flex w-80 justify-center items-center relative mb-4">
        <Link to="/my-orders" className="absolute left-0 ">
          <ChevronLeftIcon className="h-6 w-6 text-black-600 cursor-pointer" />
        </Link>
        <h1>My order</h1>
      </div>
      {displayOrder()}
    </Layout>
  );
}

export default MyOrder;
