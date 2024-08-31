import PropTypes from "prop-types";
import { useForm, useFieldArray } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateBlogs = ({ Blogs, onSuccess, onClose }) => {
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: {
      categories: Blogs?.categories || [],
    },
  });
  const axiosPublic = useAxiosPublic();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "categories",
  });

  const onSubmit = async (data) => {
    const updatedBlog = {
      postedBy: data.postedBy,
      title: data.title,
      categories: data.categories,  
      imageUrl: data.imageUrl,
    };

    try {
      const res = await axiosPublic.put(`/Blogs/${Blogs._id}`, updatedBlog);
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Blog updated successfully!",
        });
        onSuccess();
        onClose();
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update blog.",
      });
      console.error("Error updating blog:", error);
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
          defaultValue={Blogs?.postedBy}
          {...register("postedBy", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <textarea
          defaultValue={Blogs?.title}
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
          defaultValue={Blogs?.imageUrl}
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

export default UpdateBlogs;

UpdateBlogs.propTypes = {
  Blogs: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    postedBy: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
