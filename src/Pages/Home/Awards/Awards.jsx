import icons from "../../../assets/Home/Awards/aw1.png";
import icon1 from "../../../assets/Home/Awards/icon1.png";
import icon2 from "../../../assets/Home/Awards/icon2.png";
import icon3 from "../../../assets/Home/Awards/icon3.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Awards = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-[#FFE6E6] py-12">
      <div
        data-aos="fade-up"
        className="bg-[#faf4f4] max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[390px] rounded-lg overflow-hidden"
      >
        <div className="grid grid-cols-4 p-10">
          <div className="bg-[#FFEEEE] mx-auto items-center w-[280px] text-black">
            <img
              src={icons}
              alt=""
              className="w-[170px] h-[170px] mx-auto mt-10"
            />
            <h1 className="text-lg text-center">Award Winning Agency</h1>
          </div>
          <div className="ml-10 mt-10 text-black">
            <img
              src={icon1}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">215%</h1>
              <p className="font-semibold text-lg mb-5">Average ROI</p>
              <p>Customers Achieved</p>
            </div>
          </div>
          <div className="ml-10 mt-10 text-black">
            <img
              src={icon2}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">200,000s</h1>
              <p className="font-semibold text-lg mb-5">Ads</p>
              <p>Already Created</p>
            </div>
          </div>
          <div className="ml-10 mt-10 text-black">
            <img
              src={icon3}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">$10</h1>
              <p className="font-semibold text-lg mb-5">Million</p>
              <p>Managed Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
