import StatCard from "./StatCard";

const DashboardStats = () => {
  const stats = [
    {
      title: "TOTAL SERVICES",
      value: "12",
    },
    {
      title: "LAST INSPECTION",
      value: "Aug 15",
    },
    {
      title: "ACTIVE QUOTES",
      value: "2",
    },
    {
      title: "MEMBER SINCE",
      value: "2021",
    },
  ];

  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
      {stats.map((item, idx) => (
        <StatCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default DashboardStats;