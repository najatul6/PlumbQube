import { motion } from "framer-motion";
import { FaPhoneAlt, FaTools } from "react-icons/fa";

import { fadeUp } from "../../utils/animation";

const EmergencyBanner = ({
  title = "24/7 Emergency Dispatch",
  description = "Pipe burst? Flooding? Our rapid-response team is on standby.",
  buttonText = "Call (555) PLUMB-NOW",
  icon = <FaTools />,
}) => {
  return (
    <motion.div
      {...fadeUp}
      className="mt-10 bg-primary-200 px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 bg-tertiary-200 flex items-center justify-center text-black">
          {icon}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">{title}</h3>

          <p className="text-gray-200 mt-1">{description}</p>
        </div>
      </div>

      <button className="btn rounded-none bg-tertiary-200 border-none text-black hover:bg-neutral-200 px-10">
        <FaPhoneAlt />
        {buttonText}
      </button>
    </motion.div>
  );
};

export default EmergencyBanner;
