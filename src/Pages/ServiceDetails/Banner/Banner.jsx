import Banner1 from "../../../assets/ServiceDetails/Banner1.png";

const Banner = () => {
  return (
    <div className="bg-[#FFE6E6]">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
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
          <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
            GET YOUR FREE CUSTOM PROPOSAL {">"}
          </button>
        </div>
        <div className="relative w-[522px] h-[365px]">
          <div className="absolute top-5 left-4 bg-red-500 rounded-xl w-full h-full z-0 "></div>
          <img src={Banner1} className="relative w-full h-full rounded z-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
