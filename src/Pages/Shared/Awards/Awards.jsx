import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import AOS from "aos";
import "aos/dist/aos.css";

const Awards = ({ AwardData, backgroundColor }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-[#FFE6E6] py-12">
      <div
        data-aos="fade-up"
        style={{ backgroundColor: backgroundColor }} 
        className="max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[390px] rounded-lg overflow-hidden hover:shadow-2xl"
      >
        <div className="grid grid-cols-4 p-10">
          {/* Left side with the award image */}
          <div className="bg-[#FFEEEE] mx-auto items-center w-[280px] text-black">
            <img
              src={AwardData?.left?.awardImg}
              alt={AwardData?.left?.awardAlt}
              className="w-[170px] h-[170px] mx-auto mt-10"
            />
            <h1 className="text-lg text-center">{AwardData?.left?.title}</h1>
          </div>

          {/* Right side with the awards data */}
          {AwardData?.right?.map((award, index) => (
            <div key={index} className="ml-10 mt-10 text-black">
              <img
                src={award.icon}
                alt={award.title}
                className="bg-[#FFEEEE] p-4 rounded-full"
              />
              <div>
                <h1 className="font-bold text-4xl mb-2">{award.value}</h1>
                <p className="font-semibold text-lg mb-5">{award.title}</p>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes for validation
Awards.propTypes = {
  AwardData: PropTypes.shape({
    left: PropTypes.shape({
      awardImg: PropTypes.string,
      awardAlt: PropTypes.string,
      title: PropTypes.string,
    }),
    right: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }),
  backgroundColor: PropTypes.string,
};

export default Awards;
