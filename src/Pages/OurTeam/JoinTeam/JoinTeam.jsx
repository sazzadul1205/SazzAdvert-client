import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import sparkle from "../../../assets/OurTeam/sparkle.png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const JoinTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const axiosPublic = useAxiosPublic();
  const { data: BannerJoinTeam, isLoading } = useQuery({
    queryKey: ["BannerJoinTeam"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=JoinTeam`);
      return res.data[0];
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-white pt-24 pb-24 text-black" >
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="flex relative bg-[#FAF4F4]">
          <img
            src={sparkle}
            alt={sparkle}
            className="w-16 h-16 absolute bottom-20 left-32"
          />
          <div className="w-[670px] mx-auto text-center py-24">
            <h1 className="font-bold">{BannerJoinTeam.title}</h1>
            <p className="pb-5">{BannerJoinTeam.description}</p>
            <NavLink to={"/OurTeam"}>
              <button className="btn text-white px-10 rounded-3xl border-none bg-[#ef4335]">
                JOIN OUR TEAM {">"}
              </button>
            </NavLink>
          </div>
          <img
            src={sparkle}
            alt={sparkle}
            className="w-28 h-24 absolute top-20 right-32"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
