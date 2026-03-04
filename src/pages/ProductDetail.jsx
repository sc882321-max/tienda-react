import { useParams } from "react-router-dom";
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
    <div className="max-w-4xl mx-auto">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-80 object-cover rounded"
      />

      <h2 className="text-3xl font-bold mt-4">{product.title}</h2>

      <p className="mt-2 text-gray-600">{product.description}</p>

      <p className="text-green-600 text-2xl font-bold mt-4">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetail;