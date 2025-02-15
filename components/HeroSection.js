import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // Import animations
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/images/hero-bg1.jpg",
  "/images/hero-bg2.jpg",
  "/images/hero-bg3.jpg",
];

const HeroSection = () => {
  return (
    <div className="relative h-[35vh] md:h-[45vh] lg:h-[55vh]">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        loop={true}
        speed={1500}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts hidden and lower
        animate={{ opacity: 1, y: 0 }} // Moves up and fades in
        transition={{ duration: 1, delay: 0.5 }} // Smooth animation with slight delay
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 p-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Bring Nature Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl mb-6"
        >
          Explore a variety of fresh and beautiful plants for your home & office.
        </motion.p>
        <Link href="/shop">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Shop Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
