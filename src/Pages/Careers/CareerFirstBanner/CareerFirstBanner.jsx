import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

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
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  // Since the API returns an array, get the first object
  const banner =
    BannerCareers1 && BannerCareers1.length > 0 ? BannerCareers1[0] : null;

  return (
    <div className="bg-[#FFE6E6]">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{banner.title}</p>
          <h1 className="text-[34px] font-bold mb-6">{banner.heading}</h1>
          <h1 className="text-[16px] mb-12">{banner.description}</h1>
          <NavLink to={"/AboutUs"}>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              KNOW MORE ABOUT US {">"}
            </button>
          </NavLink>
        </div>
        <div className="relative w-[522px] h-[365px]">
          <div className="absolute top-5 left-4 bg-red-500 rounded-xl w-full h-full z-0"></div>
          <img
            src={banner.imageUrl}
            alt={banner.imageUrl}
            className="relative w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerFirstBanner;
