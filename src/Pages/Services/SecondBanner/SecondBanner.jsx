import Banner2 from "../../../assets/Services/Banner2.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="bg-[#f2f2f8] py-14 text-black">
      <div
        data-aos="fade-up"
        className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 "
      >
        <div className=" w-[612px] h-[623PXpx]">
          <img src={Banner2} alt="" className=" w-full h-full rounded z-10" />
        </div>
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">OUR EXPERTS</p>
          <h1 className="text-[34px] font-bold mb-6">
            Beyond the Glow of Screens: Unraveling the Timeless Spell of Offline
            Advertising Magic
          </h1>
          <h1 className="text-[16px] mb-12">
            Transforming your {"brand's"} online presence and generating
            meaningful results is our top priority at Adli. As a leading paid
            search ad agency,
          </h1>
          <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
            MEET THE TEAM {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
