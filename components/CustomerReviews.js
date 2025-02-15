import { motion } from "framer-motion";

const reviews = [
  { id: 1, name: "Alice", review: "Beautiful plants and fast delivery!" },
  { id: 2, name: "John", review: "Quality plants, highly recommended!" },
  { id: 3, name: "Emma", review: "Amazing service, my plants arrived fresh!" },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 text-center bg-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-green-700 mb-8"
      >
        What Our Customers Say
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 * review.id }}
            className="bg-white shadow-lg p-6 rounded-lg"
          >
            <p className="text-lg italic">&quot;{review.review}&quot;</p>
            <h3 className="mt-4 font-semibold">- {review.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
