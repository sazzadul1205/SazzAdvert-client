import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loader from "../../../../Components/Loader";

const AdminAwards = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [selectedAward, setSelectedAward] = useState(null);

  // Fetching AwardsComponent Cards Data
  const {
    data: AwardsComponentSection,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["AwardsComponentCards"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/AwardsComponent?Number=1`);
      return res.data[0]; // Assuming the response is an array and you're selecting the first item
    },
  });

  // Handle Loading and Error States
  if (isLoading) return <Loader />;
  if (error) return <p>Error loading awards data.</p>;

  const onSubmit = async (data) => {
    const updatedAwards = {
      Number: data.Number,
      left: {
        awardImg: data.awardImg,
        awardAlt: data.awardAlt,
        title: data.title,
      },
      right: [
        {
          icon: data.icon1,
          value: data.value1,
          title: data.title1,
          description: data.description1,
        },
        {
          icon: data.icon2,
          value: data.value2,
          title: data.title2,
          description: data.description2,
        },
        {
          icon: data.icon3,
          value: data.value3,
          title: data.title3,
          description: data.description3,
        },
      ],
    };

    try {
      const res = await axiosPublic.put(
        `/AwardsComponent/${selectedAward._id}`,
        updatedAwards
      );
      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          "Awards Updated!",
          "Awards have been updated successfully."
        );
        refetch();
        onCloseModal();
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Update Awards",
        "An error occurred while updating the Awards."
      );
      onCloseModal();
    }
  };

  const handleEditClick = (award) => {
    setSelectedAward(award);
    reset({
      Number: award.Number,
      awardImg: award.left.awardImg,
      awardAlt: award.left.awardAlt,
      title: award.left.title,
      icon1: award.right[0]?.icon,
      value1: award.right[0]?.value,
      title1: award.right[0]?.title,
      description1: award.right[0]?.description,
      icon2: award.right[1]?.icon,
      value2: award.right[1]?.value,
      title2: award.right[1]?.title,
      description2: award.right[1]?.description,
      icon3: award.right[2]?.icon,
      value3: award.right[2]?.value,
      title3: award.right[2]?.title,
      description3: award.right[2]?.description,
    });
    document.getElementById("Modal_AdminHome").showModal();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_AdminHome").close();
    setSelectedAward(null);
    reset();
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between pb-3 border-b border-red-500">
        <p className="font-bold text-2xl">Awards</p>
        <button
          className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
          onClick={() => handleEditClick(AwardsComponentSection)}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-indigo-100 rounded-xl p-2 mt-2">
        <div>
          {/* Left side with the award image */}
          <div>
            <p className="font-bold text-xl">Award Plaque: </p>
            <div className="bg-[#FFEEEE] text-black py-5 w-[250px] mx-auto">
              {AwardsComponentSection && (
                <>
                  <img
                    src={AwardsComponentSection.left.awardImg}
                    alt={AwardsComponentSection.left.awardAlt}
                    className="w-[170px] h-[170px] mx-auto"
                  />
                  <h1 className="text-lg text-center mt-4 font-bold">
                    {AwardsComponentSection.left.title}
                  </h1>
                </>
              )}
            </div>
          </div>

          {/* Right side with the awards data */}
          <div className="border-t border-black">
            <p className="font-bold text-xl">Award Content: </p>
            <div className="grid grid-cols-3">
              {AwardsComponentSection?.right?.map((award, index) => (
                <div
                  key={index}
                  className="ml-10 mt-10 text-black shadow-xl p-5 bg-white"
                >
                  <img
                    src={award.icon}
                    alt={award.title}
                    className="bg-[#FFEEEE] p-4 rounded-full"
                  />
                  <div>
                    <h1 className="font-bold text-4xl mb-2">{award.value}</h1>
                    <p className="font-semibold text-lg mb-5">{award.title}</p>
                    <p>{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* Update Modal */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Awards</h3>
            <div>
              <p className="font-bold">Left Section</p>
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
                  <label className="label">Image URL</label>
                  <input
                    type="url"
                    className="input input-bordered bg-white"
                    {...register("awardImg", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Alt Text</label>
                  <input
                    type="text"
                    className="input input-bordered bg-white"
                    {...register("awardAlt", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="pb-5 font-bold">Right Section</p>
              {[1, 2, 3].map((i) => (
                <div key={i} className="pt-5 border-t border-black ">
                  <p className="font-semibold">Content-{i}</p>
                  <div className="py-4">
                    <div className="form-control">
                      <label className="label">Icon {i}</label>
                      <input
                        type="url"
                        className="input input-bordered bg-white"
                        {...register(`icon${i}`, { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Value {i}</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register(`value${i}`, { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Title {i}</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register(`title${i}`, { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Description {i}</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register(`description${i}`, { required: true })}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="modal-action justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white py-4 px-10 rounded-xl hover:bg-green-400"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-red-500 text-white py-4 px-10 rounded-xl hover:bg-red-400"
                onClick={onCloseModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AdminAwards;

// Utility functions for alerts
const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: "success",
    title: title,
    text: text,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  });
};

const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  });
};
