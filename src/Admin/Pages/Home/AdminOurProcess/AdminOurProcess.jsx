import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateOurProcessContent from "./UpdateOurProcessContent/UpdateOurProcessContent";
import AddOurProcess from "./AddOurProcess/AddOurProcess";

const AdminOurProcess = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [selectedTitle, setSelectedTitle] = useState(null);

  // Fetching Title Data
  const {
    data: titleData,
    isLoading: titleDataLoading,
    error: titleDataError,
    refetch,
  } = useQuery({
    queryKey: ["titleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=OurProcess`);
      return res.data;
    },
  });

  // Fetching Our Process Cards Data
  const {
    data: OurProcessCards,
    isLoading: cardsLoading,
    error: cardsError,
    refetch: OurProcessRefetch,
  } = useQuery({
    queryKey: ["OurProcessCards"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/OurProcess`);
      return res.data;
    },
  });

  // Update Title Data
  const onSubmit = async (data) => {
    const updatedTitle = {
      title: data.title,
      description: data.description,
      img: data.img,
    };

    try {
      const res = await axiosPublic.put(
        `/TitleDatas/${selectedTitle._id}`,
        updatedTitle
      );
      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          "Title Updated!",
          "The title has been updated successfully."
        );
        refetch();
        onCloseModal();
        reset();
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Update Title",
        "An error occurred while updating the title."
      );
    }
  };

  // Loading state
  if (titleDataLoading || cardsLoading) {
    return <Loader />;
  }

  // Error state
  if (titleDataError || cardsError) {
    return <p>Error loading data.</p>;
  }

  // Extracting the first item of titleData array
  const title = titleData?.[0];

  // Handle edit button click
  const handleEditClick = (titleData) => {
    setSelectedTitle(titleData);
    reset({
      title: titleData.title,
      description: titleData.description,
      img: titleData.img,
    });
    document.getElementById("Modal_Title_Update").showModal();
  };

  const reloadContents = () => {
    OurProcessRefetch();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_Title_Update").close();
    setSelectedTitle(null);
  };

  // Delete
  const handleDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/OurProcess/${itemId}`);
        OurProcessRefetch();
        showSuccessAlert(
          "Item Deleted!",
          "The item has been deleted successfully."
        );
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Delete Item",
        "An error occurred while deleting the item."
      );
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Our Process</p>
      </div>

      {/* Content Section */}
      <div className="mt-2">
        {/* Title Section */}
        <div className="bg-blue-50 rounded-xl p-2 mb-5">
          <div className="flex justify-between p-2 border-b border-black">
            <p className="text-xl font-bold">Title</p>
            <button
              className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
              onClick={() => handleEditClick(title)}
            >
              <FaEdit className="mr-5" />
              <p>Edit</p>
            </button>
          </div>
          <div className="w-[600px] text-center mx-auto py-2">
            <p className="text-xl font-semibold text-gray-600">
              {title?.title}
            </p>
            <h1 className="text-4xl font-bold leading-tight mt-4">
              {title?.description}
            </h1>
            <img src={title?.img} alt="Title image" />
          </div>
        </div>

        {/* Our Process Section */}
        <div className="bg-gray-100 rounded-xl">
          <div className="border-b p-2 border-black flex justify-between">
            <p className="text-lg font-bold">Our Process</p>
            <button
              type="button"
              className="text-white py-2 px-6 rounded-lg bg-green-500 hover:bg-green-400 hover:text-black"
              onClick={() =>
                document.getElementById("Add_New_Modal").showModal()
              }
            >
              + Add New Content
            </button>
          </div>
          <table className="table w-full rounded-xl ">
            {/* Table Header */}
            <thead>
              <tr className="text-black">
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {OurProcessCards.map((card) => (
                <tr key={card._id} className="py-5 px-4">
                  <td className="py-2 px-4 font-bold">{card.title}</td>
                  <td className="py-5 px-4 text-base font-normal">
                    {card.description}
                  </td>
                  <td className="py-2 px-4">
                    {/* Buttons */}
                    <div className="pt-5">
                      <div>
                        <button
                          type="button"
                          className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 w-24 mb-2"
                          onClick={() =>
                            document
                              .getElementById(
                                `WhatDoWeDo_Content_Modal_${card._id}`
                              )
                              .showModal()
                          }
                        >
                          Edit
                        </button>
                        {/* Update Content modal */}
                        <dialog
                          id={`WhatDoWeDo_Content_Modal_${card._id}`}
                          className="modal"
                        >
                          <div className="modal-box bg-white">
                            <div>
                              <h3 className="font-bold text-lg text-center text-black">
                                Update Content
                              </h3>
                            </div>
                            <UpdateOurProcessContent
                              key={card._id}
                              OurProcess={card}
                              onSuccess={reloadContents}
                              onClose={() =>
                                document
                                  .getElementById(
                                    `WhatDoWeDo_Content_Modal_${card._id}`
                                  )
                                  .close()
                              }
                            />
                          </div>
                        </dialog>
                      </div>
                      <button
                        type="button"
                        className="text-white py-2 px-6 rounded-lg bg-red-500 hover:bg-red-400 w-24"
                        onClick={() => handleDelete(card._id, card.title)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {/* Update Title Modal */}
      <dialog id="Modal_Title_Update" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Title</h3>
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
                <label className="label">Description</label>
                <textarea
                  className="textarea textarea-bordered bg-white"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">Image</label>
                <input
                  type="url"
                  className="input input-bordered bg-white"
                  {...register("img", { required: true })}
                />
              </div>
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
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Add New Content Modal */}
      <dialog id="Add_New_Modal" className="modal">
      <div className="modal-box bg-white">
          <div>
            <h3 className="font-bold text-lg text-center">Add New Content</h3>
          </div>
          <AddOurProcess
            onSuccess={reloadContents}
            onClose={() => document.getElementById("Add_New_Modal").close()}
          />
        </div>
      </dialog>
    </div>
  );
};

// Helper functions for showing alerts
const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonText: "OK",
    confirmButtonColor: "#3085d6",
  });
};

const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonText: "OK",
    confirmButtonColor: "#d33",
  });
};

const showConfirmationAlert = async (title, text, confirmButtonText) => {
  return await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText,
  });
};

export default AdminOurProcess;
