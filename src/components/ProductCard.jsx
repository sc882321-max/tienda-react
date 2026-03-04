import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-xl transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 w-full object-cover"
      />

      <h2 className="font-bold mt-2">{product.title}</h2>

      <p className="text-green-600 font-semibold">${product.price}</p>

      <div className="flex justify-between mt-3">
        <Link
          to={`/product/${product.id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Ver detalle
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;