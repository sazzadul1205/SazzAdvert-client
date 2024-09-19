import { useEffect } from "react";
import PropTypes from "prop-types"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const WhatWeDo = ({ WhatWeDoData, WhatWeDoTitleData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white text-black pb-12 pt-20">
      <div className="max-w-[1200px] mx-auto flex gap-10" data-aos="fade-up">
        {/* Left Section */}
        <div className="w-full lg:w-[40%]">
          <p className="text-xl font-semibold text-gray-600">
            {WhatWeDoTitleData?.title || "WHAT WE DO"}
          </p>
          <h1 className="text-4xl font-bold leading-tight mt-4">
            {WhatWeDoTitleData?.description ||
              "Driving success through strategic paid search advertising!"}
          </h1>
          <NavLink to={"/AboutUs"}>
            <span className="mt-6  text-black font-semibold hover:text-red-400 flex items-center">
              KNOW MORE ABOUT US <FaChevronRight className="text-red-500 text-xl ml-2" />
            </span>
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[60%]">
          <p className="text-gray-700 leading-relaxed">
            {WhatWeDoTitleData?.content ||
              "Transforming your brand's online presence and generating meaningful results is our top priority at Adli. As a leading paid search ad agency, we bring together a unique blend of creativity and data-driven insights to elevate your campaigns."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Dynamically Render Content */}
            {WhatWeDoData.slice(0, 4).map((item) => (
              <div key={item.id} className="items-start gap-4">
                <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center ">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div>
                  <h2 className="py-2 font-bold text-xl pt-8">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Adding PropTypes validation
WhatWeDo.propTypes = {
  WhatWeDoTitleData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
  }),
  WhatWeDoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default WhatWeDo;
