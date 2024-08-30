import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Plaques = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  // API Fetch
  const axiosPublic = useAxiosPublic();
  const { data: plaquesData, isLoading } = useQuery({
    queryKey: ["Plaques"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Plaques`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  // Ensure that the data is properly loaded and structured
  const Plaques = plaquesData && plaquesData[0];

  return (
    <div className="bg-white py-20 text-black p">
      <div
        className="flex justify-between mx-auto max-w-[1200px] pb-20 border-b"
        data-aos="fade-up"
      >
        {/* Avatars */}
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-4">
            {Plaques.avatars.map((avatar, index) => (
              <div key={index} className="avatar border-none">
                <div className="w-12 rounded-full">
                  <img
                    src={avatar.src}
                    alt={avatar.alt}
                    className="border-white border-2"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg">Meet Our Expert {">"}</p>
        </div>
        {/* Awards */}
        <div className="flex items-center">
          <img src={Plaques.awards.src} alt="Award" />
          <div className="ml-5">
            <p className="font-semibold">{Plaques.awards.title}</p>
            <p>
              <span className="font-bold mr-1 text-lg">
                {Plaques.awards.clients}
              </span>
              {Plaques.awards.description}
            </p>
          </div>
        </div>
        {/* Review */}
        <div>
          <div className="flex">
            <p className="mr-10">{Plaques.review.reviewOn}</p>
            <div className="rating">
              {Array.from({ length: Plaques.review.stars }).map((_, index) => (
                <input
                  key={index}
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked={index === 1}
                />
              ))}
            </div>
          </div>
          <div className="flex">
            <img className="mr-10" src={Plaques.review.src} alt="Clutch" />
            <p>{Plaques.review.reviews}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plaques;
