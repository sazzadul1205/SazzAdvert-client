import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Awards = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // API fetch
  const axiosPublic = useAxiosPublic();

  const {
    data: AwardServiceDetails,
    isLoading: stepsLoading,
    error: stepsError,
  } = useQuery({
    queryKey: ["AwardsHome"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/AwardsComponent?Number=2`);
      return res.data[0];
    },
  });

  if (stepsLoading) return <Loader></Loader>;
  if (stepsError) return <div>Error: {stepsError.message}</div>;

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-12">
      <div className="bg-[#EF4335] max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[390px] rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 p-10" data-aos="fade-up">
          <div className="bg-[#FFEEEE] mx-auto items-center w-[280px] text-black rounded-2xl">
            <img
              src={AwardServiceDetails.left.awardImg}
              alt={AwardServiceDetails.left.awardAlt}
              className="w-[170px] h-[170px] mx-auto mt-10"
            />
            <h1 className="text-lg text-center">
              {AwardServiceDetails.left.title}
            </h1>
          </div>
          {AwardServiceDetails.right.map((item, index) => (
            <div key={index} className="ml-10 mt-10 text-[#FFEEEE]">
              <img
                src={item.icon}
                alt={item.title}
                className="bg-[#FFEEEE] p-4 rounded-full"
              />
              <div>
                <h1 className="font-bold text-4xl mb-2">{item.value}</h1>
                <p className="text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
