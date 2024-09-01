import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

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
    return <div>Loading...</div>;
  }

  if (storiesError || titleDataError) {
    return <div>Error loading data.</div>;
  }


  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div className="flex max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="flex flex-col space-y-6">
          {/* First Row */}
          <div className="flex space-x-6">
            {fetchedSuccessStories.slice(0, 2).map((story) => (
              <div key={story.id} className="relative">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-[305px] h-[285px] rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl mx-8 my-5 py-4 px-5">
                  <div>
                    <p className="text-2xl text-white pb-2">{story.title}</p>
                    <p className="text-gray-300 pb-2">{story.description}</p>
                  </div>
                  <img
                    src={story.icon}
                    alt="icon"
                    className="bg-slate-900 p-2 rounded-full hover:bg-white"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="relative">
            {fetchedSuccessStories.slice(2).map((story) => (
              <div key={story.id}>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-[635px] h-[285px] rounded-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl w-[540px] mx-8 my-5 py-4 px-5">
                  <div>
                    <p className="text-2xl text-white pb-2">{story.title}</p>
                    <p className="text-gray-300">{story.description}</p>
                  </div>
                  <img
                    src={story.icon}
                    alt="icon"
                    className="bg-slate-900 p-2 rounded-full hover:bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[530px] ml-24 text-black mt-16">
          <img src={fetchedTitleData.img} alt="Title" className="mb-16" />
          <p className="font-semibold">{fetchedTitleData.title}</p>
          <h1 className="font-bold text-4xl pb-16">{fetchedTitleData.description}</h1>
          <NavLink to={`/Careers`}>
            <button className="font-medium hover:text-red-500">
              VIEW MORE <span className="text-red-500">{">"}</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
