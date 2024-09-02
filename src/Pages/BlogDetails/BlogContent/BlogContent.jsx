import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowLeft,
  FaArrowRight,
  FaTags,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

// Mapping of icon names to actual components
const iconMap = {
  FaFacebook: FaFacebook,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaYoutube: FaYoutube,
};

const BlogContent = () => {
  const [currentBlogNumber, setCurrentBlogNumber] = useState(1);
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();

  // Scroll to top whenever currentBlogNumber changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use 'auto' for instant scroll
    });
  }, [currentBlogNumber]);

  // Comment Post
  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post(`/Comments`, data);

      if (response.data.insertedId) {
        Swal.fire(
          "Comment Added!",
          "The new Comment has been added.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error Posting Comment:", error);
      Swal.fire(
        "Error",
        "An error occurred while Posting the comment.",
        "error"
      );
    }
  };

  // Fetching Blog Details data
  const {
    data: BlogsDetailsData,
    isLoading: BlogsDetailsLoading,
    error: BlogsDetailsError,
  } = useQuery({
    queryKey: ["BlogsDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/BlogsDetails`);
      return res.data;
    },
  });

  // Loading state
  if (BlogsDetailsLoading) {
    return <Loader />;
  }

  // Error state
  if (BlogsDetailsError) {
    return <p>Error loading data.</p>;
  }

  // Ensure BlogsDetailsData is defined and has items
  const blogDetails = BlogsDetailsData || [];
  const currentBlog = blogDetails.find(
    (blog) => blog.BlogNumber === currentBlogNumber
  );

  const handleNext = () => {
    setCurrentBlogNumber((prev) => {
      if (prev < blogDetails.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handlePrevious = () => {
    setCurrentBlogNumber((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="text-black">
      {/* Banner Image */}
      <div>
        <img
          src={currentBlog?.bannerImage || "/default-banner.jpg"}
          alt="Blog Banner"
          className="rounded-2xl w-full"
        />

        {/* Date */}
        <p className="mt-4 text-sm">
          {currentBlog?.postedDate || "No Date Available"}
        </p>

        {/* Title */}
        <p className="font-bold text-3xl py-5">
          {currentBlog?.title || "No Title Available"}
        </p>

        {/* Content Blocks */}
        <div className="pt-3 leading-relaxed">
          <p className="pt-3 leading-relaxed">
            {currentBlog?.content1 || "No Content Available"}
          </p>
          <p className="pt-3 leading-relaxed">{currentBlog?.content2 || ""}</p>
        </div>

        {/* Content Images */}
        <div className="flex gap-5 mt-5">
          {currentBlog?.contentImages?.[0] && (
            <img
              src={currentBlog.contentImages[0]}
              alt="Content Image 1"
              className="w-1/3 rounded-xl"
            />
          )}
          <div className="w-2/3">
            {currentBlog?.contentImages?.[1] && (
              <img
                src={currentBlog.contentImages[1]}
                alt="Content Image 2"
                className="h-[200px] w-[500px] mb-5 rounded-xl"
              />
            )}
            {currentBlog?.contentImages?.[2] && (
              <img
                src={currentBlog.contentImages[2]}
                alt="Content Image 3"
                className="h-[200px] w-[500px] rounded-xl"
              />
            )}
          </div>
        </div>

        {/* More Content Blocks */}
        <div className="leading-relaxed">
          <p className="mt-5 leading-relaxed">{currentBlog?.content3 || ""}</p>
          <p className="mt-5 leading-relaxed">{currentBlog?.content4 || ""}</p>
        </div>

        {/* Bottom Part */}
        <div className="flex justify-between mt-16 pb-10 border-b">
          <div className="flex text-2xl">
            <FaTags className="mt-1" />
            <p className="font-semibold ml-2 text-lg">
              {currentBlog?.tags || "No Tags"}
            </p>
          </div>

          <div className="flex gap-2 text-3xl">
            <p className="text-xl">Share</p>
            {currentBlog?.socialMedia?.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <NavLink to={item.link || "#"} key={index} className="ml-2">
                  {IconComponent && <IconComponent />}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-5">
          <button
            className={`flex gap-2 font-semibold text-lg items-center hover:text-red-500 ${
              currentBlogNumber === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrevious}
            disabled={currentBlogNumber === 1}
          >
            <FaArrowLeft />
            <p>Previous Post</p>
          </button>
          <button
            className={`flex gap-2 font-semibold text-lg items-center hover:text-red-500 ${
              currentBlogNumber === blogDetails.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleNext}
            disabled={currentBlogNumber === blogDetails.length}
          >
            <p>Next Post</p>
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Comment Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-black mt-20 px-20 py-12 rounded-2xl"
      >
        <h1 className="font-bold text-2xl">Post A Comment</h1>
        <textarea
          className="textarea textarea-bordered bg-[#F2F2F8] w-full h-36 rounded-2xl border mt-4"
          placeholder="Comments"
          {...register("Comment", { required: "Comment is required" })}
        ></textarea>
        <div className="flex gap-10 mt-5 text-black">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs bg-[#F2F2F8] rounded-2xl"
            {...register("Name", { required: "Name is required" })}
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs bg-[#F2F2F8] rounded-2xl"
            {...register("Email", { required: "Email is required" })}
          />
          <input
            type="url"
            placeholder="Website"
            className="input input-bordered w-full max-w-xs bg-[#F2F2F8] rounded-2xl"
            {...register("Website", { required: "Website is required" })}
          />
        </div>
        <div className="form-control mt-5">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="checkbox mr-2" />
            <span className="mb-0">
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none mt-5"
        >
          SUBMIT NOW {">"}
        </button>
      </form>
    </div>
  );
};

export default BlogContent;
