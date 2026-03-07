import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="text-white shadow-lg bg-slate-900">

      <div className="
      max-w-7xl
      mx-auto
      grid
      grid-cols-2
      md:grid-cols-3
      items-center
      p-4
      md:p-8
      ">

        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">

          <img
            src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png"
            alt="Logo"
            className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 group-hover:rotate-12"
          />

          <h1 className="
          text-lg
          md:text-5xl
          font-black
          tracking-tighter
          bg-gradient-to-r
          from-blue-400
          to-purple-500
          bg-clip-text
          text-transparent
          transition-all
          duration-500
          group-hover:from-purple-500
          group-hover:to-blue-400
          ">
            TIENDA REACT
          </h1>

        </div>
        <div className="hidden md:flex justify-center"></div>

        <div className="flex justify-end items-center gap-4 md:gap-8">

          <Link
            to="/"
            className="
            text-sm
            md:text-2xl
            font-bold
            relative
            after:content-['']
            after:absolute
            after:w-full
            after:scale-x-0
            after:h-[4px]
            after:bottom-0
            after:left-0
            after:bg-blue-400
            after:origin-bottom-right
            after:transition-transform
            after:duration-300
            hover:after:scale-x-100
            hover:after:origin-bottom-left
            ">
            Home
          </Link>

          <Link to="/cart" className="relative group">

            <img
              src="https://cdn-icons-png.flaticon.com/256/5465/5465865.png "
              alt="Carrito"
              className="w-8 h-8 md:w-12 md:h-12 transition-transform group-hover:scale-110"
            />

            {cart.length > 0 && (
              <span className="
              absolute
              -top-1
              -right-1
              bg-red-600
              text-white
              text-[10px]
              md:text-sm
              font-bold
              w-4
              h-4
              md:w-6
              md:h-6
              flex
              items-center
              justify-center
              rounded-full
              border-2
              border-black
              animate-bounce
              ">
                {cart.length}
              </span>
            )}

          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;