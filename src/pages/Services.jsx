import { motion } from "framer-motion";
import { FaSearch, FaHotTub, FaPumpSoap, FaTools } from "react-icons/fa";

import { fadeUp } from "../utils/animation";
import EmergencyBanner from "../components/common/EmergencyBanner";

const services = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Leak Detection & Repair",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    description:
      "Advanced non-invasive thermal imaging and acoustic sensors to pinpoint hidden leaks before they compromise your structure.",
    services: [
      {
        name: "Minor Pipe Repair",
        price: "$150 - $350",
      },
      {
        name: "Slab Leak Detection",
        price: "$250 - $500",
      },
    ],
  },

  {
    id: 2,
    icon: <FaHotTub />,
    title: "Water Heater Installation",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1200&auto=format&fit=crop",
    description:
      "Full-spectrum service for tankless and traditional systems. High-efficiency upgrades that reduce energy costs and ensure consistent flow.",
    services: [
      {
        name: "Standard Tank Install",
        price: "$800 - $1,500",
      },
      {
        name: "Tankless Conversion",
        price: "$2,500+",
      },
    ],
  },

  {
    id: 3,
    icon: <FaPumpSoap />,
    title: "Clogged Drain Cleaning",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1200&auto=format&fit=crop",
    description:
      "Industrial-strength hydro-jetting and snake services for persistent blockages in kitchen, bath, and main lines.",
    services: [
      {
        name: "Standard Snaking",
        price: "$99 - $250",
      },
      {
        name: "Hydro-Jetting",
        price: "$350 - $800",
      },
    ],
  },

  {
    id: 4,
    icon: <FaTools />,
    title: "Sewer Line Repair",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1200&auto=format&fit=crop",
    description:
      "Comprehensive trenchless and traditional sewer line replacement. Video inspections included to verify integrity.",
    services: [
      {
        name: "Video Inspection",
        price: "$150 - $300",
      },
      {
        name: "Trenchless Repair",
        price: "$3,500+",
      },
    ],
  },
];

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-300 p-5 hover:border-primary-200 hover:shadow-xl transition duration-300"
    >
      {/* top */}
      <div className="flex items-center gap-3 mb-5">
        <div className="text-primary-200 text-lg">{service.icon}</div>

        <h3 className="text-2xl font-bold text-black">{service.title}</h3>
      </div>

      {/* image */}
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={service.image}
          alt={service.title}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* description */}
      <p className="text-gray-600 leading-relaxed mt-5 text-sm">
        {service.description}
      </p>

      {/* pricing */}
      <div className="mt-6 space-y-3">
        {service.services.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm border-b border-gray-200 pb-2"
          >
            <span className="font-semibold text-gray-700">{item.name}</span>

            <span className="text-primary-200 font-bold">{item.price}</span>
          </div>
        ))}
      </div>

      {/* actions */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button className="btn rounded-none border-primary-200 bg-white text-primary-200 hover:bg-primary-200 hover:text-white">
          Learn More
        </button>

        <button className="btn rounded-none border-none bg-primary-200 text-white hover:bg-primary-200/90">
          Get a Quote
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="bg-neutral-200 py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-360 mx-auto">
        {/* heading */}
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Precision Plumbing Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
            Expert diagnostics and professional repairs tailored for modern
            infrastructure. Transparent pricing, 24/7 reliability, and licensed
            mastery in every task.
          </p>
        </motion.div>

        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              {...fadeUp}
              transition={{
                duration: 0.7,
                delay: idx * 0.2,
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        {/* emergency banner */}
        <EmergencyBanner />
      </div>
    </section>
  );
};

export default Services;
