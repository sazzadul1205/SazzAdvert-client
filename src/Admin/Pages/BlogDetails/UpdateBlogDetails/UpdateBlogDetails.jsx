import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Mapping of icon names to actual components
const iconMap = {
  FaFacebook: FaFacebook,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaYoutube: FaYoutube,
};

const UpdateBlogDetails = ({ Blogs, onSuccess, onClose }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      bannerImage: Blogs?.bannerImage || "",
      postedDate: Blogs?.postedDate || "",
      title: Blogs?.title || "",
      content1: Blogs?.content1 || "",
      content2: Blogs?.content2 || "",
      content3: Blogs?.content3 || "",
      content4: Blogs?.content4 || "",
      contentImages: Blogs?.contentImages || [],
      socialMedia: Blogs?.socialMedia || [
        { icon: "FaFacebook", link: "" },
        { icon: "FaLinkedin", link: "" },
        { icon: "FaTwitter", link: "" },
        { icon: "FaInstagram", link: "" },
        { icon: "FaYoutube", link: "" },
      ],
      tags: Blogs?.tags || "",
      category: Blogs?.category || "",
    },
  });

  // Format the date as 'Month dd, yyyy'
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    // Set the posted date to the current date in the format 'Month dd, yyyy'
    const today = new Date();
    const formattedDate = formatDate(today);
    setValue("postedDate", formattedDate); // Set the formatted date as the default value
  }, [setValue]);

  const onSubmit = async (data) => {
    const updatedBlogs = {
      bannerImage: data.bannerImage,
      postedDate: data.postedDate,
      title: data.title,
      content1: data.content1,
      content2: data.content2,
      content3: data.content3,
      content4: data.content4,
      contentImages: data.contentImages,
      socialMedia: data.socialMedia.map((item) => ({
        icon: item.icon, // Fixed icon
        link: item.link || "", // Ensure link is set
      })),
      tags: data.tags,
      category: data.category,
    };

    try {
      const res = await axiosPublic.put(
        `/BlogsDetails/${Blogs._id}`,
        updatedBlogs
      );
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Blog updated successfully!",
        });
        onSuccess();
        reset(); // Reset the form after successful submission
      } else {
        throw new Error("No changes were made.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to update blog.",
      });
      console.error("Error updating blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Posted Date - automatically updated and disabled */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Posted Date
        </label>
        <input
          type="text"
          {...register("postedDate", { required: true })}
          className="input input-bordered bg-white w-full"
          disabled
        />
      </div>
      {/* Banner Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Banner Image
        </label>
        <input
          type="text"
          {...register("bannerImage", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Contents */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i}>
          <label className="block text-sm font-medium text-gray-700">{`Content ${i}`}</label>
          <textarea
            {...register(`content${i}`, { required: true })}
            className="input input-bordered bg-white w-full h-56"
          />
        </div>
      ))}
      {/* Content Images */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content Images
        </label>
        <div className="space-y-2">
          {Blogs?.contentImages?.map((image, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                {...register(`contentImages.${index}`, { required: true })}
                className="input input-bordered bg-white w-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Tags */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Tags</label>
        <input
          type="text"
          {...register("tags", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Social Media */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Social Media Links
        </label>
        <div className="space-y-2">
          {Blogs?.socialMedia?.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <label className="block text-sm font-medium text-gray-700">
                {iconMap[item.icon]
                  ? React.createElement(iconMap[item.icon])
                  : null}
              </label>
              <input
                type="text"
                {...register(`socialMedia.${index}.link`)}
                className="input input-bordered bg-white w-full"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input
          type="text"
          {...register("category", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Buttons */}
      <div className="modal-action flex justify-between">
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400"
          onClick={() => {
            reset();
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </form>
  );
};

UpdateBlogDetails.propTypes = {
  Blogs: PropTypes.object.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateBlogDetails;
