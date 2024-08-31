import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const AddOurProcess = ({ onClose, onSuccess }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post(`/OurProcess`, data);

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
        <div>
          <label className="block text-sm font-medium text-gray-700">Num</label>
          <input
            type="number"
            {...register("num", { required: true })}
            className="input input-bordered bg-white w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="input input-bordered bg-white w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="input input-bordered bg-white w-full h-24"
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

export default AddOurProcess;

AddOurProcess.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
