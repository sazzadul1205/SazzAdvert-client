import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: BannerContactUs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["BannerContactUs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=ContactUs`);
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
    <div className=" bg-[#FFE6E6] pt-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
        <div className="text-black w-[535px]">
          <p className="text-[17px] mb-4 font-semibold">
            {BannerContactUs.title}
          </p>
          <h1 className="text-[34px] font-bold mb-6">
            {BannerContactUs.heading}
          </h1>
          <h1 className="text-[16px] mb-12 leading-relaxed text-[#4C4C4C]">
            {BannerContactUs.description}
          </h1>
        </div>
        <div className=" w-[612px] h-[490px]">
          <img
            src={BannerContactUs.imageUrl}
            alt={BannerContactUs.imageUrl}
            className=" w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
