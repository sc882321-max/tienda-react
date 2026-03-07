import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-2xl transition duration-300 bg-white">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-44 w-full object-contain bg-gray-100 p-2"
      />

      <h2 className="font-bold mt-3 text-gray-800 line-clamp-2">{product.title}</h2>

      <p className="text-green-600 font-semibold text-lg mt-1">${product.price}</p>
      <div className="flex justify-between mt-3">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 text-center bg-blue-500 text-white py-1 rounded hover:bg-blue-700 transition"
        >
          Ver detalle
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-green-500 text-white py-1 rounded hover:bg-green-700 transition"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;