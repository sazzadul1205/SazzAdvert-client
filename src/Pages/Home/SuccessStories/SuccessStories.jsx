import sucess1 from "../../../assets/Home/Sucess/Sucess1.jpg";
import sucess2 from "../../../assets/Home/Sucess/Sucess2.jpg";
import sucess3 from "../../../assets/Home/Sucess/Sucess3.jpg";
import icon from "../../../assets/Home/Sucess/icon.png";
import title from "../../../assets/Home/Sucess/title.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SuccessStories = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div className="flex max-w-[1200px] mx-auto " data-aos="fade-up">
        <div className=" flex flex-col space-y-6 ">
          {/* First Row */}
          <div className="flex space-x-6">
            {/* Story 1 */}
            <div className="relative ">
              <img src={sucess1} className="w-[305px] h-[285px] rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl mx-8 my-5 py-4 px-5 ">
                <div>
                  <p className="text-2xl text-white pb-2">HiBootstrap</p>
                  <p className="text-gray-300 pb-2">Premium Themes</p>
                </div>
                <img
                  src={icon}
                  className="bg-slate-900 p-2 rounded-full hover:bg-white"
                />
              </div>
            </div>

            {/* Story 2 */}
            <div className="relative ">
              <img src={sucess2} className="w-[305px] h-[285px] rounded-xl" />
              <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl mx-8 my-5 py-4 px-5 ">
                <div>
                  <p className="text-2xl text-white pb-2">Bolster</p>
                  <p className="text-gray-300 pb-2">eCommerce</p>
                </div>
                <img
                  src={icon}
                  className="bg-slate-900 p-2 rounded-full hover:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="relative">
            <img
              src={sucess3}
              alt="Shoponix"
              className="w-[635px] h-[285px] rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black flex justify-between items-center rounded-xl w-[540px]  mx-8 my-5 py-4 px-5 ">
              <div>
                <p className="text-2xl text-white pb-2">Shoponix</p>
                <p className="text-gray-300">eCommerce</p>
              </div>
              <img
                src={icon}
                className="bg-slate-900 p-2 rounded-full hover:bg-white"
              />
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-[530px] ml-24 text-black mt-16">
          <img src={title} alt="" className="mb-16" />
          <p className="font-semibold">SUCCESS STORIES</p>
          <h1 className="font-bold text-4xl pb-16">
            Driving success through strategic paid search advertising!
          </h1>
          <button className="font-medium hover:text-red-500">
            VIEW MORE <span className="text-red-500">{">"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
