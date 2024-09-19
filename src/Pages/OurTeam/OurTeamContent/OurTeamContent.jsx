import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const OurTeamContent = ({ OurTeamContentData, OurTeamContentTitleData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#FFE6E6] pb-20">
      <div className="max-w-[1200px] mx-auto text-black">
        <div className="w-[600px] mx-auto text-center py-16">
          <p className="font-semibold text-lg">
            {OurTeamContentTitleData.title}
          </p>
          <h1 className="font-bold">{OurTeamContentTitleData.description}</h1>
        </div>
        <div className="grid grid-cols-3 gap-28 pb-16 border-b border-gray-300">
          {OurTeamContentData.map((member, index) => (
            <div
              key={index}
              className="relative w-[500px] h-[350px] mb-20"
              data-aos="fade-up"
            >
              <div className="absolute top-10 left-16 bg-[#f5f4f4] rounded-xl w-[350px] h-[400px] z-0"></div>
              <div className="relative flex">
                <img
                  src={member.img}
                  className="relative w-[350px] h-[350px] rounded z-10"
                />
                <div className="z-10 ml-5 mt-20">
                  {member.icons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={icon.image}
                        alt={`icon-${index}`}
                        className="mb-4"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute left-20 z-20 px-4 py-2 rounded-md">
                <p className="font-bold text-xl pt-3">{member.name}</p>
                <p className="text-base">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Define prop types
OurTeamContent.propTypes = {
  OurTeamContentData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      icons: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  OurTeamContentTitleData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default OurTeamContent;
