import Layout from "../../Components/Layout";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const lastOrder = context.order?.slice(-1)[0];

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
      My Order
      {displayOrder()}
    </Layout>
  );
}

export default MyOrder;
