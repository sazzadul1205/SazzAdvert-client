import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";
import { useQuery } from "@tanstack/react-query";

const OurProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  const axiosPublic = useAxiosPublic();

  // Fetch title data
  const {
    data: titleData,
    isLoading: titleLoading,
    error: titleError,
  } = useQuery({
    queryKey: ["titleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=OurProcess`);
      return res.data[0];
    },
  });

  // Fetch process steps data
  const {
    data: OurProcessProcess,
    isLoading: OurProcessLoading,
    error: OurProcessError,
  } = useQuery({
    queryKey: ["OurProcess"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/OurProcess`);
      return res.data;
    },
  });

  if (titleLoading || OurProcessLoading) {
    return <Loader />;
  }

  if (titleError || OurProcessError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-[#FFE6E6] text-black py-12">
      <div className="max-w-[1200px] mx-auto bg-white pb-20">
        <div className="text-center w-[600px] mx-auto pt-20">
          <p className="font-semibold">{titleData?.title}</p>
          <h1 className="font-bold">{titleData?.description}</h1>
        </div>
        <div className="pt-10 px-20">
          <div className="grid grid-cols-3 gap-14" data-aos="fade-up">
            {OurProcessProcess.map((step) => (
              <div key={step._id} className="items-start text-gray-400">
                <div className="group cursor-pointer">
                  <p className="text-[75px] mr-4 mt-2 font-bold pt-12 text-gray-300 group-hover:text-red-500 transition-colors duration-500 delay-200">
                    {step.num}
                  </p>
                  <div>
                    <h1 className="text-2xl font-semibold text-black">
                      {step.title}
                    </h1>
                    <p className="text-black leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
