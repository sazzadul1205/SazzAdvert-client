import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateFAQ = ({ FAQ, onSuccess, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const updatedFAQ = {
      question: data.question,
      answer: data.answer,

    };

    try {
      const res = await axiosPublic.put(`/FAQ/${FAQ._id}`, updatedFAQ);
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Testimonial updated successfully!",
        });
        onSuccess();
        onClose();
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update testimonial.",
      });
      console.error("Error updating testimonial:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Question
        </label>
        <textarea
          type="text"
          defaultValue={FAQ?.question}
          {...register("question", { required: true })}
          className="input input-bordered bg-white w-full h-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Answer
        </label>
        <textarea
          type="text"
          defaultValue={FAQ?.answer}
          {...register("answer", { required: true })}
          className="input input-bordered bg-white w-full h-48"
        />
      </div>

      <div className="modal-action flex justify-between">
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-400"
        >
          Update
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

export default UpdateFAQ;

UpdateFAQ.propTypes = {
  FAQ: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
