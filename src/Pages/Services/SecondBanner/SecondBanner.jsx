
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const SecondBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  const axiosPublic = useAxiosPublic();
  const {
    data: OurExpertsBanner,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["OurExpertsBanner"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=OurExperts`);
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
    <div className="bg-[#f2f2f8] py-14 text-black">
      <div
        data-aos="fade-up"
        className="flex justify-between max-w-[1200px] mx-auto h-[720px] pt-10 items-center gap-5 "
      >
        <div className=" w-[612px] h-[623PXpx]">
          <img
            src={OurExpertsBanner.imageUrl}
            alt={OurExpertsBanner.imageUrl}
            className=" w-full h-full rounded z-10"
          />
        </div>
        <div className="text-black w-[535px]">
          <p className="text-lg mb-4 font-semibold">{OurExpertsBanner.title}</p>
          <h1 className="text-[34px] font-bold mb-6">
            {OurExpertsBanner.description}
          </h1>
          <h1 className="text-[16px] mb-12">{OurExpertsBanner.content}</h1>
          <NavLink to={'/OurTeam'}>
            <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
              MEET THE TEAM {">"}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
