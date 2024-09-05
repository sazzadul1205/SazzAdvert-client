import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";
import { useState } from "react";
import ViewBlogDetails from "./ViewBlogDetails/ViewBlogDetails";
import UpdateBlogDetails from "./UpdateBlogDetails/UpdateBlogDetails";
import AddBlogDetails from "./AddBlogDetails/AddBlogDetails";
import Swal from "sweetalert2";

const AdminBlogDetails = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isViewingBlog, setIsViewingBlog] = useState(false);
  const [isUpdatingBlog, setIsUpdatingBlog] = useState(false);

  // Fetching Blog Details data
  const {
    data: BlogsDetailsData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["BlogsDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/BlogsDetails`);
      return res.data;
    },
  });

  // Loading state
  if (isLoading) {
    return <Loader />;
  }

  // Error state
  if (error) {
    return <p>Error loading data.</p>;
  }

  // Open modal handlers
  const handleViewBlog = (blog) => {
    setSelectedBlog(blog);
    setIsViewingBlog(true);
  };

  const handleUpdateBlog = (blog) => {
    setSelectedBlog(blog);
    setIsUpdatingBlog(true);
  };

  // Close modal handlers
  const handleCloseModal = () => {
    setSelectedBlog(null);
    setIsViewingBlog(false);
    setIsUpdatingBlog(false);
    setAddModalOpen(false);
  };

  const handleDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/BlogsDetails/${itemId}`);
        refetch(); // Refresh the data after deletion
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
    <div className="bg-white py-4 text-black min-h-screen px-5">
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Blog Details</p>
        <button
          type="button"
          className="text-white py-2 px-6 rounded-lg bg-green-500 hover:bg-green-400 hover:text-black"
          onClick={() => setAddModalOpen(true)} // Handle Add Modal with state
        >
          + Add New Blogs
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-yellow-50 rounded-xl p-2 mt-5">
        <table className="table w-full">
          <thead>
            <tr className="text-black">
              <th>Image</th>
              <th>Title</th>
              <th>Posted Date</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {BlogsDetailsData?.map((blog) => (
              <tr key={blog._id}>
                <td>
                  <img
                    src={blog.bannerImage}
                    alt={blog.title}
                    className="w-24"
                  />
                </td>
                <td>{blog.title}</td>
                <td>{blog.postedDate || "N/A"}</td>
                <td>{blog.tags || "No Tags"}</td>
                <td>
                  <div className="flex flex-col gap-2 text-white">
                    <button
                      className="bg-green-500 hover:bg-green-400 flex px-5 py-2 rounded-2xl"
                      onClick={() => handleViewBlog(blog)}
                    >
                      <FaSearch className="mr-2" />
                      View
                    </button>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-400 flex px-5 py-2 rounded-2xl"
                      onClick={() => handleUpdateBlog(blog)}
                    >
                      <FaEdit className="mr-2" />
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-400 flex px-5 py-2 rounded-2xl"
                      onClick={() => handleDelete(blog._id, blog.title)}
                    >
                      <FaTrash className="mr-2" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Blog Modal */}
      {isViewingBlog && (
        <dialog open className="modal">
          <div className="modal-box bg-white w-[1200px]">
            <ViewBlogDetails
              BlogsDetailsData={selectedBlog}
              onClose={handleCloseModal}
            />
          </div>
        </dialog>
      )}

      {/* Update Blog Modal */}
      {isUpdatingBlog && (
        <dialog open className="modal">
          <div className="modal-box bg-white w-[1200px]">
            <UpdateBlogDetails
              Blogs={selectedBlog}
              onSuccess={() => {
                refetch();
                handleCloseModal();
              }}
              onClose={handleCloseModal}
            />
          </div>
        </dialog>
      )}

      {/* Add New Blog Modal */}
      {isAddModalOpen && (
        <dialog open className="modal">
          <div className="modal-box bg-white">
            <AddBlogDetails
              onSuccess={() => {
                refetch();
                setAddModalOpen(false);
              }}
              onClose={() => setAddModalOpen(false)}
            />
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AdminBlogDetails;

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
