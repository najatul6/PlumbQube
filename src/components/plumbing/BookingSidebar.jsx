import { FaShieldAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";

import EmergencyCard from "./EmergencyCard";
import FeatureCard from "./FeatureCard";

import workerImg from "../../assets/images/worker.png";

const BookingSidebar = () => {
  return (
    <div className="space-y-6">
      {/* emergency */}
      <EmergencyCard />

      {/* features */}
      <div className="bg-white border border-gray-200 p-6 space-y-8">
        <FeatureCard
          icon={<FaShieldAlt />}
          title="Licensed & Insured"
          description="Certified Professionals"
        />

        <FeatureCard
          icon={<FaMoneyBillWave />}
          title="Transparent Pricing"
          description="Upfront estimates provided"
        />

        <FeatureCard
          icon={<FaClock />}
          title="On-Time Guarantee"
          description="Respecting your schedule"
        />
      </div>

      {/* image */}
      <div className="relative overflow-hidden">
        <img
          src={workerImg}
          alt="worker"
          className="w-full h-70 object-cover grayscale"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold">Professional Grade Tools</h3>

          <p className="text-gray-300 mt-1">
            Precision matters in every repair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingSidebar;
