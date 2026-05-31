const ServiceCard = ({
  service,
  selectedService,
  setSelectedService,
}) => {
  return (
    <button
      type="button"
      onClick={() => setSelectedService(service.id)}
      className={`border p-6 text-left transition duration-300 hover:border-primary-200 ${
        selectedService === service.id
          ? "border-primary-200 bg-primary-200/5"
          : "border-gray-300"
      }`}
    >
      <div className="text-primary-200 text-2xl mb-4">
        {service.icon}
      </div>

      <h3 className="text-xl font-semibold mb-2">
        {service.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </button>
  );
};

export default ServiceCard;