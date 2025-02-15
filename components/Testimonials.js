import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Alice", review: "Beautiful plants and fast delivery!", image: "/images/user1.jpg" },
  { id: 2, name: "John", review: "Quality plants, highly recommended!", image: "/images/user2.jpg" },
  { id: 3, name: "Emma", review: "Amazing service, my plants arrived fresh!", image: "/images/user3.jpg" },
  { id: 4, name: "Michael", review: "Great customer service and healthy plants!", image: "/images/user4.jpg" },
  { id: 5, name: "Sophia", review: "Very satisfied with my plant purchase!", image: "/images/user5.jpg" },
  { id: 6, name: "Daniel", review: "Fresh and beautiful plants, will buy again!", image: "/images/user6.jpg" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-refresh testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-16 text-center bg-gray-100"
    >
      <h2 className="text-3xl font-bold text-green-700 mb-8">What Our Customers Say</h2>

      {/* Testimonial Card */}
      <motion.div
        key={testimonials[currentIndex].id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center max-w-lg mx-auto transform transition hover:scale-105"
      >
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full mb-4" />
        <p className="text-lg italic">&quot;{testimonials[currentIndex].review}&quot;</p>
        <h3 className="mt-4 font-semibold text-green-700">- {testimonials[currentIndex].name}</h3>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
