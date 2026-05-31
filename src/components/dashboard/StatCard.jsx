const StatCard = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-lg">
      <p className="text-xs text-gray-400 uppercase">
        {item.title}
      </p>

      <h2 className="text-4xl font-bold text-primary-200 mt-3">
        {item.value}
      </h2>
    </div>
  );
};

export default StatCard;