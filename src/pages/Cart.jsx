import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center text-2xl mt-10">
        Tu carrito está vacío 🛒
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Carrito</h2>

      {cart.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border p-4 mb-3 rounded shadow"
        >
          <div>
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-green-600">${item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="text-right mt-6">
        <h3 className="text-2xl font-bold">
          Total: ${total}
        </h3>
      </div>
    </div>
  );
};

export default Cart;