import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: AwardWiningAgencyBanner,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["AwardWiningAgencyBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=AwardWiningAgency`);
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
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">
            {AwardWiningAgencyBanner.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {AwardWiningAgencyBanner.description}
          </h1>
          <h1 className="text-[16px] mb-12">
            {AwardWiningAgencyBanner.content}
          </h1>
          <NavLink to={"/contacts"}>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              GET YOUR FREE CUSTOM PROPOSAL {">"}
            </button>
          </NavLink>
        </div>
        <div className="relative w-[522px] h-[365px]">
          <div className="absolute top-5 left-4 bg-red-500 rounded-xl w-full h-full z-0 "></div>
          <img
            src={AwardWiningAgencyBanner.imageUrl}
            alt={AwardWiningAgencyBanner.imageUrl}
            className="relative w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
