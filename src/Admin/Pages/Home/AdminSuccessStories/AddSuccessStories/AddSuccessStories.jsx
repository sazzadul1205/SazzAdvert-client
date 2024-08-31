import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const AddSuccessStories = ({ onClose, onSuccess }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post(`/SuccessStories`, data);

      if (response.data.insertedId) {
        Swal.fire(
          "Content Added!",
          "The new content has been added.",
          "success"
        );
        reset();
        onSuccess(); // Trigger a re-fetch or update
        onClose(); // Close the modal
      }
    } catch (error) {
      console.error("Error adding content:", error);
      Swal.fire(
        "Error",
        "An error occurred while adding the content.",
        "error"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-4">
        <div className="form-control">
          <label className="label">Title</label>
          <input
            type="text"
            className="input input-bordered bg-white"
            {...register("title", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">Description</label>
          <textarea
            className="textarea textarea-bordered bg-white"
            {...register("description", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">Image URL</label>
          <input
            type="url"
            className="input input-bordered bg-white"
            {...register("image", { required: true })}
          />
        </div>
      </div>
      <div className="modal-action justify-between">
        <button
          type="submit"
          className="bg-green-500 text-white py-4 px-10 rounded-xl hover:bg-green-400"
        >
          Add
        </button>
        <button
          type="button"
          className="bg-red-500 text-white py-4 px-10 rounded-xl hover:bg-red-400"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddSuccessStories;

AddSuccessStories.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
