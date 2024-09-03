import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const AddFAQ = ({ onClose, onSuccess }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post(`/FAQ`, data);

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Question
        </label>
        <textarea
          {...register("question", { required: true })}
          className="input input-bordered bg-white w-full h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Answer
        </label>
        <textarea
          {...register("answer", { required: true })}
          className="input input-bordered bg-white w-full h-24"
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

export default AddFAQ;

AddFAQ.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
