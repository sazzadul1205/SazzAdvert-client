import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const FirstBanner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: BannerOurServices,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["BannerOurServices"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurServices`);
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
    BannerOurServices && BannerOurServices.length > 0
      ? BannerOurServices[0]
      : null;

  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6] py-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{banner.title}</p>
          <h1 className="text-[34px] font-bold mb-6">{banner.description}</h1>
          <h1 className="text-[16px] mb-12">{banner.content}</h1>
          <NavLink to={"/AboutUs"}>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              GET YOUR FREE CUSTOM PROPOSAL {">"}
            </button>
          </NavLink>
        </div>
        <div className=" w-[612px] h-[545px]">
          <img
            src={banner.imageUrl}
            alt={banner.imageUrl}
            className=" w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
