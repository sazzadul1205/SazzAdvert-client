import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const CareerSecondBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const axiosPublic = useAxiosPublic();
  const {
    data: BannerCareers2,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["BannerCareers2"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurExperts`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  // Since the API returns an array, get the first object
  const banner =
    BannerCareers2 && BannerCareers2.length > 0 ? BannerCareers2[0] : null;

  return (
    <div className="bg-[#FFE6E6]">
      <div
        className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5"
        data-aos="fade-up"
      >
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{banner.title}</p>
          <h1 className="text-[34px] font-bold mb-6">{banner.description}</h1>
          <h1 className="text-[16px] mb-12">{banner.content}</h1>
          <NavLink to={"/OurTeam"}>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              MEET THE TEAM {">"}
            </button>
          </NavLink>
        </div>
        <div className="w-[612px] h-[623px]">
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="w-full h-full rounded z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerSecondBanner;
