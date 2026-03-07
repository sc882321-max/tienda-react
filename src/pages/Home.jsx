import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

const limit = 8;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const skip = (page - 1) * limit;

    const url = search
      ? `https://dummyjson.com/products/search?q=${search}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
  }, [page, search]);

  return (
    <div>
      <SearchBar setSearch={setSearch} setPage={setPage} />
      <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight">Productos Disponibles</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!search && (
        <Pagination
          total={total}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default Home;