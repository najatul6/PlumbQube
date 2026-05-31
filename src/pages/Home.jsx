import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUse";

const Home = () => {
  return (
    <div className="mt-16 md:mt-18">
      {/* hero section */}
      <Hero />
      {/* why choose us */}
      <WhyChooseUs />
      {/* services */}
      <Services />
      {/* testimonials */}
      <Testimonials />
      {/* call to action */}
      <CTA />
    </div>
  );
};

export default Home;
