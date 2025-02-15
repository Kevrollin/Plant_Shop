import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // Import animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  return (
    <nav className="bg-green-700 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          🌿 Plant Shop
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/shop" className="hover:text-gray-300 transition">Shop</Link>
          <Link href="/cart" className="hover:text-gray-300 transition flex items-center">
            Cart <FiShoppingCart className="ml-2" size={20} />
            {cartCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-green-800 p-4 absolute w-full left-0 top-[60px] shadow-lg"
          >
            <Link href="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/shop" className="block py-2" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link href="/cart" className="block py-2 flex items-center" onClick={() => setIsOpen(false)}>
              Cart <FiShoppingCart className="ml-2" size={20} />
              {cartCount > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
