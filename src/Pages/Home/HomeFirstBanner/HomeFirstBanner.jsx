import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const HomeFirstBanner = ({ BannerHome }) => {
  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white">
      <div className="w-full max-w-[1200px] mx-auto pt-40">
        {BannerHome.map((banner) => (
          <div key={banner._id}>
            <div className="hero max-w-[1200px] mx-auto text-black">
              <div className="hero-content text-center">
                <div>
                  <p className="text-[70px] font-bold w-[1000px] pb-5 mx-auto">
                    {banner.title}
                  </p>
                  <p className="text-[20px] pb-8">{banner.description}</p>
                  <NavLink to={"/Contacts"}>
                    <button className="btn bg-black text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
                      {"LET'S"} TALK <FaChevronRight />
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="border-b mx-auto">
              <img
                src={banner.imageUrl}
                alt={banner.title}
                className="w-[1080px] h-[540px] mx-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop validation
HomeFirstBanner.propTypes = {
  BannerHome: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomeFirstBanner;

