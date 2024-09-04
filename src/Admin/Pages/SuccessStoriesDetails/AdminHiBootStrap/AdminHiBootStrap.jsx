import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Loader from "../../../../Components/Loader";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import UpdateContent from "./UpdateContent/UpdateContent";
import AddContent from "./AddContent/AddContent";

const AdminHiBootStrap = () => {
  // API fetch
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [selectedBanner, setSelectedBanner] = useState(null);

  const {
    data: BannerHiBootStrap,
    isLoading,
    isError,
    refetch: BannerRefetch,
  } = useQuery({
    queryKey: ["BannerHiBootStrap"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=HiBootStrap`);
      return res.data[0];
    },
  });

  const {
    data: HiBootStrap,
    isLoading: HiBootStrapLoading,
    error: HiBootStrapError,
    refetch: HiBootStrapRefetch,
  } = useQuery({
    queryKey: ["HiBootStrap"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/HiBootStrap`);
      return res.data;
    },
  });

  if (HiBootStrapLoading || isLoading) {
    return <Loader />;
  }

  if (HiBootStrapError || isError) {
    return <div>Error loading data.</div>;
  }

  // Banner Update
  const onSubmit = async (data) => {
    if (!selectedBanner) return; // Ensure selectedBanner is not null

    const updatedBanner = {
      imageUrl: data.imageUrl,
    };

    try {
      const res = await axiosPublic.put(
        `/Banners/${selectedBanner._id}`,
        updatedBanner
      );
      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          "Banner Updated!",
          "Banner has been updated successfully."
        );
        BannerRefetch();
        onCloseModal();
      }
    } catch (error) {
      console.error(error.message);
      showErrorAlert(
        "Failed to Update Banner",
        "An error occurred while updating the banner."
      );
      onCloseModal();
    }
  };

  const handleEditClick = (banner) => {
    setSelectedBanner(banner);
    reset({
      imageUrl: banner.imageUrl, // Ensure to reset the form with the current banner URL
    });
    document.getElementById("Modal_Update_Banner").showModal();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_Update_Banner").close();
    setSelectedBanner(null);
  };

  // Market Delete
  const handleDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/HiBootStrap/${itemId}`);
        HiBootStrapRefetch();
        showSuccessAlert(
          "Item Deleted!",
          "The item has been deleted successfully."
        );
      }
    } catch (error) {
      console.error(error.message);
      showErrorAlert(
        "Failed to Delete Item",
        "An error occurred while deleting the item."
      );
    }
  };

  const reloadContents = () => {
    HiBootStrapRefetch();
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">HiBootstrap</p>
      </div>

      {/* Sidebar */}
      <div className="bg-pink-100 rounded-xl p-5 mt-2 ">
        <div className="border-b border-black px-5 py-2 flex justify-between items-center">
          <p className="text-lg font-bold">Boot Strap Image</p>
          <button
            className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
            onClick={() => handleEditClick(BannerHiBootStrap)}
          >
            <FaEdit className="mr-5" />
            <p>Edit</p>
          </button>
        </div>
        <div className="w-[500px] mx-auto pt-5">
          <div className="mx-auto">
            <img
              src={BannerHiBootStrap.imageUrl}
              alt={BannerHiBootStrap.imageUrl}
              className="rounded-3xl w-[500px] h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-amber-100 rounded-xl p-5 mt-4">
        <div className="border-b border-black px-5 py-2 flex justify-between items-center">
          <p className="text-lg font-bold">Boot Strap Content</p>
          <button
            className="px-10 py-1 flex items-center bg-green-500 hover:bg-green-400 rounded-lg text-white hover:text-black text-lg"
            onClick={() =>
              document.getElementById("Add_New_MarketContent_Modal").showModal()
            }
          >
            + Add New
          </button>
        </div>
        <div className=" mt-4">
          <table className=" w-full ">
            <thead className="text-black">
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Content</th>
                <th className="border-b p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {HiBootStrap?.map((chapter, index) => (
                <tr key={index}>
                  <td className=" py-2 px-4 border-b border-white p-2 font-bold">
                    {chapter.title}
                  </td>
                  <td className=" py-2 px-4 border-b border-white p-2 leading-relaxed">
                    {chapter.content}
                  </td>
                  <td className="py-2 px-4 border-b border-white p-2">
                    <div className="pt-5">
                      {/* Update Button */}
                      <button
                        type="button"
                        className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 w-24 mb-2"
                        onClick={() =>
                          document
                            .getElementById(
                              `MarketContent_Update_Modal_${chapter._id}`
                            )
                            .showModal()
                        }
                      >
                        Edit
                      </button>
                      {/* Update Content Modal */}
                      <dialog
                        id={`MarketContent_Update_Modal_${chapter._id}`}
                        className="modal"
                      >
                        <div className="modal-box bg-white">
                          <div>
                            <h3 className="font-bold text-lg text-center text-black">
                              Update Content
                            </h3>
                          </div>
                          <UpdateContent
                            key={chapter._id}
                            MarketChapter={chapter} // Pass the entire chapter object
                            onSuccess={HiBootStrapRefetch}
                            onClose={() =>
                              document
                                .getElementById(
                                  `MarketContent_Update_Modal_${chapter._id}`
                                )
                                .close()
                            }
                          />
                        </div>
                      </dialog>
                      {/* Delete Button */}
                      <button
                        type="button"
                        className="text-white py-2 px-6 rounded-lg bg-red-500 hover:bg-red-400 w-24"
                        onClick={() => handleDelete(chapter._id, chapter.title)}
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
      {/* Banner Modal */}
      <dialog id="Modal_Update_Banner" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Banner</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                {...register("imageUrl", { required: true })}
                className="input input-bordered w-full bg-white"
              />
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

      {/* Add Market Content Modal */}
      <dialog id="Add_New_MarketContent_Modal" className="modal">
        <div className="modal-box bg-white">
          <AddContent
            key={BannerHiBootStrap.length}
            onSuccess={reloadContents}
            onClose={() =>
              document.getElementById("Add_New_MarketContent_Modal").close()
            }
          />
        </div>
      </dialog>
    </div>
  );
};

export default AdminHiBootStrap;

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

const showConfirmationAlert = (title, text, confirmButtonText) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText || "Yes, proceed!",
  });
};
