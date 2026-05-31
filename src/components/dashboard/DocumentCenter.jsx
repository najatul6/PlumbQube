import {
  FaFileAlt,
  FaShieldAlt,
  FaClipboardCheck,
} from "react-icons/fa";

import DocumentCard from "./DocumentCard";

const documents = [
  {
    icon: <FaFileAlt />,
    title: "Active Quotes (2)",
    description: "Bathroom remodel, sump pump",
  },

  {
    icon: <FaShieldAlt />,
    title: "Safety Certifications",
    description: "Annual gas line safety 2024",
  },

  {
    icon: <FaClipboardCheck />,
    title: "Maintenance Reports",
    description: "Full property audit (June 2024)",
  },
];

const DocumentCenter = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          Document Center
        </h2>

        <p className="text-sm text-gray-400">
          Updated 2 days ago
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {documents.map((doc, idx) => (
          <DocumentCard key={idx} doc={doc} />
        ))}
      </div>
    </div>
  );
};

export default DocumentCenter;