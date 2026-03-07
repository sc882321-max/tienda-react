import { useParams,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Cargando...</p>;

  return (
<div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-10 items-center">

  <img
    src={product.thumbnail}
    alt={product.title}
    className="w-full max-h-[400px] object-contain bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-300"
  />

  <div className="text-center">
    <h2 className="text-4xl font-bold text-slate-800 mb-4">
      {product.title}
    </h2>

    <p className="text-gray-600 leading-relaxed mb-4">
      {product.description}
    </p>

    <p className="text-3xl text-emerald-600 font-bold mb-6">
      ${product.price}
    </p>

    <div className="flex gap-20">
      <button
        onClick={() => addToCart(product)}
        className="font-mono font-bold ml-7 bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition"
      >
        Agregar al carrito
      </button>

      <Link
        to="/"
        className="font-mono font-bold ml-6 bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition"
      >
        Volver a productos
      </Link>
    </div>
  </div>

</div>
  );
};

export default ProductDetail;