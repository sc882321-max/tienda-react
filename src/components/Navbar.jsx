import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">TIENDA REACT</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/cart" className="hover:text-gray-300">
          Carrito ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;