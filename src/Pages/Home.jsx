

import Hero from "../components/Hero";
import Stats from "../components/Stats";

import FeaturedProperties from  "../components/FeaturedProperties";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact_Action from "../components/Contact_Action";
import Footer from "../components/Footer";



function Home() {
  return (
    <>
      <Hero />
      <Stats/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <Testimonials/>
      <Contact_Action/>
      <Footer/>


    </>
  );
}

export default Home;