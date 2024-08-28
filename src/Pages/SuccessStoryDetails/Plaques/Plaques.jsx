import Award from "../../../assets/Home/Plaque/award.png";
import clutch from "../../../assets/Home/Plaque/clutch.png";
import plaque1 from "../../../assets/Home/Plaque/Plaque1.jfif";
import plaque2 from "../../../assets/Home/Plaque/Plaque2.jfif";
import plaque3 from "../../../assets/Home/Plaque/Plaque3.jfif";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Plaques = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-white py-20 text-black p">
      <div className="flex justify-between mx-auto bg-[#FAF4F4] max-w-[1200px] py-12 px-6 rounded-2xl">
        {/* Avatars */}
        <div className="flex items-center space-x-4" data-aos="fade-up">
          <div className="flex -space-x-4 ">
            <div className="avatar border-none ">
              <div className="w-12 rounded-full">
                <img src={plaque1} className="border-white border-2" />
              </div>
            </div>
            <div className="avatar border-none ">
              <div className="w-12 rounded-full">
                <img src={plaque2} className="border-white border-2" />
              </div>
            </div>
            <div className="avatar border-none ">
              <div className="w-12 rounded-full">
                <img src={plaque3} className="border-white border-2" />
              </div>
            </div>
          </div>
          <p className="text-lg">Meet Our Expert {">"}</p>
        </div>
        {/* Awards */}
        <div className="flex items-center" data-aos="fade-up">
          <img src={Award} alt="" />
          <div className="ml-5 ">
            <p className="font-semibold">Award Winning Agency</p>
            <p>
              <span className="font-bold mr-1 text-lg">3500+</span>Active
              Clients
            </p>
          </div>
        </div>
        {/* Review */}
        <div data-aos="fade-up">
          <div className="flex">
            <p className="mr-10">Review On</p>
            <div className="rating ">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="flex">
            <img className="mr-10" src={clutch} alt="" />
            <p>1500+ Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plaques;
