import { FaEye } from "react-icons/fa";

const rows = [
  {
    id: "REQ-4822",
    date: "Sept 05, 2024",
    type: "Main Line Pipe Repair",
    technician: "Mark R.",
    status: "IN PROGRESS",
    total: "$850.00",
  },

  {
    id: "REQ-4710",
    date: "Aug 15, 2024",
    type: "Water Heater Replacement",
    technician: "Sarah J.",
    status: "COMPLETED",
    total: "$1,240.00",
  },

  {
    id: "REQ-4605",
    date: "Jul 22, 2024",
    type: "Drain Cleaning Service",
    technician: "Mark R.",
    status: "COMPLETED",
    total: "$185.00",
  },
];

const ServiceHistoryTable = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6 overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">
          Full Service History
        </h2>

        <div className="flex items-center gap-3">
          <button className="btn btn-sm rounded-lg">
            Filter
          </button>

          <button className="btn btn-sm rounded-lg">
            Export
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>REQUEST ID</th>
            <th>DATE</th>
            <th>SERVICE TYPE</th>
            <th>TECHNICIAN</th>
            <th>STATUS</th>
            <th>TOTAL</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td className="font-bold">
                {row.id}
              </td>

              <td>{row.date}</td>

              <td>{row.type}</td>

              <td>{row.technician}</td>

              <td>
                <span
                  className={`badge ${
                    row.status === "COMPLETED"
                      ? "badge-success"
                      : "badge-info"
                  }`}
                >
                  {row.status}
                </span>
              </td>

              <td>{row.total}</td>

              <td>
                <button className="text-primary-200">
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceHistoryTable;