import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const AddGetInTouch = ({ onClose, onSuccess }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  // Function to format date as DD Month YYYY
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const onSubmit = async (data) => {
    // Automatically generate today's date
    const today = new Date();

    // Prepare the data with the formatted date
    const newData = {
      title: data.title,
      location: data.location,
      type: data.type,
      date: formatDate(today), // Use today's date
    };

    try {
      const response = await axiosPublic.post(`/GetInTouch`, newData);

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
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register("title", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          {...register("location", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <input
          type="text"
          {...register("type", { required: true })}
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

export default AddGetInTouch;

AddGetInTouch.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
