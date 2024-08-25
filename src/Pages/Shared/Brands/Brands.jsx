import B1 from "../../../assets/Home/Brands/B1.png";
import B2 from "../../../assets/Home/Brands/B2.png";
import B3 from "../../../assets/Home/Brands/B3.png";
import B4 from "../../../assets/Home/Brands/B4.png";
import B5 from "../../../assets/Home/Brands/B5.png";
import B6 from "../../../assets/Home/Brands/B6.png";

const Brands = () => {
  return (
    <div className="bg-white pt-5 ">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-xl pb-12 text-black font-semibold">Increase your brand’s revenue with Adli</h1>
        <div className="grid grid-cols-6 pb-24 border-b">
          <img src={B1} alt="" />
          <img src={B2} alt="" />
          <img src={B3} alt="" />
          <img src={B4} alt="" />
          <img src={B5} alt="" />
          <img src={B6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
