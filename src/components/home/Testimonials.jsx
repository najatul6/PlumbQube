import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { fadeUp } from "../../utils/animation";
import TestimonialCard from "../common/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "James Donovan",
    role: "Homeowner in Downtown",
    initials: "JD",
    review:
      "Called PlumbQubeb at 3 AM for a burst pipe. Their technician arrived in 20 minutes, stopped the flooding, and had the repair completed before sunrise. Absolute lifesavers.",
  },
  {
    id: 2,
    name: "Sarah Reed",
    role: "Property Manager, Metro Estates",
    initials: "SR",
    review:
      "As a property manager, I need reliability. PlumbQubeb handles all our maintenance with precision and transparent billing. They are my first and only call for plumbing.",
  },
  {
    id: 3,
    name: "Michael Kim",
    role: "Residential Client",
    initials: "MK",
    review:
      "Highly professional team. They installed our new tankless water heater and explained the system in detail. Everything worked exactly as quoted. Highly recommended service.",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Apartment Owner",
    initials: "EW",
    review:
      "Fast response, professional attitude, and transparent pricing. Easily one of the best plumbing experiences we’ve had.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#08131D] py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-360 mx-auto">
        {/* top */}
        <motion.div
          {...fadeUp}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-14"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Client Perspectives
            </h2>

            <p className="mt-3 text-gray-400 text-lg">
              Hear from homeowners and property managers.
            </p>
          </div>

          {/* arrows */}
          <div className="flex items-center gap-4">
            <button className="testimonial-prev w-14 h-14 border border-white/20 text-white flex items-center justify-center hover:bg-primary-200 hover:border-primary-200 transition duration-300 cursor-pointer">
              <FaChevronLeft />
            </button>

            <button className="testimonial-next w-14 h-14 border border-white/20 text-white flex items-center justify-center bg-primary-200 hover:border-primary-200 transition duration-300 cursor-pointer">
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
