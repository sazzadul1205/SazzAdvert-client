import AwardsImg from "../../../assets/ServiceDetails/Awards/AwardsImg.png";
import icon1 from "../../../assets/ServiceDetails/Awards/icon1.png";
import icon2 from "../../../assets/ServiceDetails/Awards/icon2.png";
import icon3 from "../../../assets/ServiceDetails/Awards/icon3.png";

const Awards = () => {
  return (
    <div className=" bg-[#FFE6E6]  py-12">
      <div className="bg-[#EF4335] max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[390px] rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 p-10">
          <div className="bg-[#FFEEEE] mx-auto items-center w-[280px] text-black rounded-2xl">
            <img
              src={AwardsImg}
              alt=""
              className="w-[170px] h-[170px] mx-auto mt-10"
            />
            <h1 className="text-lg text-center">Award Winning Agency</h1>
          </div>
          <div className="ml-10 mt-10 text-[#FFEEEE] ">
            <img
              src={icon1}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">350+</h1>
              <p className=" text-lg ">Happy Clients</p>
            </div>
          </div>
          <div className="ml-10 mt-10 text-[#FFEEEE]">
            <img
              src={icon2}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">3.5 billion</h1>
              <p className="text-lg">Social Impressions</p>
            </div>
          </div>
          <div className="ml-10 mt-10 text-[#FFEEEE]">
            <img
              src={icon3}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">5* Rated</h1>
              <p className="text-lg">Across the Board</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
