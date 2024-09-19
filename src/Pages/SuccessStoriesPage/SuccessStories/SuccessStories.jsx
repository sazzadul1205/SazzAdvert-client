import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

// StoryCard Component
const StoryCard = ({ image, title, subtitle, large = false }) => (
  <div
    className={`relative group ${
      large ? "w-[630px] h-[280px]" : "w-[280px] h-[280px]"
    }`}
  >
    <NavLink to={"/SuccessStoryDetails"}>
      <img
        src={image}
        className="rounded-xl w-full h-full object-cover"
        alt={title}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl mx-5 p-3 mb-5">
        <div>
          <p className="text-2xl text-white pb-2">{title}</p>
          <p className="text-gray-300">{subtitle}</p>
        </div>
        <img
          src={"https://i.ibb.co/pdrNhRy/icon.png"}
          className="bg-slate-900 p-2 rounded-full group-hover:bg-white transition-colors"
          alt="icon"
          aria-hidden="true"
        />
      </div>
    </NavLink>
  </div>
);

// SuccessStoriesPage Component
const SuccessStoriesPage = ({
  SuccessStoriesData,
  SuccessStoriesTitleData,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div className="max-w-[1200px] mx-auto gap-8">
        {/* Titles */}
        <div className="text-black text-center w-[640px] mx-auto pb-10">
          <p className="font-semibold">{SuccessStoriesTitleData.title}</p>
          <h1 className="font-bold">{SuccessStoriesTitleData.description}</h1>
        </div>

        {/* First Row */}
        <div className="flex gap-8" data-aos="fade-up">
          {/* Left Column - Small Stories */}
          <div className="flex gap-8">
            {SuccessStoriesData.slice(0, 2).map((story) => (
              <StoryCard
                key={story._id}
                image={story.image}
                title={story.title}
                subtitle={story.description}
              />
            ))}
          </div>
          {/* Right Column - Big Story */}
          <StoryCard
            image={SuccessStoriesData[2].image}
            title={SuccessStoriesData[2].title}
            subtitle={SuccessStoriesData[2].description}
            large
          />
        </div>

        {/* Second Row */}
        <div className="pt-5 flex gap-8" data-aos="fade-up">
          {/* Left Column - Big Story */}
          <StoryCard
            image={SuccessStoriesData[3].image}
            title={SuccessStoriesData[3].title}
            subtitle={SuccessStoriesData[3].description}
            large
          />
          {/* Right Column - Small Stories */}
          <div className="flex gap-8">
            {SuccessStoriesData.slice(4, 6).map((story) => (
              <StoryCard
                key={story._id}
                image={story.image}
                title={story.title}
                subtitle={story.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for StoryCard component
StoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

// PropTypes for SuccessStoriesPage component
SuccessStoriesPage.propTypes = {
  SuccessStoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  SuccessStoriesTitleData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SuccessStoriesPage;
