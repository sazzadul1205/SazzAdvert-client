import { useEffect } from "react";
import PropTypes from "prop-types"; // Importing PropTypes for validation
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectArea = ({ projectAreaData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-[#FFE6E6] pt-12">
      <div
        data-aos="fade-up"
        className="bg-black max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[450px] rounded-3xl overflow-hidden hover:shadow-2xl"
      >
        {/* Left Section */}
        <div className="p-10 flex flex-col justify-center space-y-10 lg:w-[35%]">
          {projectAreaData?.leftSection?.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="bg-slate-900 p-4 rounded-full"
              />
              <div className="text-white">
                <p className="text-4xl font-bold">{item.stat}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="lg:w-[65%]">
          <img
            src={projectAreaData?.rightSectionImage ?? ""}
            alt="Project Area"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// Adding PropTypes validation
ProjectArea.propTypes = {
  projectAreaData: PropTypes.shape({
    leftSection: PropTypes.arrayOf(
      PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        stat: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    rightSectionImage: PropTypes.string,
  }).isRequired,
};

export default ProjectArea;
