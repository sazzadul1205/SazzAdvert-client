import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const SuccessStories = () => {
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
    return <Loader />;
  }

  if (storiesError || titleDataError) {
    return (
      <div>
        Error loading data: {storiesError?.message || titleDataError?.message}
      </div>
    );
  }

  const StoryCard = ({ story, large = false }) => (
    <div
      className={`relative group ${
        large ? "w-[580px] h-[280px]" : "w-[280px] h-[280px]"
      }`}
    >
      <NavLink to={`/SuccessStoryDetails/${story.id}`}>
        <img
          src={story.image}
          className="rounded-xl w-full h-full object-cover"
          alt={story.title}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl mx-5 p-3 mb-5">
          <div>
            <p className="text-2xl text-white pb-2">{story.title}</p>
            <p className="text-gray-300">{story.description}</p>
          </div>
          <img
            src={story.icon}
            className="bg-slate-900 p-2 rounded-full group-hover:bg-white transition-colors"
            alt="icon"
          />
        </div>
      </NavLink>
    </div>
  );

  StoryCard.propTypes = {
    story: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
    large: PropTypes.bool,
  };

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div
        className="flex justify-center max-w-[1200px] mx-auto"
        data-aos="fade-up"
      >
        {/* Left Section */}
        <div className="flex flex-col space-y-6 w-full lg:w-auto">
          {/* First Row */}
          <div className="flex space-x-6">
            {fetchedSuccessStories.slice(0, 2).map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          {/* Second Row */}
          {fetchedSuccessStories.length > 2 && (
            <StoryCard story={fetchedSuccessStories[2]} large />
          )}
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[530px] lg:ml-24 text-black mt-16 lg:mt-20">
          <img
            src={fetchedTitleData.img}
            alt="Title"
            className="mb-8 lg:mb-16 w-full lg:w-auto"
          />
          <p className="font-semibold">{fetchedTitleData.title}</p>
          <h1 className="font-bold text-4xl pb-8 lg:pb-14">
            {fetchedTitleData.description}
          </h1>
          <NavLink to={`/Careers`}>
            <button className="font-medium hover:text-red-500 flex items-center">
              VIEW MORE <FaChevronRight className="ml-2 text-red-500 text-xl"/>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
