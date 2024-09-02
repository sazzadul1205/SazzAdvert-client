import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const OurTeamContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // API fetch
  const axiosPublic = useAxiosPublic();

  const {
    data: OurTeam,
    isLoading: OurTeamLoading,
    error: OurTeamError,
  } = useQuery({
    queryKey: ["OurTeam"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/OurTeam`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: OurTeamTitleData,
    isLoading: titleDataLoading,
    error: titleDataError,
  } = useQuery({
    queryKey: ["OurTeamTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=OurTeam`);
      return res.data[0];
    },
  });

  // Handle loading and error states
  if (OurTeamLoading || titleDataLoading) {
    return <Loader></Loader>;
  }

  if (OurTeamError || titleDataError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="bg-[#FFE6E6] pb-20">
      <div className="max-w-[1200px] mx-auto text-black">
        <div className="w-[600px] mx-auto text-center py-16">
          <p className="font-semibold text-lg">{OurTeamTitleData.title}</p>
          <h1 className="font-bold">{OurTeamTitleData.description}</h1>
        </div>
        <div className="grid grid-cols-3 gap-28 pb-16 border-b border-gray-300">
          {OurTeam.map((member, index) => (
            <div key={index} className="relative w-[500px] h-[350px] mb-20">
              <div className="absolute top-10 left-16 bg-[#f5f4f4] rounded-xl w-[350px] h-[400px] z-0"></div>
              <div className="relative flex">
                <img
                  src={member.img}
                  className="relative w-[350px] h-[350px] rounded z-10"
                />
                <div className="z-10 ml-5 mt-20">
                  {member.icons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={icon.image}
                        alt={`icon-${index}`}
                        className="mb-4"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute left-20 z-20 px-4 py-2 rounded-md">
                <p className="font-bold text-xl pt-3">{member.name}</p>
                <p className="text-base">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamContent;
