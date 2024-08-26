import Banner1 from "../../../assets/AboutUs/Banner/Banner1.png";
import icon1 from "../../../assets/AboutUs/Banner/icon1.png";
import icon2 from "../../../assets/AboutUs/Banner/icon2.png";
import logo1 from "../../../assets/AboutUs/Banner/logo1.png";
import logo2 from "../../../assets/AboutUs/Banner/logo2.png";
import logo3 from "../../../assets/AboutUs/Banner/logo3.png";
import logo4 from "../../../assets/AboutUs/Banner/logo4.png";
import logo5 from "../../../assets/AboutUs/Banner/logo5.png";

const FirstBanner = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFE6E6] to-white">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
        {/* Left */}
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">AWARD WINNING AGENCY</p>
          <h1 className="text-[34px] font-bold mb-6">
            Drive traffic, generate leads, achieve success with our paid search
            services!
          </h1>
          <h1 className="text-[16px] mb-12">
            Transforming your brands online presence and generating meaningful
            results is our top priority at Adli. As a leading paid search ad
            agency,
          </h1>
          <div className=" flex ">
            <div className="items-center mr-10 text-black">
              <img
                src={icon1}
                alt="Years driving growth"
                className="bg-white p-4 rounded-full"
              />
              <div className="mt-4">
                <p className="text-4xl font-bold pb-4">25+</p>
                <p className="text-lg">Years driving growth</p>
              </div>
            </div>
            <div className="items-center  text-black">
              <img
                src={icon2}
                alt="Projects complete successfully"
                className="bg-white p-4 rounded-full"
              />
              <div className="mt-4">
                <p className="text-4xl font-bold pb-4">1450+</p>
                <p className="text-lg">Projects complete successfully</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className=" w-[522px] h-[365px]">
          <div className="relative">
            <div className="absolute top-5 left-4 bg-red-500 rounded-xl w-full h-full z-0 "></div>
            <img
              src={Banner1}
              className="relative w-full h-full rounded-xl z-10"
            />
          </div>
          <div className="flex pt-10 gap-5 justify-center">
            <img src={logo1} alt="" className="w-20" />
            <img src={logo2} alt="" className="w-20" />
            <img src={logo3} alt="" className="w-20" />
            <img src={logo4} alt="" className="w-20" />
            <img src={logo5} alt="" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
