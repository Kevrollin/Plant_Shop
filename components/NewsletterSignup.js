import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing! 🌿");
      setEmail("");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <section className="py-16 bg-green-700 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Subscribe to Our Newsletter
      </motion.h2>
      <p className="text-lg mb-6">Get the latest plant care tips and exclusive discounts.</p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row justify-center items-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-md text-black w-72"
        />
        <button
          type="submit"
          className="bg-white text-green-700 font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition"
        >
          Subscribe
        </button>
      </motion.form>

      {message && <p className="mt-4 text-lg">{message}</p>}
    </section>
  );
};

export default NewsletterSignup;
