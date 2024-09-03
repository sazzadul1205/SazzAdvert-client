import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";
import { useQuery } from "@tanstack/react-query";

const Marketing = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const axiosPublic = useAxiosPublic();

  // Fetch chapters data
  const {
    data: MarketChapters,
    isLoading: MarketChaptersLoading,
    error: MarketChaptersError,
  } = useQuery({
    queryKey: ["MarketChapters"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/MarketChapters`);
      return res.data;
    },
  });

  // Fetch sidebar links
  const {
    data: MarketSidebar,
    isLoading: MarketSidebarLoading,
    error: MarketSidebarError,
  } = useQuery({
    queryKey: ["MarketSidebar"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/MarketSidebar`);
      return res.data;
    },
  });

  // Fetch banner data
  const { data: BannerMarket, isLoading } = useQuery({
    queryKey: ["BannerMarket"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Market`);
      return res.data[0]; // Assuming you only need the first object
    },
  });

  if (MarketChaptersLoading || MarketSidebarLoading || isLoading) {
    return <Loader />;
  }

  if (MarketChaptersError || MarketSidebarError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-[#FFE6E6]">
      <div className="max-w-[1200px] mx-auto text-black">
        {/* Render banner image if available */}
        {BannerMarket && (
          <img
            src={BannerMarket.imageUrl.replace(/['"]/g, "")} // Remove single quotes from the URL
            alt="Marketing Banner"
          />
        )}
        <div className="flex pt-10 justify-between">
          {/* Main Content */}
          <div className="w-[850px] mr-32">
            <p className="text-4xl font-bold mb-5">Paid search marketing</p>
            {MarketChapters?.map((chapter, index) => (
              <div key={index}>
                <p className="font-bold pb-3">{chapter.title}</p>
                <p className="pb-8 leading-relaxed">{chapter.content}</p>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <div className="w-[310px]">
            <div className="bg-white p-10 font-semibold rounded-xl">
              {MarketSidebar?.map((link, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 hover:text-red-500 cursor-pointer"
                >
                  <NavLink to={link.link}>
                    <p className="underline">{link.title}</p>
                  </NavLink>
                  <p className="text-red-500">{">"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
