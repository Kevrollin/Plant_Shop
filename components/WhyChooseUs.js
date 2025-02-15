import { motion } from "framer-motion";
import { FaLeaf, FaTruck, FaShieldAlt, FaSmile } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-12 text-center bg-white"
    >
      <h2 className="text-3xl font-bold text-green-700 mb-6">Why Choose Us?</h2>
      <p className="text-lg text-gray-600 mb-8">Discover why thousands trust us for their plant needs.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-6">
        {/* High-Quality Plants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center"
        >
          <FaLeaf className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">High-Quality Plants</h3>
          <p className="text-gray-600 mt-2">We provide healthy, well-nurtured plants for your home.</p>
        </motion.div>

        {/* Fast & Reliable Delivery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center"
        >
          <FaTruck className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Fast & Reliable Delivery</h3>
          <p className="text-gray-600 mt-2">We deliver plants safely and quickly to your doorstep.</p>
        </motion.div>

        {/* Secure Payments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center"
        >
          <FaShieldAlt className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Secure Payments</h3>
          <p className="text-gray-600 mt-2">Your payments are safe with end-to-end encryption.</p>
        </motion.div>

        {/* Happy Customers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-6 bg-gray-100 shadow-lg rounded-lg flex flex-col items-center"
        >
          <FaSmile className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Thousands of Happy Customers</h3>
          <p className="text-gray-600 mt-2">Join our community of satisfied plant lovers.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
