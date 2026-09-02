import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularFoods from "./components/PopularFoods";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <PopularFoods />
      <FeaturedRestaurants />
      <WhyChooseUs />
      <HowItWorks />
      <Offers />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;