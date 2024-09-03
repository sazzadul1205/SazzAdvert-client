import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

import Sparkles from "../../../assets/Sparkles.png";
import logo from "../../../assets/logo.png";

const CareerFirstBanner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: BannerCareers1,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["BannerCareers1"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Careers1`);
      return res.data[0];
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-[#FFE6E6]">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{BannerCareers1.title}</p>
          <h1 className="text-[34px] font-bold mb-6">{BannerCareers1.heading}</h1>
          <h1 className="text-[16px] mb-12">{BannerCareers1.description}</h1>
          <NavLink to={"/AboutUs"}>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              KNOW MORE ABOUT US {">"}
            </button>
          </NavLink>
        </div>
        {/* Image Section */}
        <div className="relative w-[522px] h-[365px]">
          <div className="absolute top-5 left-4 bg-red-500 rounded-xl w-full h-full z-0"></div>
          <img
            src={BannerCareers1.imageUrl}
            alt={BannerCareers1.description}
            className="absolute top-0 left-0 w-full h-full rounded-xl object-cover z-10"
          />
          <img
            src={Sparkles}
            alt="Sparkles"
            className="absolute left-[-80px]  w-[130px] z-20"
          />
          <img
            src={logo}
            alt="Logo"
            className="absolute bottom-10 right-9 w-[100px] z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerFirstBanner;
