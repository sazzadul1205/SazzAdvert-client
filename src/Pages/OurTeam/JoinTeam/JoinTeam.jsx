import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import sparkle from "../../../assets/OurTeam/sparkle.png";
import { FaChevronRight } from "react-icons/fa";

const JoinTeam = ({ JoinTeamData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white pt-24 pb-24 text-black">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="flex relative bg-[#FAF4F4]">
          <img
            src={sparkle}
            alt="sparkle"
            className="w-16 h-16 absolute bottom-20 left-32"
          />
          <div className="w-[670px] mx-auto text-center py-24">
            <h1 className="font-bold">{JoinTeamData.title}</h1>
            <p className="pb-5">{JoinTeamData.description}</p>
            <NavLink to="/OurTeam">
              <button className="btn text-white px-10 rounded-3xl border-none bg-[#ef4335]">
                JOIN OUR TEAM <FaChevronRight />
              </button>
            </NavLink>
          </div>
          <img
            src={sparkle}
            alt="sparkle"
            className="w-28 h-24 absolute top-20 right-32"
          />
        </div>
      </div>
    </div>
  );
};

// Prop types definition
JoinTeam.propTypes = {
  JoinTeamData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default JoinTeam;
