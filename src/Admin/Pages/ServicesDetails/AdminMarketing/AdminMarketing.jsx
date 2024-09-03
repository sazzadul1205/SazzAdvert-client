import { NavLink } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useState } from "react";
import UpdateMarketChapter from "./UpdateMarketChapter/UpdateMarketChapter";
import AddMarketChapter from "./AddMarketChapter/AddMarketChapter";
import AddMarketSidebar from "./AddMarketSidebar/AddMarketSidebar";

const AdminMarketing = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [selectedBanner, setSelectedBanner] = useState(null);

  // Fetch chapters data
  const {
    data: MarketChapters,
    isLoading: MarketChaptersLoading,
    error: MarketChaptersError,
    refetch: MarketChaptersRefetch,
  } = useQuery({
    queryKey: ["MarketChapters"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/MarketChapters`);
      return res.data;
    },
  });

  // Fetch sidebar links
  const {
    data: MarketSidebar,
    isLoading: MarketSidebarLoading,
    error: MarketSidebarError,
    refetch: MarketSidebarRefetch,
  } = useQuery({
    queryKey: ["MarketSidebar"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/MarketSidebar`);
      return res.data;
    },
  });

  // Fetch banner data
  const {
    data: BannerMarket,
    isLoading,
    isError,
    refetch: BannerRefetch,
  } = useQuery({
    queryKey: ["BannerMarket"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Market`);
      return res.data[0]; // Assuming you only need the first object
    },
  });

  if (MarketChaptersLoading || MarketSidebarLoading || isLoading) {
    return <Loader />;
  }

  if (MarketChaptersError || MarketSidebarError || isError) {
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
      console.error(error);
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
        await axiosPublic.delete(`/MarketChapters/${itemId}`);
        MarketChaptersRefetch();
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

  const reloadContents = () => {
    MarketChaptersRefetch();
    MarketSidebarRefetch();
  };
  //Sidebar Delete
  const handleMarketSidebarDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/MarketSidebar/${itemId}`);
        MarketSidebarRefetch();
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
        <p className="font-bold text-2xl">Marketing</p>
      </div>

      {/* Banner Section */}
      <div className="bg-blue-100 mt-2 rounded-xl p-2">
        <div className="border-b border-black px-5 py-2 flex justify-between items-center">
          <p className="text-lg font-bold">Banner Image</p>
          <button
            className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
            onClick={() => handleEditClick(BannerMarket)} // Use BannerMarket here
          >
            <FaEdit className="mr-5" />
            <p>Edit</p>
          </button>
        </div>
        <div className="p-10">
          {BannerMarket && (
            <img
              src={BannerMarket.imageUrl.replace(/['"]/g, "")} // Remove single quotes from the URL
              alt="Marketing Banner"
            />
          )}
        </div>
      </div>

      {/* Market Content */}
      <div className="bg-pink-100 mt-2 rounded-xl p-2">
        <div className="border-b border-black px-5 py-2 flex justify-between items-center">
          <p className="text-lg font-bold">Marketing Content</p>
          <button
            type="button"
            className="text-white py-2 px-6 rounded-lg bg-green-500 hover:bg-green-400 hover:text-black"
            onClick={() =>
              document.getElementById("Add_New_MarketContent_Modal").showModal()
            }
          >
            + Add New Market Content
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="table w-full text-left border-separate border-spacing-2 border">
            <thead className="text-black">
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Content</th>
                <th className="border-b p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {MarketChapters?.map((chapter, index) => (
                <tr key={index}>
                  <td className="border-b border-gray-300 p-2 font-bold">
                    {chapter.title}
                  </td>
                  <td className="border-b border-gray-300 p-2 leading-relaxed">
                    {chapter.content}
                  </td>
                  <td className="py-2 px-4">
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
                          <UpdateMarketChapter
                            key={chapter._id}
                            MarketChapter={chapter} // Pass the entire chapter object
                            onSuccess={reloadContents}
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

      {/* Sidebar */}
      <div className="bg-pink-100 mt-2 rounded-xl p-2 ">
        <div className="border-b border-black px-5 py-2 flex justify-between items-center">
          <p className="text-lg font-bold">Market Sidebar</p>
          <button
            type="button"
            className="text-white py-2 px-6 rounded-lg bg-green-500 hover:bg-green-400 hover:text-black"
            onClick={() =>
              document.getElementById("Add_New_MarketSidebar_Modal").showModal()
            }
          >
            + Add New Market Content
          </button>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="table w-full text-left border-separate border-spacing-2 border">
            <thead className="text-black">
              <tr>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">to</th>
                <th className="border-b p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {MarketSidebar?.map((link, index) => (
                <tr key={index} className="hover:text-red-500 cursor-pointer">
                  <td className="border-b border-gray-300 p-2 font-bold">
                    <NavLink to={link.link}>
                      <p>{link.title}</p>
                    </NavLink>
                  </td>
                  <td className="border-b border-gray-300 p-2 text-red-500">
                    {link.to}
                  </td>
                  <td className="border-b border-gray-300 p-2 text-red-500">
                    <button
                      type="button"
                      className="text-white py-2 px-6 rounded-lg bg-red-500 hover:bg-red-400 w-24"
                      onClick={() =>
                        handleMarketSidebarDelete(link._id, link.title)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {/* Banner Modal */}
      {/* Update */}
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
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action flex justify-between">
              <button type="submit" className="btn btn-success">
                Update
              </button>
              <button
                type="button"
                className="btn btn-error"
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
          <AddMarketChapter
            key={MarketChapters.length}
            onSuccess={reloadContents}
            onClose={() =>
              document.getElementById("Add_New_MarketContent_Modal").close()
            }
          />
        </div>
      </dialog>

      {/* Add Market Sidebar Modal */}
      <dialog id="Add_New_MarketSidebar_Modal" className="modal">
        <div className="modal-box bg-white">
          <AddMarketSidebar
            key={MarketChapters.length}
            onSuccess={reloadContents}
            onClose={() =>
              document.getElementById("Add_New_MarketSidebar_Modal").close()
            }
          />
        </div>
      </dialog>
    </div>
  );
};

export default AdminMarketing;

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
