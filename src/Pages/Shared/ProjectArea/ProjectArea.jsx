import PA1 from "../../../assets/Home/PA1.jpg";
import pai1 from "../../../assets/Home/projAre/pai1.png";
import pai2 from "../../../assets/Home/projAre/pai2.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);
  return (
    <div className="bg-gradient-to-b from-white to-[#FFE6E6] pt-12">
      <div
        data-aos="fade-up"
        className="bg-black max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[450px] rounded-3xl overflow-hidden"
      >
        {/* Left Section */}
        <div className="p-10 flex flex-col justify-center space-y-10 lg:w-[35%]">
          <div className="flex items-center space-x-4">
            <img
              src={pai1}
              alt="Years driving growth"
              className="bg-slate-900 p-4 rounded-full"
            />
            <div className="text-white">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-lg">Years driving growth</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={pai2}
              alt="Projects complete successfully"
              className="bg-slate-900 p-4 rounded-full"
            />
            <div className="text-white">
              <p className="text-4xl font-bold">1450+</p>
              <p className="text-lg">Projects complete successfully</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[65%]">
          <img
            src={PA1}
            alt="Project Area"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;
