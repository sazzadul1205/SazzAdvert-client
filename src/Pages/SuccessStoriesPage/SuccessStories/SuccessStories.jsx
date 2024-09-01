import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";

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
        />
      </div>
    </NavLink>
  </div>
);

const SuccessStoriesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // API fetch for Success Stories
  const axiosPublic = useAxiosPublic();
  const {
    data: fetchedSuccessStories,
    isLoading: storiesLoading,
    error: storiesError,
  } = useQuery({
    queryKey: ["successStoriesData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/SuccessStories`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: fetchedTitleData,
    isLoading: titleDataLoading,
    error: titleDataError,
  } = useQuery({
    queryKey: ["SuccessStoriesTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=SuccessStories`);
      return res.data[0];
    },
  });

  // Handle loading and error states
  if (storiesLoading || titleDataLoading) {
    return <div>Loading...</div>;
  }

  if (storiesError || titleDataError) {
    return <div>Error loading data.</div>;
  }

  // Destructure the fetched title data
  const { title, description } = fetchedTitleData;

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div className="max-w-[1200px] mx-auto gap-8">
        {/* Titles */}
        <div className="text-black text-center w-[640px] mx-auto pb-10">
          <p className="font-semibold">{title}</p>
          <h1 className="font-bold ">{description}</h1>
        </div>

        {/* First Row */}
        <div className="flex gap-8" data-aos="fade-up">
          {/* Left Column - Small Stories */}
          <div className="flex gap-8">
            {fetchedSuccessStories.slice(0, 2).map((story) => (
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
            image={fetchedSuccessStories[2].image}
            title={fetchedSuccessStories[2].title}
            subtitle={fetchedSuccessStories[2].description}
            large
          />
        </div>

        {/* Second Row */}
        <div className="pt-5 flex gap-8" data-aos="fade-up">
          {/* Left Column - Big Story */}
          <StoryCard
            image={fetchedSuccessStories[3].image}
            title={fetchedSuccessStories[3].title}
            subtitle={fetchedSuccessStories[3].description}
            large
          />
          {/* Right Column - Small Stories */}
          <div className="flex gap-8">
            {fetchedSuccessStories.slice(4, 6).map((story) => (
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

export default SuccessStoriesPage;

// PropTypes for StoryCard component
StoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  large: PropTypes.bool,
};
