import PropTypes from 'prop-types';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Awards = ({ AwardData, backgroundColor }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div
        className="max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[390px] rounded-lg overflow-hidden hover:shadow-2xl"
        data-aos="fade-up"
        style={{ backgroundColor }}  
      >
        <div className="grid grid-cols-4 p-10" data-aos="fade-up">
          <div className="bg-[#FFEEEE] mx-auto items-center w-[280px] text-black rounded-2xl">
            <img
              src={AwardData.left.awardImg}
              alt={AwardData.left.awardAlt}
              className="w-[170px] h-[170px] mx-auto mt-10"
            />
            <h1 className="text-lg text-center">
              {AwardData.left.title}
            </h1>
          </div>
          {AwardData.right.map((item, index) => (
            <div key={index} className="ml-10 mt-10 text-[#FFEEEE]">
              <img
                src={item.icon}
                alt={item.title}
                className="bg-[#FFEEEE] p-4 rounded-full"
              />
              <div>
                <h1 className="font-bold text-4xl mb-2">{item.value}</h1>
                <p className="text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Adding prop types for validation
Awards.propTypes = {
  AwardData: PropTypes.shape({
    left: PropTypes.shape({
      awardImg: PropTypes.string.isRequired,
      awardAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    right: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default Awards;
