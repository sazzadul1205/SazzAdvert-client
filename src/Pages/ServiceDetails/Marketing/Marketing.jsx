import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const Marketing = ({ MarketChaptersData, MarketSidebarData, MarketBanner }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#FFE6E6] py-10">
      <div className="max-w-[1200px] mx-auto text-black">
        {/* Render banner image if available */}
        {MarketBanner && (
          <img
            src={MarketBanner.imageUrl}
            alt="Marketing Banner"
            className="w-full mb-10"
          />
        )}
        <div className="flex flex-col lg:flex-row pt-10 justify-between">
          {/* Main Content */}
          <div className="w-full lg:w-[850px] lg:mr-32">
            <p className="text-4xl font-bold mb-5">Paid search marketing</p>
            {MarketChaptersData?.map((chapter, index) => (
              <div key={index}>
                <p className="font-bold pb-3">{chapter.title}</p>
                <p className="pb-8 leading-relaxed">{chapter.content}</p>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <div className="w-full lg:w-[310px] mt-10 lg:mt-0">
            <div className="bg-white p-10 font-semibold rounded-xl">
              {MarketSidebarData?.map((link, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 hover:text-red-500 cursor-pointer"
                >
                  <NavLink to={link.link}>
                    <p className="underline">{link.title}</p>
                  </NavLink>
                  <p className="text-red-500">{">"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
Marketing.propTypes = {
  MarketChaptersData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  MarketSidebarData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  MarketBanner: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
  }),
};

export default Marketing;
