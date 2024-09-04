import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";

const AddTeam = ({ onClose, onSuccess }) => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const newTeamMember = {
      name: data.name,
      position: data.position,
      img: data.img,
      icons: [
        { image: "https://i.imgur.com/qQkTy5O.png", link: data.linkedIn },
        { image: "https://i.imgur.com/rSFiE5Z.png", link: data.twitter },
        { image: "https://i.imgur.com/tRG4Kcm.png", link: data.github },
        { image: "https://i.imgur.com/MGhvc1F.png", link: data.facebook },
      ],
    };

    try {
      const response = await axiosPublic.post(`/OurTeam`, newTeamMember);

      if (response.data.insertedId) {
        Swal.fire(
          "Team Member Added!",
          "The new team member has been added.",
          "success"
        );
        reset();
        onSuccess();
        onClose();
      }
    } catch (error) {
      console.error("Error adding team member:", error);
      Swal.fire(
        "Error",
        "An error occurred while adding the team member.",
        "error"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
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
          {...register("position", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          type="text"
          {...register("img", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      {/* Social Media Links */}
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img
            src={"https://i.imgur.com/qQkTy5O.png"}
            alt={"https://i.imgur.com/qQkTy5O.png"}
          />
        </label>
        <input
          type="text"
          {...register("linkedIn", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img
            src={"https://i.imgur.com/rSFiE5Z.png"}
            alt={"https://i.imgur.com/rSFiE5Z.png"}
          />
        </label>
        <input
          type="text"
          {...register("twitter", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img
            src={"https://i.imgur.com/tRG4Kcm.png"}
            alt={"https://i.imgur.com/tRG4Kcm.png"}
          />
        </label>
        <input
          type="text"
          {...register("github", { required: true })}
          className="input input-bordered bg-white w-full"
        />
      </div>
      <div className="flex items-center gap-5">
        <label className="block text-sm font-medium text-gray-700">
          <img
            src={"https://i.imgur.com/MGhvc1F.png"}
            alt={"https://i.imgur.com/MGhvc1F.png"}
          />
        </label>
        <input
          type="text"
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

export default AddTeam;

AddTeam.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
