const RecommendedServices = () => {
  const services = [
    {
      title: "Water Heater Flush",
      description: "Due in 2 months (Oct 2024)",
    },
    {
      title: "Backflow Testing",
      description: "Annual requirement for WA state.",
    },
  ];

  return (
    <div className="bg-[#8A6800] text-white rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-8">
        Recommended Services
      </h2>

      <div className="space-y-8">
        {services.map((service, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg">
              {service.title}
            </h3>

            <p className="text-sm text-yellow-100 mt-1">
              {service.description}
            </p>

            <button className="mt-3 text-sm underline">
              Schedule Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedServices;