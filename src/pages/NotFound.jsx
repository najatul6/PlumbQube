import { Link } from "react-router";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-200 px-4">
      <div className="max-w-xl text-center">
        {/* icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-primary-200/10 flex items-center justify-center">
            <MdErrorOutline className="text-6xl text-primary-200" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-primary-200 mb-4">
          404
        </h1>

        {/* title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>

        {/* description */}
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-primary-200 text-white font-medium hover:scale-105 transition duration-300"
          >
            Back To Home
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl border border-primary-200 text-primary-200 font-medium hover:bg-primary-200 hover:text-white transition duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;