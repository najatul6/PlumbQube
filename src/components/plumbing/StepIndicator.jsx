import { FaWrench, FaCalendarAlt, FaUser } from "react-icons/fa";

const StepIndicator = ({ step }) => {
  const steps = [
    {
      id: 1,
      icon: <FaWrench />,
      title: "Issue",
    },
    {
      id: 2,
      icon: <FaCalendarAlt />,
      title: "Schedule",
    },
    {
      id: 3,
      icon: <FaUser />,
      title: "Details",
    },
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-300 pb-4">
      {steps.map((item) => (
        <div
          key={item.id}
          className={`flex items-center gap-2 pb-2 border-b-2 transition duration-300 ${
            step === item.id
              ? "border-primary-200 text-primary-200"
              : "border-transparent text-gray-500"
          }`}
        >
          {item.icon}

          <span className="font-medium">
            {item.id}. {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
