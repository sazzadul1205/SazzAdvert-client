import { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const Plaques = ({ plaquesData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white pt-20 text-black">
      <div
        className="flex justify-between mx-auto max-w-[1200px] border-b pb-[75px]"
        data-aos="fade-up"
      >
        {/* Avatars */}
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-4">
            {plaquesData.avatars.map((avatar, index) => (
              <div key={index} className="avatar border-none">
                <div className="w-12 rounded-full">
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    className="border-white border-2"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg">Meet Our Expert {">"}</p>
        </div>
        {/* Awards */}
        <div className="flex items-center">
          <img src={plaquesData.awards.src} alt="Award" />
          <div className="ml-5">
            <p className="font-semibold">{plaquesData.awards.title}</p>
            <p>
              <span className="font-bold mr-1 text-lg">
                {plaquesData.awards.clients}
              </span>
              {plaquesData.awards.description}
            </p>
          </div>
        </div>
        {/* Review */}
        <div>
          <div className="flex">
            <p className="mr-10">{plaquesData.review.reviewOn}</p>
            <div className="rating">
              {Array.from({ length: plaquesData.review.stars }).map(
                (_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                )
              )}
            </div>
          </div>
          <div className="flex">
            <img className="mr-10" src={plaquesData.review.src} alt="Clutch" />
            <p>{plaquesData.review.reviews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop validation
Plaques.propTypes = {
  plaquesData: PropTypes.shape({
    avatars: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
    awards: PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      clients: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    review: PropTypes.shape({
      reviewOn: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      reviews: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Plaques;
