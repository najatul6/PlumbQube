import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Primary Property
        </h2>

        <button className="text-primary-200 font-medium">
          Manage Properties →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 mt-8">
        <div>
          <div className="flex items-start gap-4 border border-gray-200 p-4 rounded-lg">
            <FaMapMarkerAlt className="text-primary-200 mt-1" />

            <div>
              <h3 className="font-semibold">
                1248 Oakwood Avenue, Seattle, WA
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Residential • 3 Bath • 2,400 sq ft
              </p>
            </div>
          </div>

          <div className="border border-red-200 bg-red-50 p-4 rounded-lg mt-4">
            <p className="text-red-600 font-medium">
              ⚠ Main Line Pipe Repair In Progress
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l border-gray-200">
          <div className="w-28 h-28 border-8 border-green-500 rounded-xl flex items-center justify-center">
            <span className="text-4xl font-bold">
              85
            </span>
          </div>

          <p className="text-center mt-4 text-green-600 font-medium">
            Property Health Stable
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;