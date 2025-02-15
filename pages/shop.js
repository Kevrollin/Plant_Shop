import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const whatsappNumber = "254757086742";

const plants = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/aloe.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lily.jpg", "/images/lilly.jpg"],
  },
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/aloe.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lilly.jpg", "/images/lilly.jpg"],
  },
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig1.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/monstera1.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lilly.jpg", "/images/lilly.jpg"],
  },
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/aloe.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/zzplant1.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lily.jpg", "/images/lilly.jpg"],
  },
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/aloe.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lily.jpg", "/images/lilly.jpg"],
  },
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/aloe.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lily.jpg", "/images/lilly.jpg"],
  },
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/aloe.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lilly.jpg", "/images/lilly.jpg"],
  },
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: "$25",
    description: "A beautiful indoor plant with large green leaves.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 2,
    name: "Monstera",
    price: "$30",
    description: "Also known as the Swiss cheese plant.",
    images: ["/images/aloe.jpg", "/images/aloe.jpg"],
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: "$20",
    description: "A hardy plant that thrives in low light conditions.",
    images: ["/images/fig.jpg", "/images/fig.jpg"],
  },
  {
    id: 4,
    name: "Rubber Plant",
    price: "$22",
    description: "An elegant plant with thick, glossy leaves.",
    images: ["/images/lily.jpg", "/images/lilly.jpg"],
  },
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const orderOnWhatsApp = (plant) => {
    const message = `I would like to order:\n🌿 *${plant.name}*\n💲 Price: ${plant.price}\n🖼 Image: ${window.location.origin}${plant.images[0]}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const addToCart = (plant) => {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Check if the plant is already in the cart
    const existingItem = storedCart.find((item) => item.id === plant.id);
    if (existingItem) {
      storedCart = storedCart.map((item) =>
        item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      storedCart.push({ ...plant, quantity: 1 });
    }
  
    // Update localStorage and state
    localStorage.setItem("cart", JSON.stringify(storedCart));
    setCart(storedCart);
  
    // Show popup message
    alert(`${plant.name} has been added to your cart!`);
  };
  

  const filteredPlants = plants.filter(
    (plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase()) &&
      (priceFilter ? parseInt(plant.price.replace("$", "")) <= parseInt(priceFilter) : true)
  );

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="py-12 text-center bg-white"
    >
      <h2 className="text-3xl font-bold text-green-700 mt-20 mb-6">Shop Our Plants</h2>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 px-4">
        <input
          type="text"
          placeholder="Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 w-full md:w-1/3 border border-gray-300 rounded-lg"
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Filter by Price</option>
          <option value="20">Up to $20</option>
          <option value="25">Up to $25</option>
          <option value="30">Up to $30</option>
        </select>
      </div>

      {/* Plant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">
        {filteredPlants.map((plant) => (
          <motion.div
            key={plant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * plant.id }}
            className="relative p-4 bg-gray-100 shadow-md rounded-lg text-center transform hover:scale-105 transition"
          >
            {/* View Details Button */}
            <button
              onClick={() => setSelectedPlant(plant)}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm"
            >
              View Details
            </button>

            <img src={plant.images[0]} alt={plant.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-4">{plant.name}</h3>
            <p className="text-green-600 font-bold">{plant.price}</p>

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
            onClick={() => setSelectedPlant(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button onClick={() => setSelectedPlant(null)} className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full">
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

              <h2 className="text-2xl font-bold">{selectedPlant.name}</h2>
              <p className="text-gray-600 mt-2">{selectedPlant.description}</p>
              <p className="text-green-600 font-bold text-lg mt-2">{selectedPlant.price}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Shop;
