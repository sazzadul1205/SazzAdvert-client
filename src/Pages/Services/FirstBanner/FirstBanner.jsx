import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const FirstBanner = ({ ServicesPageBanner1 }) => {
  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6] py-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">
            {ServicesPageBanner1?.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {ServicesPageBanner1?.description}
          </h1>
          <h1 className="text-[16px] mb-12 leading-relaxed">{ServicesPageBanner1?.content}</h1>
          <NavLink to="/AboutUs">
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              GET YOUR FREE CUSTOM PROPOSAL <FaChevronRight />
            </button>
          </NavLink>
        </div>
        <div className="w-[612px] h-[545px]">
          <img
            src={ServicesPageBanner1?.imageUrl}
            alt={ServicesPageBanner1?.title}
            className="w-full h-full rounded z-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
FirstBanner.propTypes = {
  ServicesPageBanner1: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default FirstBanner;
