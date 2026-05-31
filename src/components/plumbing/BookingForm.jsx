import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { FaTint, FaWrench, FaEllipsisH, FaArrowRight } from "react-icons/fa";

import StepIndicator from "./StepIndicator";
import ServiceCard from "./ServiceCard";
import BookingSidebar from "./BookingSidebar";

const services = [
  {
    id: "Leaks",
    icon: <FaTint />,
    title: "Leaks",
    description: "Drips, burst pipes, and water damage.",
  },
  {
    id: "Installation",
    icon: <FaWrench />,
    title: "Installation",
    description: "Faucets, sinks, toilets, or water heaters.",
  },
  {
    id: "Other",
    icon: <FaEllipsisH />,
    title: "Other",
    description: "General maintenance or complex repairs.",
  },
];

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Booking Submitted!");
  };

  return (
    <section className="bg-neutral-200 py-20 px-4 md:px-8">
      <div className="max-w-360 mx-auto">
        {/* heading */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-primary-200">
            Schedule Your Service
          </h2>

          <p className="text-gray-600 mt-2">
            Complete the following steps to book a licensed professional.
          </p>
        </div>

        {/* step indicator */}
        <StepIndicator step={step} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* form */}
          <motion.div
            layout
            className="lg:col-span-2 bg-white border border-gray-200 p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* STEP 1 */}
              {step === 1 && (
                <div>
                  <h3 className="text-3xl font-semibold mb-8">
                    What can we help you with?
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {services.map((service) => (
                      <ServiceCard
                        key={service.id}
                        service={service}
                        selectedService={selectedService}
                        setSelectedService={setSelectedService}
                      />
                    ))}
                  </div>

                  <div>
                    <label className="font-medium block mb-3">
                      Describe the issue (optional)
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us more about the plumbing problem..."
                      className="textarea textarea-bordered w-full rounded-none outline-none"
                      {...register("description")}
                    />
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn bg-primary-200 text-white border-none rounded-none px-10"
                    >
                      Next Step
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div>
                  <h3 className="text-3xl font-semibold mb-8">
                    Choose Schedule
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-medium block mb-3">
                        Preferred Date
                      </label>

                      <input
                        type="date"
                        className="input input-bordered w-full rounded-none outline-none"
                        {...register("date", {
                          required: "Date is required",
                        })}
                      />

                      {errors.date && (
                        <p className="text-red-500 mt-2 text-sm">
                          {errors.date.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-medium block mb-3">
                        Preferred Time
                      </label>

                      <select
                        className="select select-bordered w-full rounded-none outline-none"
                        {...register("time", {
                          required: "Time is required",
                        })}
                      >
                        <option value="">Select Time</option>
                        <option>9:00 AM</option>
                        <option>11:00 AM</option>
                        <option>1:00 PM</option>
                        <option>3:00 PM</option>
                        <option>5:00 PM</option>
                      </select>

                      {errors.time && (
                        <p className="text-red-500 mt-2 text-sm">
                          {errors.time.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn rounded-none"
                    >
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn bg-primary-200 text-white border-none rounded-none px-10"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <h3 className="text-3xl font-semibold mb-8">Your Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-medium block mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="input input-bordered w-full rounded-none outline-none"
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />

                      {errors.name && (
                        <p className="text-red-500 mt-2 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="font-medium block mb-3">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+1 234 567 890"
                        className="input input-bordered w-full rounded-none outline-none"
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                      />

                      {errors.phone && (
                        <p className="text-red-500 mt-2 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="font-medium block mb-3">Address</label>

                    <input
                      type="text"
                      placeholder="Your Address"
                      className="input input-bordered w-full rounded-none outline-none"
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn rounded-none"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="btn bg-primary-200 text-white border-none rounded-none px-10"
                    >
                      Submit Booking
                    </button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          {/* sidebar */}
          <BookingSidebar />
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
