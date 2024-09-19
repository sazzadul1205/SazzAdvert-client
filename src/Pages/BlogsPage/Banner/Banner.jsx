import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Banner = ({ BlogsPageBanner }) => {
  return (
    <div className="bg-[#FFE6E6] pt-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Banner */}
        <div className="card bg-[#faf4f4] w-full shadow-lg text-black mt-20 hover:shadow-2xl">
          <div className="flex justify-between py-11 px-14">
            {/* Left */}
            <div>
              <div className="flex items-center">
                <img
                  src={BlogsPageBanner.postedBy.logo}
                  alt={`Logo of ${BlogsPageBanner.postedBy.name}`}
                  className="ml-5 w-8 h-8"
                />
                <div className="ml-5">
                  <p>Posted by</p>
                  <p className="font-bold">{BlogsPageBanner.postedBy.name}</p>
                </div>
              </div>
              <div className="card-actions pt-4 mt-5">
                {BlogsPageBanner.buttons.map((buttonText, index) => (
                  <button
                    key={index}
                    className="bg-[#FFEEEE] hover:bg-red-600 hover:text-white p-4 rounded-full mx-1"
                  >
                    {buttonText}
                  </button>
                ))}
              </div>
              <div className="mt-5">
                <h2 className="text-4xl font-bold">{BlogsPageBanner.title}</h2>
              </div>
              <NavLink to="/BlogDetails">
                <p className="mt-10 hover:text-red-500 text-sm font-semibold flex items-center">
                  READ MORE <FaChevronRight className="ml-2"/>
                </p>
              </NavLink>
            </div>
            {/* Right */}
            <div>
              <img
                src={BlogsPageBanner.bannerImage}
                alt="Banner image"
                className="rounded-xl w-[600px] h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for Banner component
Banner.propTypes = {
  BlogsPageBanner: PropTypes.shape({
    postedBy: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    bannerImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Banner;
