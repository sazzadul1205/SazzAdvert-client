import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import { useState } from "react";

const AdminGetInTouchContact = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, control } = useForm();
  const [selectedData, setSelectedData] = useState(null);
  const [isEditingContact, setIsEditingContact] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "details",
  });

  // Fetching Title Data
  const {
    data: titleData,
    isLoading: titleDataLoading,
    error: titleDataError,
    refetch: refetchTitleData,
  } = useQuery({
    queryKey: ["titleData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TitleDatas?page=GetInTouch`);
      return res.data;
    },
  });

  // Fetching Get In Touch Contact Data
  const {
    data: GetInTouchContact,
    isLoading: GetInTouchContactLoading,
    error: GetInTouchContactError,
    refetch: refetchContactData,
  } = useQuery({
    queryKey: ["GetInTouchContact"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/GetInTouchContact`);
      return res.data;
    },
  });

  // Update Title or Contact Data
  const onSubmit = async (data) => {
    console.log("Form data:", data); // Debugging log

    const url = isEditingContact
      ? `/GetInTouchContact/${selectedData._id}`
      : `/TitleDatas/${selectedData._id}`;
    const updatedData = isEditingContact
      ? {
          title: data.title,
          icon: data.icon,
          details: data.details.map((item) => item.detail), // Ensure details are in the correct format
        }
      : {
          title: data.title,
          description: data.description,
        };

    try {
      console.log("Sending PUT request to:", url); // Debugging log
      const res = await axiosPublic.put(url, updatedData);
      console.log("Response:", res); // Debugging log

      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          `${isEditingContact ? "Contact" : "Title"} Updated!`,
          `The ${
            isEditingContact ? "contact" : "title"
          } has been updated successfully.`
        );
        refetchContactData();
        refetchTitleData();
        onCloseModal();
        reset();
      }
    } catch (error) {
      console.error("Error during update:", error); // Debugging log
      showErrorAlert(
        `Failed to Update ${isEditingContact ? "Contact" : "Title"}`,
        `An error occurred while updating the ${
          isEditingContact ? "contact" : "title"
        }.`
      );
    }
  };

  // Loading state
  if (titleDataLoading || GetInTouchContactLoading) {
    return <Loader />;
  }

  // Error state
  if (titleDataError || GetInTouchContactError) {
    return <p>Error loading data.</p>;
  }

  // Assuming titleData is an array, extract the first item
  const title = titleData?.[0];

  // Handle edit button click for title
  const handleEditClick = (titleData) => {
    setIsEditingContact(false);
    setSelectedData(titleData);
    reset({
      title: titleData.title,
      description: titleData.description,
    });
    const modal = document.getElementById("Modal_Title_Update");
    if (modal) modal.showModal();
  };

  // Handle edit button click for Get In Touch Contact
  const handleContactEditClick = (contactData) => {
    setIsEditingContact(true);
    setSelectedData(contactData);
    reset({
      title: contactData.title,
      icon: contactData.icon,
      details: contactData.details.map((detail) => ({ detail })),
    });
    const modal = document.getElementById("Modal_GetInTouch_Update");
    if (modal) modal.showModal();
  };

  const onCloseModal = () => {
    console.log("Closing modal..."); // Debugging log
    const modal = isEditingContact
      ? document.getElementById("Modal_GetInTouch_Update")
      : document.getElementById("Modal_Title_Update");
    if (modal) {
      modal.close();
      console.log("Modal closed."); // Debugging log
    }
    setSelectedData(null);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Contacts Page</p>
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
          </div>
        </div>

        {/* Contact List */}
        <div className="overflow-x-auto bg-emerald-100 rounded-xl p-2">
          <div className="border-b p-2 border-black flex justify-between">
            <p className="text-lg font-bold">Get In Touch Content</p>
          </div>
          <div className="text-black pt-3">
            {GetInTouchContact.map((item) => (
              <div
                key={item._id}
                className=" p-8 rounded-2xl mb-5 w-[500px] mx-auto shadow-xl"
              >
                <p className="text-[22px] mb-5 font-bold">{item.title}</p>
                <div className="flex items-center">
                  <div className="bg-[#4c4c4c] rounded-full w-16 h-16 flex justify-center items-center">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="ml-5 w-[270px]">
                    {item.details.map((detail, i) => (
                      <p key={i} className="pt-2">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <button
                    className="ml-auto bg-yellow-500 hover:bg-yellow-400 text-white rounded-lg p-2"
                    onClick={() => handleContactEditClick(item)}
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
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

      {/* Update Get In Touch Contact Modal */}
      <dialog id="Modal_GetInTouch_Update" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">
              {isEditingContact ? "Edit Contact" : "Add New Contact"}
            </h3>
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
                <label className="label">Icon URL</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("icon", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">Details</label>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-center mb-2">
                    <input
                      type="text"
                      className="input input-bordered bg-white w-full"
                      {...register(`details.${index}.detail`, {
                        required: true,
                      })}
                      defaultValue={field.detail}
                    />
                    <button
                      type="button"
                      className="ml-2 bg-red-500 text-white rounded px-2 py-1"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-blue-500 text-white rounded px-4 py-2 mt-2"
                  onClick={() => append({ detail: "" })}
                >
                  Add Detail
                </button>
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
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AdminGetInTouchContact;

const showSuccessAlert = (title, text) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    showConfirmButton: false,
    timer: 2000,
  });
};

const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: "error",
    title,
    text,
    showConfirmButton: true,
  });
};
