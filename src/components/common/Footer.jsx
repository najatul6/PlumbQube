import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-[#08131D] text-white pt-20 pb-8 px-4 md:px-8 rounded-b-xl overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          {/* brand */}
          <div>
            <h2 className="text-4xl font-bold mb-6">PlumbQube Expertise</h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              The gold standard in technical plumbing solutions. Precision-
              engineered repairs and expert installation for high-end
              properties.
            </p>
          </div>

          {/* services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wide">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-300 text-lg">
              <Link to={'/emergency-repairs'} className="hover:text-primary-200 transition">
                Emergency Repairs
              </Link>

              <Link to={'/drainage-solutions'} className="hover:text-primary-200 transition">
                Drainage Solutions
              </Link>

              <Link to={'/water-heating'} className="hover:text-primary-200 transition">
                Water Heating
              </Link>

              <Link to={'/pipe-diagnostics'} className="hover:text-primary-200 transition">
                Pipe Diagnostics
              </Link>
            </div>
          </div>

          {/* company */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wide">
              Company
            </h3>

            <div className="flex flex-col gap-4 text-gray-300 text-lg">
              <Link to={'/privacy-policy'} className="hover:text-primary-200 transition">
                Privacy Policy
              </Link>

              <Link to={'/terms-of-service'} className="hover:text-primary-200 transition">
                Terms of Service
              </Link>

              <Link to={'/service-area'} className="hover:text-primary-200 transition">
                Service Area
              </Link>

              <Link to={'/emergency-faq'} className="hover:text-primary-200 transition">
                Emergency FAQ
              </Link>
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 uppercase tracking-wide">
              Contact Us
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              123 Industrial Parkway
              <br />
              Plumbing Heights, PL 90210
            </p>

            <div className="flex items-center gap-5 mt-8">
              <Link to={'https://www.facebook.com/plumbqube'} target="_blank" rel="noopener noreferrer">
                <button className="text-2xl text-gray-300 hover:text-primary-200 transition cursor-pointer">
                  <FaFacebookF />
                </button>
              </Link>

              <Link to={'https://www.instagram.com/plumbqube'} target="_blank" rel="noopener noreferrer">
                <button className="text-2xl text-gray-300 hover:text-primary-200 transition cursor-pointer">
                  <FaInstagram />
                </button>
              </Link>

              <Link to={'https://www.x.com/plumbqube'} target="_blank" rel="noopener noreferrer">
                <button className="text-2xl text-gray-300 hover:text-primary-200 transition cursor-pointer">
                  <FaXTwitter />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-base md:text-lg">
            &copy; {new Date().getFullYear()} PlumbQube Expertise. Professional
            Plumbing &amp; Emergency Repairs. Licensed &amp; Insured.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
