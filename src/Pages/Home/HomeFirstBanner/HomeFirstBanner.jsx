import ban1 from "../../../assets/Home/ban1.png";
const HomeFirstBanner = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFE6E6] to-white">
      <div className="hero max-w-[1200px] mx-auto text-black">
        <div className="hero-content text-center pt-40 ">
          <div className="">
            <h1 className="text-[70px] font-bold w-[1000px]">
              Boost your business with results-driven paid search ads!
            </h1>
            <p className="text-[20px] pb-5">
              Our seasoned team of paid search specialists leverages
              cutting-edge technology.
            </p>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335] ">
              LETS TALK {" >"}
            </button>
          </div>
        </div>
      </div>
      <div className="border-b w-[1200px] mx-auto">
        <img src={ban1} alt="" className="w-[1080px] h-[540px] mx-auto pb-10" />
      </div>
    </div>
  );
};

export default HomeFirstBanner;
