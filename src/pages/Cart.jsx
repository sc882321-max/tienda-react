import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 p-8 bg-gray-50 rounded-2xl max-w-2xl mx-auto shadow-sm border border-gray-100">
        <span className="text-6xl mb-4">🛒</span>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 text-center">¡Parece que aún no has agregado nada! Explora nuestros productos y encuentra algo que te guste.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10 border border-gray-100">
      <h2 className=" text-emerald-500 text-3xl font-bold border-b-2 border-gray-100 pb-4 mb-6 tracking-tight">
        Tu Carrito <span className="text-indigo-500 text-xl font-normal">({cart.length} items)</span>
      </h2>

      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white hover:bg-slate-50 border border-gray-100 rounded-xl shadow-sm transition-all duration-200 group"
          >
            
            <div className="flex items-center gap-5 w-full sm:w-auto">

              <img 
                src={item.thumbnail || "https://via.placeholder.com/80"} 
                alt={item.title} 
                className="w-20 h-20 object-contain bg-gray-50 rounded-lg p-2 border border-gray-200"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-emerald-600 font-semibold text-lg mt-1">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="mt-4 sm:mt-0 text-red-400 hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Eliminar
            </button>
          </div>
        ))}

      </div>
      <div className="mt-8 pt-6 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 hidden md:block">
          <p> El total de sus Productos es:</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
          <div className="text-right">
            <span className="text-gray-600 font-medium mr-3">Total:</span>
            <span className="text-3xl font-black text-gray-800 font-mono">
              ${Number(total).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;