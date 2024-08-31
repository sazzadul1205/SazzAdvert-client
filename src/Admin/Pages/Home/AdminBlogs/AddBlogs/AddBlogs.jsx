import PropTypes from "prop-types";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const AddBlogs = ({ onClose, onSuccess }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosPublic.post(`/Blogs`, data);

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
          PostedBy
        </label>
        <input
          type="text"
          {...register("postedBy", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <textarea
          {...register("title", { required: true })}
          className="input input-bordered bg-white w-full h-24"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Categories
        </label>
        <div className="space-y-2">
          {fields.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <input
                type="text"
                {...register(`categories.${index}`)}
                className="input input-bordered bg-white w-full"
              />
              <button
                type="button"
                className="bg-red-500 text-white px-2 text-lg py-2 rounded hover:bg-red-400"
                onClick={() => remove(index)}
              >
                Delete
              </button>
            </div>
          ))}
          {fields.length < 2 && (
            <button
              type="button"
              className="bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => append("")}
            >
              Add Category
            </button>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          ImageUrl
        </label>
        <input
          type="text"
          {...register("imageUrl", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>

      {/* Button */}
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

export default AddBlogs;

AddBlogs.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
