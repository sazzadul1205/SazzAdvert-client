import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const OurProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // API fetch
  const axiosPublic = useAxiosPublic();

  const {
    data: OurProcessSteps,
    isLoading: stepsLoading,
    error: stepsError,
  } = useQuery({
    queryKey: ["OurProcessSteps"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/OurProcess`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: OurProcessTitleData,
    isLoading: titleDataLoading,
    error: titleDataError,
  } = useQuery({
    queryKey: ["OurProcessTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=OurProcess`);
      return res.data;
    },
  });

  // Handle loading and error states
  if (stepsLoading || titleDataLoading) {
    return <div>Loading...</div>;
  }

  if (stepsError || titleDataError) {
    return <div>Error loading data</div>;
  }

  const { title, description, img } = OurProcessTitleData[0]; // Destructure the first item in TitleData

  return (
    <div className="bg-white text-black pb-10">
      <div className="max-w-[1200px] mx-auto justify-around" data-aos="fade-up">
        {/* Top Section */}
        <div className="text-center w-[648px] mx-auto mb-10">
          <p className="font-semibold text-lg">{title}</p>
          <h1 className="font-bold text-4xl">{description}</h1>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between mt-10 gap-10">
          {/* Left Side */}
          <div className="space-y-10">
            {OurProcessSteps.map((step) => (
              <div
                key={step.num} 
                className="flex items-start hover:text-red-500 text-gray-200"
              >
                <p className="text-[75px] mr-4 mt-2 font-bold pt-12">
                  {step.num}
                </p>
                <div className="w-[445px]">
                  <h1 className="text-2xl font-semibold text-black">
                    {step.title}
                  </h1>
                  <p className="text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="relative">
            <img src={img} alt="Process" className="w-[700px] h-[405px]" />
            <Link to="/Careers">
              <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black text-white px-10 py-4 rounded-3xl hover:bg-[#d93c31] border-none">
                Get Proposal {">"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
