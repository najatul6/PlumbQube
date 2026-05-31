const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 bg-neutral-200 flex items-center justify-center text-primary-200 text-xl">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-lg">
          {title}
        </h4>

        <p className="text-sm text-gray-500 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;