import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import { NavLink } from "react-router-dom";

import Sparkles from "../../../assets/Sparkles.png";
import logo from "../../../assets/logo.png";

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: TagsBanner,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["TagsBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Tags`);
      return res.data[0];
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-[#FFE6E6]">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        {/* Text Section */}
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{TagsBanner.title}</p>
          <h1 className="text-[34px] font-bold mb-6">
            {TagsBanner.description}
          </h1>
          <h1 className="text-[16px] mb-12">{TagsBanner.content}</h1>
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
            src={TagsBanner.imageUrl}
            alt={TagsBanner.description}
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

export default Banner;
