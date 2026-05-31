import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

import heroBg from "../../assets/images/heroBg.png";
import { fadeLeft, fadeUp } from "../../utils/animation";

const Hero = () => {
  return (
    <section className="relative min-h-screen md:min-h-[calc(100dvh-60px)] w-full overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary-200/95 via-primary-200/70 to-black/40" />

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 min-h-screen md:min-h-[calc(100dvh-60px)] flex flex-col justify-center">
        <motion.div
          {...fadeLeft}
          className="max-w-2xl pt-28 md:pt-20 pb-36 md:pb-28"
        >
          {/* heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Precision Plumbing When You Need It Most.
          </h1>

          {/* description */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
            Expert leak repairs, water heater installations, and emergency
            drainage services. Licensed professionals available 24/7.
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button className="btn border-none rounded-xs py-6 md:py-8 bg-tertiary-200 text-black hover:bg-neutral-200 hover:scale-105 transition-all duration-300 px-8">
              <FaTools />
              Request Emergency Service
            </button>

            <button className="btn btn-outline rounded-xs border-white py-6 md:py-8 text-white hover:bg-white hover:text-primary-200 hover:border-white transition-all duration-300 px-8">
              Browse All Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* stats */}
      <motion.div
        {...fadeUp}
        className="absolute bottom-0 left-0 w-full bg-black/75 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 py-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">15+</h2>
            <p className="text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wider">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">24/7</h2>
            <p className="text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wider">
              Availability
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">10k+</h2>
            <p className="text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wider">
              Jobs Completed
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">4.9/5</h2>
            <p className="text-xs md:text-sm text-gray-300 mt-1 uppercase tracking-wider">
              Client Rating
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;