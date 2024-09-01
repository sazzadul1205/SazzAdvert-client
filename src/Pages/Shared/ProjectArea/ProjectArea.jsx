import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const ProjectArea = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // Ensure animation runs only once
    });
  }, []);

  // API Fetch
  const axiosPublic = useAxiosPublic();
  const {
    data: projectAreaData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["ProjectAreaComponent"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/ProjectAreaComponent`);
      return res.data[0]; 
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="bg-gradient-to-b from-white to-[#FFE6E6] pt-12">
      <div
        data-aos="fade-up"
        className="bg-black max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[450px] rounded-3xl overflow-hidden"
      >
        {/* Left Section */}
        <div className="p-10 flex flex-col justify-center space-y-10 lg:w-[35%]">
          {projectAreaData.leftSection?.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="bg-slate-900 p-4 rounded-full"
              />
              <div className="text-white">
                <p className="text-4xl font-bold">{item.stat}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="lg:w-[65%]">
          <img
            src={projectAreaData.rightSectionImage ?? ""}
            alt="Project Area"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;
