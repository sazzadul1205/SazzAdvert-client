import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const GetInTouch = ({ GetInTouchData, GetInTouchTitleData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axiosPublic.post(`/Comments`, data);

      if (response.data.insertedId) {
        Swal.fire(
          "Comment Added!",
          "The new comment has been added.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error Posting Comment:", error);
      Swal.fire(
        "Error",
        "An error occurred while posting the comment.",
        "error"
      );
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-14 text-black">
      <div className="max-w-[1200px] mx-auto">
        {/* Titles */}
        <div className="w-[648px] text-center mx-auto pb-10">
          <p className="text-[17px] font-semibold">
            {GetInTouchTitleData?.title}
          </p>
          <h1 className="font-bold text-3xl">
            {GetInTouchTitleData?.description}
          </h1>
        </div>

        {/* InTouch content */}
        <div className="flex bg-white border border-black rounded-xl">
          {/* Left side */}
          <div className="bg-black px-20 py-16 rounded-2xl">
            {GetInTouchData?.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 text-white p-8 rounded-2xl mb-5"
              >
                <p className="text-[22px] mb-5 font-bold">{item.title}</p>
                <div className="flex items-center">
                  <div className="bg-[#4c4c4c] rounded-full w-16 h-16 flex justify-center items-center">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="ml-5 w-[270px]">
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

          {/* Right side - Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-10 py-12 rounded-2xl"
          >
            {/* Name */}
            <div className="pb-4">
              <label className="font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="pb-4">
              <label className="font-semibold">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="pb-4">
              <label className="font-semibold">Your Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                {...register("phone", { required: "Phone number is required" })}
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Subject */}
            <div className="pb-4">
              <label className="font-semibold">Your Subject</label>
              <input
                type="text"
                placeholder="Enter your subject"
                {...register("subject", { required: "Subject is required" })}
                className="input input-bordered w-[500px] rounded-full bg-[#f2f2f8] mt-2"
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="pb-4">
              <label className="font-semibold">Your Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="textarea textarea-bordered mt-4 bg-[#f2f2f8] w-[500px] h-[100px] rounded-xl"
                placeholder="Your message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none mt-5">
              SUBMIT NOW <FaChevronRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes
GetInTouch.propTypes = {
  GetInTouchData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  GetInTouchTitleData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default GetInTouch;
