import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const { data: BannerOurExperts, isLoading } = useQuery({
    queryKey: ["BannerOurExperts"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurExperts2`);
      return res.data[0];
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-[#FFE6E6] py-14 text-black">
      <div className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 ">
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{BannerOurExperts.title}</p>
          <h1 className="text-[34px] font-bold mb-6">
            {BannerOurExperts.description}
          </h1>
          <h1 className="text-[16px] mb-12 leading-relaxed">
            {BannerOurExperts.content}
          </h1>
        </div>
        <div className=" w-[612px] h-[545px]">
          <img
            src={BannerOurExperts.imageUrl}
            alt={BannerOurExperts.imageUrl}
            className=" w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
