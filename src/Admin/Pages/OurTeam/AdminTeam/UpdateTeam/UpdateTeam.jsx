import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateTeam = ({ Team, onSuccess, onClose }) => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const updatedTeam = {
      name: data.name,
      position: data.position,
      img: data.img,
      icons: [
        { image: Team.icons[0].image, link: data.linkedIn },
        { image: Team.icons[1].image, link: data.twitter },
        { image: Team.icons[2].image, link: data.github },
        { image: Team.icons[3].image, link: data.facebook },
      ],
    };

    try {
      const res = await axiosPublic.put(`/OurTeam/${Team._id}`, updatedTeam);
      if (res.data.modifiedCount === 1) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Team member updated successfully!",
        });
        onSuccess();
        onClose();
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update team member.",
      });
      console.error("Error updating team member:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          defaultValue={Team?.name}
          {...register("name", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Position */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Position
        </label>
        <input
        type="text"
          defaultValue={Team?.position}
          {...register("position", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="text"
          defaultValue={Team?.img}
          {...register("img", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Social Media Links */}
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img src={Team.icons[0].image} alt={Team.icons[0].image} />
        </label>
        <input
          type="text"
          defaultValue={Team?.icons[0]?.link}
          {...register("linkedIn", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img src={Team.icons[1].image} alt={Team.icons[1].image} />
        </label>
        <input
          type="text"
          defaultValue={Team?.icons[1]?.link}
          {...register("twitter", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img src={Team.icons[2].image} alt={Team.icons[2].image} />
        </label>
        <input
          type="text"
          defaultValue={Team?.icons[2]?.link}
          {...register("github", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img src={Team.icons[3].image} alt={Team.icons[3].image} />
        </label>
        <input
          type="text"
          defaultValue={Team?.icons[3]?.link}
          {...register("facebook", { required: true })}
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
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default UpdateTeam;

UpdateTeam.propTypes = {
  Team: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

  