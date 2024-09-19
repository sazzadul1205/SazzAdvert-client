import { Link } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronRight } from "react-icons/fa";

const OurProcess = ({ OurProcessStepsData, OurProcessTitleData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // Safely destructure title and description from OurProcessTitleData
  const { title, description, img } = OurProcessTitleData[0] || {
    title: "Default Title",
    description: "Default Description",
    img: "defaultImage.jpg",
  };

  return (
    <div className="bg-white text-black pb-10">
      <div className="max-w-[1200px] mx-auto justify-around" data-aos="fade-up">
        {/* Top Section */}
        <div className="text-center w-[648px] mx-auto mb-10">
          <p className="font-semibold text-lg">{title}</p>
          <h1 className="font-bold text-4xl">{description}</h1>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between mt-10 gap-10">
          {/* Left Side */}
          <div className="space-y-10">
            {OurProcessStepsData.map((step) => (
              <div
                key={step.num}
                className="flex items-start hover:text-red-500 text-gray-200"
              >
                <p className="text-[75px] mr-4 mt-2 font-bold pt-12">
                  {step.num}
                </p>
                <div className="w-[445px]">
                  <h1 className="text-2xl font-semibold text-black">
                    {step.title}
                  </h1>
                  <p className="text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="relative">
            <img src={img} alt="Process" className="w-[700px] h-[405px]" />
            <Link to="/Careers">
              <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-10 py-4 rounded-3xl hover:bg-[#d93c31] flex items-center">
                Get Proposal <FaChevronRight className="ml-2"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Adding PropTypes for prop validation
OurProcess.propTypes = {
  OurProcessStepsData: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  OurProcessTitleData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OurProcess;
