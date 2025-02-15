import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "254757086742";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    };

    window.addEventListener("cartUpdated", loadCart);
    loadCart();

    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  const increaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * item.quantity, 0);
  };

  // Checkout & Redirect to WhatsApp
  const checkoutWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    let message = "🛒 *Cart Items:*\n";
    cart.forEach((item) => {
      message += `\n🌿 *${item.name}*\n💲 Price: ${item.price}\n📦 Quantity: ${item.quantity}\n`;
    });

    message += `\n💰 *Total: $${getTotalPrice().toFixed(2)}*\n\nI would like to place this order.`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10"
    >
      <h2 className="text-4xl font-bold text-green-700 mb-8 flex items-center gap-3">
        <FaShoppingCart /> Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty. Add some plants! 🌿</p>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          {/* Warning Message */}
          <div className="bg-yellow-200 text-yellow-800 p-4 rounded-md mb-6">
            <p className="font-semibold">⚠️ Important Information:</p>
            <ul className="list-disc list-inside text-sm mt-2">
              <li>Orders are only accepted on WhatsApp.</li>
              <li>Confirm the order in WhatsApp.</li>
              <li>Only pay when you receive the plants.</li>
              <li>Thank you! Looking forward to shopping with you again. 🌿</li>
            </ul>
          </div>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <span>{item.name}</span>
              <div className="flex items-center">
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-l">
                  <FaMinus />
                </button>
                <span className="mx-3 font-semibold">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-r">
                  <FaPlus />
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Cart Summary & Checkout */}
          <div className="mt-6 p-4 bg-gray-200 rounded-lg flex flex-col sm:flex-row justify-between items-center">
            <h3 className="text-xl font-semibold">Total: ${getTotalPrice().toFixed(2)}</h3>
            <button
              onClick={checkoutWhatsApp}
              className="mt-4 sm:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-bold flex items-center gap-2"
            >
              <FaWhatsapp /> Checkout on WhatsApp
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Cart;
