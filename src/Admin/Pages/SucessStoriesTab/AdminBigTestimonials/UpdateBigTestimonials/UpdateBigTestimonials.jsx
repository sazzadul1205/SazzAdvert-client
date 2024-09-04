import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateBigTestimonials = ({ BigTestimonials, onSuccess, onClose }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: BigTestimonials.image,
      content: BigTestimonials.content,
      name: BigTestimonials.name,
      position: BigTestimonials.position,
    },
  });
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const updatedBigTestimonials = {
      image: data.image,
      content: data.content,
      name: data.name,
      position: data.position,
    };

    try {
      const res = await axiosPublic.put(
        `/BigTestimonials/${BigTestimonials._id}`,
        updatedBigTestimonials
      );
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Testimonial updated successfully!",
        });
        onSuccess();
        reset(); // Reset the form after successful submission
        onClose(); // Close the modal
      } else {
        throw new Error("No changes were made.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to update testimonial.",
      });
      console.error("Error updating testimonial:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="text"
          {...register("image", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <textarea
          {...register("content", { required: true })}
          className="input input-bordered bg-white w-full h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Position
        </label>
        <input
          type="text"
          {...register("position", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
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
            reset(); // Reset the form when closing the modal
            onClose(); // Close the modal
          }}
        >
          Close
        </button>
      </div>
    </form>
  );
};

UpdateBigTestimonials.propTypes = {
  BigTestimonials: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateBigTestimonials;
