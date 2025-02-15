import HeroSection from "../components/HeroSection";
import FeaturedPlants from "../components/FeaturedPlants";
import BestSellers from "../components/BestSellers";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews";
import NewsletterSignup from "../components/NewsletterSignup";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Plants */}
      <FeaturedPlants />

      {/* Best Sellers */}
      <BestSellers />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </motion.div>
  );
}
