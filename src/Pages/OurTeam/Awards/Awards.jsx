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

  // API fetch
  const axiosPublic = useAxiosPublic();

  const {
    data: AwardHome,
    isLoading: stepsLoading,
    error: stepsError,
  } = useQuery({
    queryKey: ["AwardsHome"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/AwardsComponent?Number=1`);
      return res.data[0];
    },
  });

  if (stepsLoading) return <Loader></Loader>;
  if (stepsError) return <div>Error: {stepsError.message}</div>;

  return (
    <div className="bg-[#FFE6E6] py-14 text-black">
      <div
        data-aos="fade-up"
        className="bg-[#faf4f4] max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[390px] rounded-lg overflow-hidden"
      >
        <div className="grid grid-cols-4 p-10">
          {/* Left side with the award image */}
          <div className="bg-[#FFEEEE] mx-auto items-center w-[280px] text-black">
            <img
              src={AwardHome.left.awardImg}
              alt={AwardHome.left.awardAlt}
              className="w-[170px] h-[170px] mx-auto mt-10"
            />
            <h1 className="text-lg text-center">{AwardHome.left.title}</h1>
          </div>

          {/* Right side with the awards data */}
          {AwardHome.right.map((award, index) => (
            <div key={index} className="ml-10 mt-10 text-black">
              <img
                src={award.icon}
                alt={award.title}
                className="bg-[#FFEEEE] p-4 rounded-full"
              />
              <div>
                <h1 className="font-bold text-4xl mb-2">{award.value}</h1>
                <p className="font-semibold text-lg mb-5">{award.title}</p>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
