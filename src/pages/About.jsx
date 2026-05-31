import { motion } from "framer-motion";
import {
  FaAward,
  FaTools,
} from "react-icons/fa";
import engImg from "../assets/images/engineer.png";
import legacyImg from "../assets/images/legacy.png";
import { fadeLeft, fadeRight, fadeUp } from "../utils/animation";

const About = () => {
  return (
    <section className="bg-neutral-200 py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <motion.div {...fadeLeft}>
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Engineered for Precision, Built on Trust.
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              At PlumbQube Expertise, we don't just fix pipes; we engineer
              smart solutions for your home's infrastructure. Our story began
              with a simple mission: to bring technical rigor and corporate-
              level reliability to the local plumbing trade.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="badge badge-outline px-4 py-4">
                Licensed Master Plumber
              </span>

              <span className="badge badge-outline px-4 py-4">
                Fully Insured & Bonded
              </span>

              <span className="badge badge-outline px-4 py-4">
                BBB Accredited A+
              </span>
            </div>
          </motion.div>

          {/* right */}
          <motion.div {...fadeRight} className="relative">
            <img
              src={engImg}
              alt="plumber"
              className="w-full h-130 object-cover pointer-events-none"
            />

            <div className="absolute -bottom-8 -left-8 bg-primary-200 text-white px-6 py-5">
              <h3 className="text-3xl font-bold">15+ Years</h3>

              <p className="text-sm text-gray-200 mt-1">
                Serving the Community
              </p>
            </div>
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <div>
          <motion.div {...fadeUp} className="mb-12">
            <h2 className="text-4xl font-bold text-black">
              The Core of Our Service.
            </h2>

            <p className="text-gray-500 mt-2">
              Guided by a standard of excellence that never wavers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* left large */}
            <motion.div
              {...fadeLeft}
              className="bg-white border border-gray-200 p-8 lg:col-span-2"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-200">
                    Our Legacy
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Founded in 2004, PlumbQube Expertise transformed from a
                    single-van operation into a multi-disciplinary plumbing
                    firm. We maintain the intimacy of a local business with the
                    precision efficiency of a high-tech corporation.
                  </p>
                </div>

                <img
                  src={legacyImg}
                  alt="legacy"
                  className="w-full lg:w-64 h-48 object-cover"
                />
              </div>
            </motion.div>

            {/* right */}
            <motion.div
              {...fadeRight}
              className="bg-primary-200 text-white p-8 flex flex-col justify-between"
            >
              <FaTools className="text-5xl text-white/70" />

              <div>
                <h3 className="text-3xl font-bold mt-10">
                  Quality First
                </h3>

                <p className="text-gray-200 mt-4 leading-relaxed">
                  Every fitting, every joint, and every seal is checked twice.
                  We don't just meet code; we exceed it.
                </p>
              </div>
            </motion.div>

            {/* bottom left */}
            <motion.div
              {...fadeUp}
              className="bg-white border border-gray-200 p-8"
            >
              <FaAward className="text-primary-200 text-4xl mb-6" />

              <h3 className="text-3xl font-bold">24/7 Response</h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Plumbing crises don't wait for business hours. Neither do we.
              </p>
            </motion.div>

            {/* bottom right */}
            <motion.div
              {...fadeUp}
              className="bg-white border border-gray-200 p-8 lg:col-span-2"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold">
                    Meet the Team
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                    Our technicians are more than laborers; they are certified
                    specialists trained in the latest hydro-technologies and
                    eco-friendly plumbing systems.
                  </p>
                </div>

                <div className="flex -space-x-3">
                  {[1, 2, 3].map((item) => (
                    <img
                      key={item}
                      src={`https://i.pravatar.cc/100?img=${item + 10}`}
                      alt="team"
                      className="w-16 h-16 rounded-2xl border-4 border-white object-cover"
                    />
                  ))}

                  <div className="w-16 h-16 rounded-full bg-primary-200 text-white flex items-center justify-center border-4 border-white font-bold">
                    +12
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;