import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { fadeLeft, fadeRight } from "../utils/animation";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
  return (
    <section className="bg-neutral-200 py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* form */}
        <motion.div {...fadeLeft}>
          <h2 className="text-5xl font-bold text-black">Inquire With Us</h2>

          <p className="mt-4 text-gray-600">
            For no-obligation quotes, partnerships, or general questions.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full rounded-none outline-none"
                {...register("name")}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>

              <input
                type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full rounded-none outline-none"
                {...register("email")}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Service Type</label>

              <select
                className="select select-bordered w-full rounded-none outline-none"
                {...register("service")}
              >
                <option>General Inquiry</option>
                <option>Emergency Repair</option>
                <option>Drain Cleaning</option>
                <option>Leak Detection</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>

              <textarea
                rows={5}
                placeholder="How can our expertise help you today?"
                className="textarea textarea-bordered w-full rounded-none outline-none"
                {...register("message")}
              />
            </div>

            <button className="btn bg-primary-200 text-white border-none rounded-none w-full hover:bg-primary-200/90">
              Send Inquiry
            </button>
          </form>

          {/* contact info */}
          <div className="mt-10 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary-200" />
              <span>+88 0123456789</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary-200" />
              <span>123 Industrial Way, Suite 400</span>
            </div>
          </div>
        </motion.div>

        {/* right realtime map */}
        <motion.div {...fadeRight} className="relative">
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={12}
            scrollWheelZoom={false}
            className="w-full h190 z-10"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[40.7128, -74.006]}>
              <Popup>
                ProPlumb Expertise <br /> Main Service Area
              </Popup>
            </Marker>
          </MapContainer>

          {/* overlay card */}
          <div className="absolute top-6 left-6 bg-white shadow-2xl p-5 max-w-xs z-9999">
            <h3 className="text-primary-200 font-bold text-lg">
              SERVICE RADAR
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              We provide emergency and scheduled repairs within a 50-mile radius
              of downtown.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
