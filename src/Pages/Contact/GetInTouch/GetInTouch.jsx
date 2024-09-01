import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Adjust the animation duration (in ms)
      once: false, // Whether the animation should happen only once
    });
  }, []);

  // API fetch for Success Stories
  const axiosPublic = useAxiosPublic();
  const {
    data: GetInTouchContact,
    isLoading: GetInTouchContactLoading,
    error: GetInTouchContactError,
  } = useQuery({
    queryKey: ["GetInTouchContact"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/GetInTouchContact`);
      return res.data;
    },
  });

  // API fetch for Title Data
  const {
    data: GetInTouchData,
    isLoading: GetInTouchLoading,
    error: GetInTouchError,
  } = useQuery({
    queryKey: ["GetInTouchTitleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=GetInTouch`);
      return res.data[0];
    },
  });

  // Handle loading and error states
  if (GetInTouchContactLoading || GetInTouchLoading) {
    return <Loader></Loader>;
  }

  if (GetInTouchContactError || GetInTouchError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-14 text-black">
      <div className="max-w-[1200px] mx-auto">
        {/* Titles */}
        <div className="w-[648px] text-center mx-auto pb-10">
          <p className="text-[17px] font-semibold">{GetInTouchData.title}</p>
          <h1 className="font-bold text-3xl ">{GetInTouchData.description}</h1>
        </div>

        {/* InTouch content */}
        <div className="flex bg-white border border-black rounded-xl">
          
          {/* Left side */}
          <div className="bg-black px-20 py-16 rounded-2xl">
            {GetInTouchContact.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 text-white p-8 rounded-2xl mb-5"
              >
                <p className="text-[22px] mb-5 font-bold">{item.title}</p>
                <div className="flex items-center">
                  <div className="bg-[#4c4c4c] rounded-full w-16 h-16 flex justify-center items-center">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="ml-5 w-[270px] ">
                    {item.details.map((detail, i) => (
                      <p key={i} className="pt-2">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="px-14 py-16">
            <div className="pb-4">
              <label className="font-semibold"> Your Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
            </div>
            <div className="pb-4">
              <label className="font-semibold"> Your Email</label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
            </div>
            <div className="pb-4">
              <label className="font-semibold"> Your Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
            </div>
            <div className="pb-4">
              <label className="font-semibold"> Your Subject</label>
              <input
                type="text"
                placeholder="Enter your subject"
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
            </div>
            <label className="font-semibold"> Your Message</label>

            <textarea
              className="textarea textarea-bordered mt-4 bg-[#f2f2f8] w-[500px] h-[100px] rounded-XL"
              placeholder="Bio"
            ></textarea>

            <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none mt-5">
              SUBMIT NOW {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
