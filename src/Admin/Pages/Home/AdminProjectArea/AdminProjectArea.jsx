import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const AdminProjectArea = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedProjectArea, setSelectedProjectArea] = useState(null);
  const axiosPublic = useAxiosPublic();

  // API Fetch
  const {
    data: projectAreaData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ProjectAreaComponent"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/ProjectAreaComponent`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const { leftSection, rightSectionImage } = projectAreaData[0];

  const onSubmit = async (data) => {
    const updatedProjectArea = {
      leftSection: [
        {
          imageUrl: data.imageUrl1,
          stat: data.stat1,
          description: data.description1,
        },
        {
          imageUrl: data.imageUrl2,
          stat: data.stat2,
          description: data.description2,
        },
      ],
      rightSectionImage: data.rightSectionImage,
    };

    try {
      const res = await axiosPublic.put(
        `/ProjectAreaComponent/${selectedProjectArea._id}`,
        updatedProjectArea
      );
      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          "Project Area Updated!",
          "Project area has been updated successfully."
        );
        refetch();
        onCloseModal();
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Update Project Area",
        "An error occurred while updating the project area."
      );
      onCloseModal();
    }
  };

  const showSuccessAlert = (title, text) => {
    Swal.fire({
      title,
      text,
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  const showErrorAlert = (title, text) => {
    Swal.fire({
      icon: "error",
      title,
      text,
    });
  };

  const handleEditClick = (projectArea) => {
    setSelectedProjectArea(projectArea);
    reset({
      imageUrl1: projectArea.leftSection[0].imageUrl,
      stat1: projectArea.leftSection[0].stat,
      description1: projectArea.leftSection[0].description,
      imageUrl2: projectArea.leftSection[1].imageUrl,
      stat2: projectArea.leftSection[1].stat,
      description2: projectArea.leftSection[1].description,
      rightSectionImage: projectArea.rightSectionImage,
    });
    document.getElementById("Modal_AdminHome").showModal();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_AdminHome").close();
    setSelectedProjectArea(null);
    reset(); // Reset the form fields
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Project Area</p>
        <button
          className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
          onClick={() => handleEditClick(projectAreaData[0])}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Project Content */}
      <div className="p-5 bg-gray-200 mt-2 rounded-xl">
        {/* Title */}

        <img
          src={rightSectionImage}
          alt="Project Area"
          className="w-[500px] mx-auto rounded-xl pt-5"
        />

        {/* Icons And More */}
        <div className="p-10 flex justify-center ">
          {leftSection.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-[500px] space-x-4 shadow-xl bg-black p-5 rounded-xl ml-2"
            >
              <img
                src={item.imageUrl}
                alt={item.description}
                className="bg-slate-900 p-4 rounded-full"
              />
              <div className="text-white">
                <p className="text-4xl font-bold">{item.stat}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Modal */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Project Area</h3>
            <div className="py-4">
              {/* Left Section */}
              <div className="pt-2 border-t border-black mt-2">
                <p className="text-xl font-semibold">Left Section</p>
                <div>
                  <div className="form-control">
                    <label className="label">Icon 1 Image URL</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("imageUrl1", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Icon 1 Stat</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("stat1", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Icon 1 Description</label>
                    <textarea
                      className="textarea textarea-bordered bg-white"
                      {...register("description1", { required: true })}
                    ></textarea>
                  </div>

                  <div className="form-control">
                    <label className="label">Icon 2 Image URL</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("imageUrl2", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Icon 2 Stat</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("stat2", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Icon 2 Description</label>
                    <textarea
                      className="textarea textarea-bordered bg-white"
                      {...register("description2", { required: true })}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Right Section Image */}
              <div className="pt-2 border-t border-black mt-2">
                <p className="text-xl font-semibold pt-2">
                  Right Section Image
                </p>
                <div className="form-control">
                  <label className="label">Image URL</label>
                  <input
                    type="text"
                    className="input input-bordered bg-white"
                    {...register("rightSectionImage", { required: true })}
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
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

export default AdminProjectArea;
