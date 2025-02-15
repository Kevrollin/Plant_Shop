import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, description: "Aloe Vera is great for skincare.", images: ["/images/aloe.jpg", "/images/aloe.jpg"] },
  { id: 2, name: "Snake Plant", price: 15, description: "A low-maintenance indoor plant.", images: ["/images/snake.jpg", "/images/snake.jpg"] },
  { id: 3, name: "Peace Lily", price: 20, description: "Purifies air and looks beautiful.", images: ["/images/lily.jpg", "/images/lily.jpg"] },
];

const whatsappNumber = "254757086742";

const FeaturedPlants = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);

  const addToCart = (plant) => {
    setCart((prevCart) => [...prevCart, plant]);
  };

  const orderOnWhatsApp = (plant) => {
    const message = `I would like to order:\n🌿 *${plant.name}*\n💲 Price: $${plant.price}\n🖼 Image: ${window.location.origin}${plant.images[0]}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase()) &&
    (priceFilter ? plant.price <= Number(priceFilter) : true)
  );

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="py-12 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Featured Plants</h2>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 px-4">
        <input
          type="text"
          placeholder="Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-full md:w-1/3 border border-gray-300 rounded-lg"
        />
        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className="p-3 border border-gray-300 rounded-lg">
          <option value="">Filter by Price</option>
          <option value="10">Up to $10</option>
          <option value="15">Up to $15</option>
          <option value="20">Up to $20</option>
        </select>
      </div>

      {/* Plant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-4">
        {filteredPlants.map((plant) => (
          <motion.div key={plant.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * plant.id }} className="relative p-6 bg-white shadow-md rounded-lg text-center">
            {/* View Details Button */}
            <button onClick={() => setSelectedPlant(plant)} className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm">
              View Details
            </button>

            <img src={plant.images[0]} alt={plant.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">{plant.name}</h3>
            <p className="text-green-600 font-bold">${plant.price}</p>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              <button onClick={() => orderOnWhatsApp(plant)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Order on WhatsApp
              </button>
              <button onClick={() => addToCart(plant)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

{/* Modal for Viewing Plant Details */}
<AnimatePresence>
  {selectedPlant && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={() => setSelectedPlant(null)} // Close when clicking outside
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button (Top Right Corner) */}
        <button
          onClick={() => setSelectedPlant(null)}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
        >
          ✕
        </button>

        {/* Image Carousel */}
        <Swiper modules={[Autoplay, Navigation, Pagination]} autoplay={{ delay: 3000 }} loop={true} navigation pagination className="w-full h-60 mb-4">
          {selectedPlant.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={selectedPlant.name} className="w-full h-full object-cover rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Plant Info */}
        <h2 className="text-2xl font-bold">{selectedPlant.name}</h2>
        <p className="text-gray-600 mt-2">{selectedPlant.description}</p>
        <p className="text-green-600 font-bold text-lg mt-2">${selectedPlant.price}</p>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button onClick={() => orderOnWhatsApp(selectedPlant)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            Order on WhatsApp
          </button>
          <button onClick={() => addToCart(selectedPlant)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.section>
  );
};

export default FeaturedPlants;
