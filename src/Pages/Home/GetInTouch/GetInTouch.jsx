import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const GetInTouch = () => {
  const jobListings = [
    {
      title: "Online Marketing Manager",
      location: "Texas",
      type: "Full-Time",
      date: "July 29, 2024",
    },
    {
      title: "Social Media Content Manager",
      location: "New York",
      type: "Contract",
      date: "August 5, 2024",
    },
    {
      title: "Software Engineer, Identity Platform (React/Java)",
      location: "California",
      type: "Remote",
      date: "September 10, 2024",
    },
    {
      title: "WordPress Developer",
      location: "California",
      type: "Remote",
      date: "September 10, 2024",
    },
    {
      title: "SEO / Internet Marketer",
      location: "California",
      type: "Remote",
      date: "September 10, 2024",
    },
  ];

  return (
    <div className="  bg-gradient-to-b from-[#FFE6E6] to-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center justify-center mx-auto text-black pb-10">
          <p className="text-[17px] font-semibold">GET IN TOUCH</p>
          <h1 className="text-[36px] w-full max-w-[648px] font-semibold mx-auto">
            Your Gateway to Excellence: Contact Us and Unlock a World of
            Possibilities
          </h1>
        </div>

        {/* Grids */}
        <div className="pb-20 space-y-5">
          {jobListings.map((job, index) => (
            <div
              key={index}
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
