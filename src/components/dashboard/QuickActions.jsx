import {
  FaComments,
} from "react-icons/fa";
import { BsExclamationDiamond } from "react-icons/bs";

const QuickActions = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-5 hidden xl:block">
      <h3 className="text-xs uppercase text-gray-400 mb-4">
        Quick Actions
      </h3>

      <div className="space-y-3">
        <button className="btn w-full rounded-lg bg-red-600 text-white border-none hover:bg-red-700">
          <BsExclamationDiamond />
          Request Emergency
        </button>

        <button className="btn w-full rounded-lg">
          <BsExclamationDiamond />
          Schedule Visit
        </button>

        <button className="btn w-full rounded-lg">
          <FaComments />
          Ask a Plumber
        </button>
      </div>
    </div>
  );
};

export default QuickActions;