import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronRight } from "react-icons/fa";

const Capabilities = ({ CapabilitiesCards, CapabilitiesTitleData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white text-black font-bold py-20">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="flex justify-between items-center py-10 pb-20">
          {/* Left Section */}
          <div className="flex items-center">
            <div className="w-[500px]">
              <p className="text-xl font-semibold">
                {CapabilitiesTitleData[0]?.title}
              </p>
              <h1 className="text-4xl mt-2">
                {CapabilitiesTitleData[0]?.description}
              </h1>
            </div>
            <img
              src="https://i.imgur.com/5amFT95.png"
              alt="Capabilities illustration"
              className="w-[246px] h-16 ml-2"
            />
          </div>

          {/* Right Section */}
          <div>
            <Link to="/Careers">
              <button className="bg-black text-white px-10 py-4 rounded-3xl hover:bg-[#d93c31] flex items-center ">
                Get Proposal <FaChevronRight className="ml-2"/>
              </button>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-28">
          {CapabilitiesCards.slice(0, 4).map((card) => (
            <div
              key={card.id}
              className="h-[400px] w-[300px] bg-white rounded-xl px-5 py-10 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-5">
                <img src={card.image} alt={card.title} />
              </div>
              <h1 className="text-xl mb-4">{card.title}</h1>
              <p className="text-base font-normal mb-9">{card.description}</p>
              <NavLink to="/ServicesDetails">
                <button className="font-medium hover:text-red-500 flex items-center">
                  READ MORE <FaChevronRight className="text-red-500 ml-2"/>
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
Capabilities.propTypes = {
  CapabilitiesCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  CapabilitiesTitleData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Capabilities;
