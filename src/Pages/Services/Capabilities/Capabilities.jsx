import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Capabilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // API Fetch
  const axiosPublic = useAxiosPublic();

  const {
    data: Capabilities,
    isLoading: CapabilitiesLoading,
    error: CapabilitiesError,
  } = useQuery({
    queryKey: ["Capabilities"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Capabilities`);
      return res.data;
    },
  });

  const {
    data: CapabilitiesTitle,
    isLoading: CapabilitiesTitleLoading,
    error: CapabilitiesTitleError,
  } = useQuery({
    queryKey: ["CapabilitiesTitle"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=Capabilities`);
      return res.data[0];
    },
  });

  if (CapabilitiesLoading || CapabilitiesTitleLoading) {
    return <Loader></Loader>;
  }

  if (CapabilitiesError || CapabilitiesTitleError) {
    return <p>Error loading data.</p>;
  }

  return (
    <div className="bg-gradient-to-b to-white from-[#FFE6E6] py-12 text-black">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="w-[645px] mx-auto text-center pb-20">
          <p className="font-semibold">{CapabilitiesTitle.title}</p>
          <h1 className="font-bold text-4xl">
            {CapabilitiesTitle.description}
          </h1>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-4 gap-10">
          {Capabilities.slice(0, 8).map((card) => (
            <div
              key={card.id}
              className="h-[390px] w-[300px] bg-white rounded-xl p-10 transform transition-transform duration-300 hover:-translate-y-2 sha"
            >
              <div className="bg-gray-200 rounded-full w-16 h-16 flex justify-center items-center mb-5">
                <img src={card.image} alt={card.title} />
              </div>
              <h1 className="text-xl mb-4 font-bold">{card.title}</h1>
              <p className="text-base font-normal mb-9">{card.description}</p>
              <button className="font-medium hover:text-red-500">
                READ MORE <span className="text-red-500">{">"}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
