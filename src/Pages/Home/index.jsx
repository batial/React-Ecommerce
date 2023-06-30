import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Cards";
import { apiUrl } from "../../api";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const [items, setItem] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error(`Algo salió mal: ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg ">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
