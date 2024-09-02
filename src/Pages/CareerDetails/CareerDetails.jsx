import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CareerDetails = () => {
  // API Fetch
  const axiosPublic = useAxiosPublic();
  const {
    data: JobDetails,
    isLoading: JobDetailsLoading,
    error: JobDetailsError,
  } = useQuery({
    queryKey: ["JobDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/JobDetails`);
      return res.data[0];
    },
  });

  if (JobDetailsLoading) {
    return <Loader></Loader>;
  }

  if (JobDetailsError) {
    return <p>Error loading data.</p>;
  }

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-36 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white px-12 py-16 rounded-lg shadow-lg">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">{JobDetails.title}</h1>
            <div className="flex space-x-5 text-lg">
              <div className="flex items-center space-x-1">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center ">
                  <FaLocationDot className="text-2xl mx-auto" />
                </div>
                <p>{JobDetails.location}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center ">
                  <FaBriefcase className="text-2xl mx-auto" />
                </div>
                <p>{JobDetails.jobType}</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center ">
                  <FaCalendarAlt className="text-2xl mx-auto" />
                </div>
                <p>{JobDetails.postedDate}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div>
              <h1 className="font-bold text-base">Job Details:</h1>
              <p className="leading-relaxed">{JobDetails.jobDescription}</p>
            </div>

            <div>
              <h1 className="font-bold text-base pt-10">
                Open Number of Positions:
              </h1>
              <p>{JobDetails.openPositions}</p>
            </div>

            <div>
              <h1 className="font-bold text-base pt-10">Responsibilities</h1>
              <p className="mb-6 leading-relaxed">
                {JobDetails.responsibilitiesTop}
              </p>
              <ul className=" ml-5 mb-6">
                {JobDetails.responsibilities.map((responsibility, index) => (
                  <li className="pt-4" key={index}>
                    <span className="font-bold">-</span> {responsibility}
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed">
                Other Skills: {JobDetails.otherSkills}
              </p>
            </div>

            <div>
              <h1 className="font-bold text-base pt-10">
                Ideal Qualifications:
              </h1>
              <ul className="list-disc ml-5 gap-2">
                {JobDetails.qualifications.map((qualification, index) => (
                  <li className="mb-3 leading-relaxed" key={index}>
                    {qualification}
                  </li>
                ))}
              </ul>
            </div>

            <NavLink to={"/Contacts"}>
              <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none mt-9">
                APPLY NOW {">"}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
