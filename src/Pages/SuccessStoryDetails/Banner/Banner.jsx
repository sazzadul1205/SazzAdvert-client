import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";


const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: BannerSuccess,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["BannerSuccess"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Success`);
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
    <div className="bg-gradient-to-b to-white from-[#FFE6E6]">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{BannerSuccess.title}</p>
          <h1 className="text-[34px] font-bold mb-6">
            {BannerSuccess.description}
          </h1>
          <h1 className="text-[16px] mb-12 leading-relaxed">
            {BannerSuccess.content}
          </h1>
          <NavLink to={"/Contacts"}>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              GET YOUR FREE CUSTOM PROPOSAL {">"}
            </button>
          </NavLink>
        </div>
        <div className="relative w-[522px] h-[365px]">
          <div className="absolute top-4 left-4 bg-red-500 rounded-xl w-full h-full z-0 "></div>
          <img
            src={BannerSuccess.imageUrl}
            alt={BannerSuccess.imageUrl}
            className="relative w-full h-full rounded-xl z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
