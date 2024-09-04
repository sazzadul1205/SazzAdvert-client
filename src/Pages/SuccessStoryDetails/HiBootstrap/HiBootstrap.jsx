import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const HiBootstrap = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);
  // API fetch
  const axiosPublic = useAxiosPublic();

  const {
    data: BannerHiBootStrap,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["BannerHiBootStrap"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=HiBootStrap`);
      return res.data[0];
    },
  });

  const {
    data: HiBootStrap,
    isLoading: HiBootStrapLoading,
    error: HiBootStrapError,
  } = useQuery({
    queryKey: ["HiBootStrap"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/HiBootStrap`);
      return res.data;
    },
  });

  if (isLoading || HiBootStrapLoading) return <Loader></Loader>;
  if (isError || HiBootStrapError)
    return <div>Error: {HiBootStrapError.message}</div>;

  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6]">
      <div className="max-w-[1200px] mx-auto text-black">
        <div className="flex pt-10 justify-between">
          {/* Main Content */}
          <div className="" data-aos="fade-up">
            <p className="text-4xl font-bold mb-5">HiBootstrap</p>
            {HiBootStrap.map((chapter, index) => (
              <div key={index}>
                <p className="font-bold pb-3">{chapter.title}</p>
                <p className="pb-8 leading-relaxed w-[630px]">
                  {chapter.content}
                </p>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <div className="">
            <div>
              <img
                src={BannerHiBootStrap.imageUrl}
                alt={BannerHiBootStrap.imageUrl}
                className=" rounded-3xl w-[500px] h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiBootstrap;
