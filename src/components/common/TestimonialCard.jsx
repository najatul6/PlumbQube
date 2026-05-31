
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 p-8 min-h-90 backdrop-blur-sm hover:border-primary-200 transition duration-300"
    >
      {/* stars */}
      <div className="flex items-center gap-2 mb-8">
        {[...Array(5)].map((_, idx) => (
          <FaStar key={idx} className="text-yellow-400 text-lg" />
        ))}
      </div>

      {/* review */}
      <p className="text-white italic text-xl leading-relaxed mb-12 line-clamp-3">
        "{testimonial.review}"
      </p>

      {/* user */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-primary-200 flex items-center justify-center text-white font-bold text-lg">
          {testimonial.initials}
        </div>

        <div>
          <h4 className="text-white text-xl font-semibold">
            {testimonial.name}
          </h4>

          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;