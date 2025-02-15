import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }} // Start below
      animate={{ y: 0, opacity: 1 }} // Slide up & fade in
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white py-10 mt-10"
    >
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">PlantShop</h2>
          <p className="mt-2 text-gray-400">Bringing nature closer to you 🌿</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link href="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FiFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FiTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FiInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PlantShop. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
