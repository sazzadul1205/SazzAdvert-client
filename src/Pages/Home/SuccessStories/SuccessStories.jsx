import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SuccessStories1 from "../../../assets/Home/Sucess/SuccessStories1.jpg";
import SuccessStories2 from "../../../assets/Home/Sucess/SuccessStories2.jpg";
import SuccessStories3 from "../../../assets/Home/Sucess/SuccessStories3.jpg";
import icon from "../../../assets/Home/Sucess/SuccessStoriesForward.png";
import title from "../../../assets/Home/Sucess/SuccessStoriesTitle.png";
import { NavLink } from "react-router-dom";

const successStoriesData = [
  {
    id: 1,
    image: SuccessStories1,
    icon: icon,
    title: "HiBootstrap",
    description: "Premium Themes",
  },
  {
    id: 2,
    image: SuccessStories2,
    icon: icon,
    title: "Bolster",
    description: "eCommerce",
  },
  {
    id: 3,
    image: SuccessStories3,
    icon: icon,
    title: "Shoponix",
    description: "eCommerce",
  },
];

const TitleData = [
  {
    title: "SUCCESS STORIES",
    page: "SuccessStories",
    description: "Driving success through strategic paid search advertising!",
    img: title,
  },
];

const SuccessStories = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div className="flex max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="flex flex-col space-y-6">
          {/* First Row */}
          <div className="flex space-x-6">
            {successStoriesData.slice(0, 2).map((story) => (
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
                    src={icon}
                    alt="icon"
                    className="bg-slate-900 p-2 rounded-full hover:bg-white"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="relative">
            {successStoriesData.slice(2).map((story) => (
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
                    src={icon}
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
          <img src={TitleData[0].img} alt="Title" className="mb-16" />
          <p className="font-semibold">{TitleData[0].title}</p>
          <h1 className="font-bold text-4xl pb-16">
            {TitleData[0].description}
          </h1>
          <NavLink to={`/${TitleData[0].page}`}>
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
