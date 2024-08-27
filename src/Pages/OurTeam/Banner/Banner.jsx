import Banner1 from "../../../assets/OurTeam/Banner1.png";

const Banner = () => {
  return (
    <div className="bg-[#FFE6E6] py-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
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
        </div>
        <div className=" w-[612px] h-[545px]">
          <img src={Banner1} alt="" className=" w-full h-full rounded z-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
