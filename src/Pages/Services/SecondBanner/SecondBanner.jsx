import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const SecondBanner = ({ ServicesPageBanner2 }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false, 
    });
  }, []);

  return (
    <div className="bg-[#f2f2f8] py-14 text-black">
      <div
        data-aos="fade-up"
        className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5"
      >
        <div className="w-[612px] h-[623px]">
          <img
            src={ServicesPageBanner2.imageUrl}
            alt={ServicesPageBanner2.title}
            className="w-full h-full rounded z-10"
          />
        </div>
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">
            {ServicesPageBanner2.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {ServicesPageBanner2.description}
          </h1>
          <h1 className="text-[16px] mb-12">{ServicesPageBanner2.content}</h1>
          <NavLink to="/OurTeam">
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              MEET THE TEAM <FaChevronRight />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
SecondBanner.propTypes = {
  ServicesPageBanner2: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default SecondBanner;
