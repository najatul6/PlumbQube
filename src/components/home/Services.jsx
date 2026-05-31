import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

import leakImg from "../../assets/images/leak.png";
import heaterImg from "../../assets/images/heater.png";
import sewerImg from "../../assets/images/sewer.png";

import { fadeUp } from "../../utils/animation";

const services = [
  {
    title: "Advanced Leak Detection",
    description:
      "Non-invasive thermal imaging and acoustic sensors to find hidden leaks before they cause structural damage.",
    price: "From $149",
    image: leakImg,
  },
  {
    title: "Water Heater Solutions",
    description:
      "Full-service installation and maintenance for tankless and traditional units to ensure consistent performance.",
    price: "Free Estimates",
    image: heaterImg,
  },
  {
    title: "Drain & Sewer Clearing",
    description:
      "High-pressure hydro-jetting and camera inspections to resolve complex blockages and maintain line integrity.",
    price: "From $199",
    image: sewerImg,
  },
];

const Services = () => {
  return (
    <section className="bg-neutral-200 py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <motion.div
          {...fadeUp}
          className="flex flex-col items-center text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Expert Services
          </h2>

          <div className="w-24 h-1 bg-primary-200 mt-4 rounded-full" />
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              transition={{
                duration: 0.7,
                delay: idx * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-primary-200 transition duration-300"
            >
              {/* image */}
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-3xl font-semibold text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="border-t border-gray-200 pt-5 flex items-center justify-between">
                  <span className="text-primary-200 font-medium text-lg">
                    {service.price}
                  </span>

                  <button className="flex items-center gap-2 text-primary-200 font-medium hover:gap-3 transition-all duration-300 cursor-pointer">
                    Book Now
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;