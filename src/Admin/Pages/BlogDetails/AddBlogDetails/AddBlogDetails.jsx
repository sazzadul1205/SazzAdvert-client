import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useEffect } from "react";

const AddBlogDetails = ({ onSuccess, onClose }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, setValue } = useForm();

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
      contentImages: [
        data.contentImage1,
        data.contentImage2,
        data.contentImage3,
      ], // Collect content images as an array
      socialMedia: [
        { icon: "FaFacebook", link: data.facebook },
        { icon: "FaLinkedin", link: data.linkedin },
        { icon: "FaTwitter", link: data.twitter },
        { icon: "FaInstagram", link: data.instagram },
        { icon: "FaYoutube", link: data.youtube },
      ],
      tags: data.tags,
      category: data.category,
    };

    try {
      const response = await axiosPublic.post(`/BlogsDetails`, updatedBlogs);

      if (response.data.insertedId) {
        Swal.fire(
          "Blog Added!",
          "The new blog details have been added.",
          "success"
        );
        reset();
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      Swal.fire("Error", "An error occurred while adding the blog.", "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
      {/* Posted Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Posted Date
        </label>
        <input
          type="text"
          {...register("postedDate", { required: true })}
          className="input input-bordered bg-white w-full text-white"
          readOnly // Make it read-only as it is auto-filled
        />
      </div>
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
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
          <input
            type="text"
            {...register("contentImage1")}
            placeholder="Content Image 1 URL"
            className="input input-bordered bg-white w-full"
          />
          <input
            type="text"
            {...register("contentImage2")}
            placeholder="Content Image 2 URL"
            className="input input-bordered bg-white w-full"
          />
          <input
            type="text"
            {...register("contentImage3")}
            placeholder="Content Image 3 URL"
            className="input input-bordered bg-white w-full"
          />
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
      {/* Social Media Links */}
      <div className="border border-gray-300 p-5 rounded-2xl space-y-4">
        <label className="block text-sm font-medium text-gray-700 pb-3 border-b border-black">
          Social Media Links
        </label>
        {/* Facebook */}
        <div className="p-2 flex items-center">
          <FaFacebook className="text-3xl mr-2" />
          <input
            type="text"
            {...register("facebook")}
            placeholder="Facebook Link"
            className="input input-bordered bg-white w-full"
          />
        </div>
        {/* Linkedin */}
        <div className="p-2 flex items-center">
          <FaLinkedin className="text-3xl mr-2" />
          <input
            type="text"
            {...register("linkedin")}
            placeholder="Linkedin Link"
            className="input input-bordered bg-white w-full"
          />
        </div>
        {/* Twitter */}
        <div className="p-2 flex items-center">
          <FaTwitter className="text-3xl mr-2" />
          <input
            type="text"
            {...register("twitter")}
            placeholder="Twitter Link"
            className="input input-bordered bg-white w-full"
          />
        </div>
        {/* Instagram */}
        <div className="p-2 flex items-center">
          <FaInstagram className="text-3xl mr-2" />
          <input
            type="text"
            {...register("instagram")}
            placeholder="Instagram Link"
            className="input input-bordered bg-white w-full"
          />
        </div>
        {/* Youtube */}
        <div className="p-2 flex items-center">
          <FaYoutube className="text-3xl mr-2" />
          <input
            type="text"
            {...register("youtube")}
            placeholder="Youtube Link"
            className="input input-bordered bg-white w-full"
          />
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

AddBlogDetails.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddBlogDetails;
