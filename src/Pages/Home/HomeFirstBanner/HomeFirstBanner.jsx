import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const HomeFirstBanner = () => {
  const axiosPublic = useAxiosPublic();
  const { data: BannerHome, isLoading } = useQuery({
    queryKey: ["BannerHome"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Home`);
      return res.data;
    },
  });

  console.log(BannerHome);

  if (isLoading) {
    return <Loader></Loader>;
  }

  // Check if BannerHome is an array or object
  const banners = Array.isArray(BannerHome) ? BannerHome : [BannerHome];

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white">
      {banners.map((banner) => (
        <div key={banner._id}>
          <div className="hero max-w-[1200px] mx-auto text-black">
            <div className="hero-content text-center pt-40">
              <div className="">
                <h1 className="text-[70px] font-bold w-[1000px]">
                  {banner.title}
                </h1>
                <p className="text-[20px] pb-5">{banner.description}</p>
                <NavLink to={"/Contacts"}>
                  <button className="btn text-white px-10 rounded-3xl border-none hover:bg-[#ef4335]">
                    LETS TALK {">"}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="border-b w-[1200px] mx-auto">
            <img
              src={banner.imageUrl}
              alt="Banner"
              className="w-[1080px] h-[540px] mx-auto pb-10"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFirstBanner;
