import { motion } from "framer-motion";
import { FaShieldAlt, FaMoneyBillWave, FaTools } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";

import supportImg from "../../assets/images/support.png";

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleUp,
} from "../../utils/animation";

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-200 py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* section heading */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-200">
            Professional Excellence
          </h2>

          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Reliability isn't just a word; it's our technical standard.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* card 1 */}
          <motion.div
            {...fadeLeft}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="bg-white border border-gray-200 p-8 min-h-65 hover:shadow-xl hover:border-primary-200 transition duration-300"
          >
            <div className="mb-6">
              <FaShieldAlt className="text-3xl text-primary-200" />
            </div>

            <h3 className="text-3xl font-semibold text-black mb-5">
              Fully Licensed & Insured
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              Every technician is rigorously vetted and highly trained to handle
              complex industrial and residential systems.
            </p>
          </motion.div>

          {/* middle card */}
          <motion.div
            {...scaleUp}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="bg-white border border-gray-200 p-8 hover:shadow-xl hover:border-primary-200 transition duration-300"
          >
            <div className="mb-6">
              <LuClock3 className="text-3xl text-primary-200" />
            </div>

            <h3 className="text-3xl font-semibold text-black mb-5">
              24/7 Emergency Support
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Plumbing crises don't wait for business hours. Our response teams
              are stationed across the city to ensure rapid deployment when
              every minute counts.
            </p>

            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src={supportImg}
              alt="support"
              className="w-full h-80 object-cover rounded-xs grayscale hover:grayscale-0 transition duration-500"
            />
          </motion.div>

          {/* card 3 */}
          <motion.div
            {...fadeRight}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
            className="bg-white border border-gray-200 p-8 min-h-65 hover:shadow-xl hover:border-primary-200 transition duration-300"
          >
            <div className="mb-6">
              <FaMoneyBillWave className="text-3xl text-primary-200" />
            </div>

            <h3 className="text-3xl font-semibold text-black mb-5">
              Transparent Pricing
            </h3>

            <p className="text-gray-600 leading-relaxed text-lg">
              No hidden fees or surprise surcharges. We provide clear, itemized
              estimates before any work begins on your property.
            </p>
          </motion.div>
        </div>

        {/* bottom banner */}
        <motion.div
          {...fadeUp}
          className="mt-8 bg-primary-200 text-white px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Our Quality Guarantee
            </h3>

            <p className="text-lg text-gray-100 leading-relaxed max-w-2xl">
              We stand behind our craftsmanship. If the repair doesn't meet our
              strict precision standards, we'll make it right at no extra cost.
            </p>
          </div>

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <FaTools className="text-6xl text-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;