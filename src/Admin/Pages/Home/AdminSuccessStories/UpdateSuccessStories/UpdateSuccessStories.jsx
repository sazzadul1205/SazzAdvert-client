import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateSuccessStories = ({ SuccessStories, onSuccess, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const updatedWhatWeDo = {
      title: data.title,
      description: data.description,
      image: data.image,
    };

    try {
      const res = await axiosPublic.put(
        `/SuccessStories/${SuccessStories._id}`,
        updatedWhatWeDo
      );
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Content updated successfully!",
        });
        onSuccess();
        onClose();
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update content.",
      });
      console.error("Error updating content:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          defaultValue={SuccessStories?.title}
          {...register("title", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          defaultValue={SuccessStories?.description}
          {...register("description", { required: true })}
          className="input input-bordered bg-white w-full h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="text"
          defaultValue={SuccessStories?.image}
          {...register("image", { required: true })}
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
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default UpdateSuccessStories;

UpdateSuccessStories.propTypes = {
  SuccessStories: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
