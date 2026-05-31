import { FaShieldAlt } from "react-icons/fa";

const EmergencyCard = () => {
  return (
    <div className="bg-primary-200 text-white p-6">
      <div className="flex items-center gap-3 mb-5">
        <FaShieldAlt />

        <h3 className="text-3xl font-bold">24/7 Emergency</h3>
      </div>

      <p className="leading-relaxed text-lg text-gray-100">
        Have a flooding emergency or a burst pipe? Skip the form and call us now
        for immediate dispatch.
      </p>

      <button className="btn w-full mt-8 rounded-none bg-white text-primary-200 border-none text-2xl font-bold hover:bg-neutral-200">
        019.........
      </button>
    </div>
  );
};

export default EmergencyCard;
