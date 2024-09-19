import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Sparkles from "../../../assets/Sparkles.png";
import logo from "../../../assets/logo.png";
import { FaChevronRight } from "react-icons/fa";

const CareerFirstBanner = ({ CareersPageBanner1 }) => {
  return (
    <div className="bg-[#FFE6E6]">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">
            {CareersPageBanner1.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {CareersPageBanner1.heading}
          </h1>
          <h1 className="text-[16px] mb-12">
            {CareersPageBanner1.description}
          </h1>
          <NavLink to="/AboutUs">
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              KNOW MORE ABOUT US <FaChevronRight />
            </button>
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="relative w-[522px] h-[365px]">
          <div className="absolute top-5 left-4 bg-red-500 rounded-xl w-full h-full z-0"></div>
          <img
            src={CareersPageBanner1.imageUrl}
            alt={CareersPageBanner1.heading}
            className="absolute top-0 left-0 w-full h-full rounded-xl object-cover z-10"
          />
          <img
            src={Sparkles}
            alt="Decorative sparkles"
            className="absolute left-[-80px]  w-[130px] z-20"
          />
          <img
            src={logo}
            alt="Company logo"
            className="absolute bottom-10 right-9 w-[100px] z-20"
          />
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
CareerFirstBanner.propTypes = {
  CareersPageBanner1: PropTypes.shape({
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CareerFirstBanner;
