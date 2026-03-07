import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-2 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-44 w-full object-contain bg-white-50 p-2 hover:scale-125 transition"
      />

      <h2 className="font-bold mt-3 text-gray-800 line-clamp-2 text-center">{product.title}</h2>

      <p className="text-gray-600 text-sm mt-1 line-clamp-3">{product.description}</p>

      <p className="text-emerald-600 font-bold text-lg mt-1">${product.price}</p>
      <div className="flex justify-between mt-auto">
        <Link
          to={`/product/${product.id}`}
          className="font-mono flex-1 bg-indigo-500 text-white text-center  py-1 rounded hover:bg-indigo-600 transition hover:scale-105"
        >
          Ver detalle
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="font-mono flex-1 bg-emerald-600 text-white py-1 rounded hover:bg-emerald-700 transition hover:scale-105"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;