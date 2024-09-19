import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

const Capabilities = ({ CapabilitiesData, CapabilitiesTitle }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
    });
  }, []);

  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6] py-12 text-black">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="w-[645px] mx-auto text-center pb-20">
          <p className="font-semibold">{CapabilitiesTitle?.title}</p>
          <h1 className="font-bold text-4xl">
            {CapabilitiesTitle?.description}
          </h1>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {CapabilitiesData.slice(0, 8).map((card) => (
            <div
              key={card.id}
              className="h-[390px] w-full md:w-[300px] bg-white rounded-xl p-10 transform transition-transform duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
            >
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-5">
                <img
                  src={card.image}
                  alt={card.title || "Capability"}
                  className="object-cover"
                />
              </div>
              <h1 className="text-xl mb-4 font-bold">{card.title}</h1>
              <p className="text-base font-normal mb-9">{card.description}</p>
              <button className="flex items-center font-medium hover:text-red-500">
                READ MORE <FaChevronRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Capabilities.propTypes = {
  CapabilitiesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  CapabilitiesTitle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Capabilities;
