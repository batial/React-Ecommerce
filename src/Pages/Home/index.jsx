import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Cards";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card data={item} key={item.id} />
      ));
    } else {
      return <div> Not results found. </div>;
    }
  };

  return (
    <Layout>
      <h1 className="font-medium text-xl">Home</h1>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg ">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
