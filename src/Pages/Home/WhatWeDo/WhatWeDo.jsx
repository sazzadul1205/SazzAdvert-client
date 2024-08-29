import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  // API Fetch
  const axiosPublic = useAxiosPublic();

  const { data: whatWeDo, isLoading: whatWeDoLoading, error: whatWeDoError } = useQuery({
    queryKey: ["whatWeDo"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/whatWeDo`);
      return res.data;
    },
  });

  const { data: titleData, isLoading: titleDataLoading, error: titleDataError } = useQuery({
    queryKey: ["titleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=WhatWeDo`);
      return res.data;
    },
  });

  if (whatWeDoLoading || titleDataLoading) {
    return <p>Loading...</p>;
  }

  if (whatWeDoError || titleDataError) {
    return <p>Error loading data.</p>;
  }

  return (
    <div className="bg-white text-black py-12">
      <div className="max-w-[1200px] mx-auto flex gap-10" data-aos="fade-up">
        {/* Left Section */}
        <div className="w-full lg:w-[40%]">
          <p className="text-xl font-semibold text-gray-600">
            {titleData?.title || "WHAT WE DO"}
          </p>
          <h1 className="text-4xl font-bold leading-tight mt-4">
            {titleData?.description || "Driving success through strategic paid search advertising!"}
          </h1>
          <NavLink to={"/AboutUs"}>
            <span className="mt-6 inline-block text-black font-semibold hover:text-red-400 cursor-pointer">
              KNOW MORE ABOUT US{" "}
              <span className="text-red-500 text-xl">{">"}</span>
            </span>
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[60%]">
          <p className="text-gray-700 leading-relaxed">
            {titleData?.content || "Transforming your brand's online presence and generating meaningful results is our top priority at Adli. As a leading paid search ad agency, we bring together a unique blend of creativity and data-driven insights to elevate your campaigns."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Dynamically Render Content */}
            {whatWeDo?.map((item) => (
              <div key={item.id} className="items-start gap-4">
                <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center ">
                  <img src={item.imageUrl} alt={item.title} />
                </div>
                <div>
                  <h2 className="py-2 font-bold text-xl pt-8">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
