import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";
import { useQuery } from "@tanstack/react-query";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
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
        const res = await axiosPublic.get(`/TitleDatas?page=GetInTouch`);
        return res.data[0]; 
      },
    });

    // Fetch job listings
    const {
      data: jobListings,
      isLoading: jobLoading,
      error: jobError,
    } = useQuery({
      queryKey: ["GetInTouch"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/GetInTouch`);
        return res.data; 
      },
    });

    if (titleLoading || jobLoading) {
      return <Loader />;
    }

    if (titleError || jobError) {
      return <div>Error loading data.</div>; 
    }

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="text-center justify-center mx-auto text-black pb-10">
          <p className="text-[17px] font-semibold">{titleData?.title}</p>
          <h1 className="text-[36px] w-full max-w-[648px] font-semibold mx-auto">
            {titleData?.description}
          </h1>
        </div>

        {/* Get In Touch */}
        <div className="pb-20 space-y-5" data-aos="fade-up">
          {jobListings?.map((job, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white text-black flex justify-between items-center px-10 py-10 rounded-xl shadow-md"
            >
              <div>
                <p className="font-semibold text-[24px]">{job.title}</p>
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center">
                    <CiLocationOn className="text-3xl bg-gray-200 rounded-full p-1" />
                    <p className="ml-2">{job.location}</p>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="text-3xl bg-gray-200 rounded-full p-1" />
                    <p className="ml-2">{job.type}</p>
                  </div>
                  <div className="flex items-center">
                    <FaRegCalendarAlt className="text-3xl bg-gray-200 rounded-full p-1" />
                    <p className="ml-2">{job.date}</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn text-black bg-white px-10 rounded-3xl hover:bg-[#ef4335] hover:text-white hover:border-none">
                  VIEW DETAILS {">"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
