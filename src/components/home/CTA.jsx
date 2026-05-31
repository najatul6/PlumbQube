import { motion } from "framer-motion";
import { FaPhoneAlt, FaTools } from "react-icons/fa";

import { fadeUp } from "../../utils/animation";

const CTA = () => {
  return (
    <section className="bg-neutral-200 px-4 md:px-8 py-20">
      <motion.div
        {...fadeUp}
        className="max-w-360 mx-auto border border-gray-300 bg-neutral-200 relative overflow-hidden"
      >
        {/* watermark icon */}
        <FaTools className="absolute right-10 top-1/2 -translate-y-1/2 text-[180px] text-black/5 rotate-12 hidden md:block" />

        <div className="px-8 md:px-16 py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 relative z-10">
          {/* left content */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-200 leading-tight">
              Ready to fix it for good?
            </h2>

            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              Get a free, transparent estimate from our master plumbers today.
              No job is too complex for our expertise.
            </p>
          </div>

          {/* right actions */}
          <div className="flex flex-col items-start gap-5">
            <button className="btn bg-primary-200 hover:bg-primary-200/90 border-none rounded-xs text-white px-14 py-7 text-lg hover:scale-105 transition duration-300">
              Request Your Estimate
            </button>

            <a
              href="tel:019........"
              className="flex items-center gap-3 text-primary-200 text-xl hover:translate-x-1 transition duration-300"
            >
              <FaPhoneAlt />
              Call Now: 019........
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
