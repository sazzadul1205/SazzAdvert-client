import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";
import UpdateBrands from "./UpdateBrands/UpdateBrands";
import AddBrands from "./AddBrands/AddBrands";

const AdminBrands = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching What We Do data
  const {
    data: Brands,
    isLoading: BrandsLoading,
    error: BrandsError,
    refetch,
  } = useQuery({
    queryKey: ["Brands"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Brands`);
      return res.data;
    },
  });

  // Loading state
  if (BrandsLoading) {
    return <Loader />;
  }

  // Error state
  if (BrandsError) {
    return <p>Error loading data.</p>;
  }

  const reloadContents = () => {
    refetch();
  };

  //   Delete
  const handleDelete = async (itemId, itemName) => {
    try {
      const result = await showConfirmationAlert(
        "Are you sure?",
        `You are about to delete "${itemName}". This action cannot be undone.`,
        "Delete"
      );

      if (result.isConfirmed) {
        await axiosPublic.delete(`/Brands/${itemId}`);
        refetch();
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
        <p className="font-bold text-2xl">Brands</p>
        <button
          type="button"
          className="text-white py-2 px-6 rounded-lg bg-green-500 hover:bg-green-400 hover:text-black"
          onClick={() => document.getElementById("Add_New_Modal").showModal()}
        >
          + Add New Content
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-2">
        {/* Brands Cards */}
        <div className="overflow-x-auto  bg-yellow-50 rounded-xl p-2">
          <table className="table w-full rounded-xl ">
            {/* Table Header */}
            <thead>
              <tr className="text-black">
                <th>Image</th>
                <th>Alt</th>
                <th>Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Brands.map((card) => (
                <tr key={card.id} className="py-5 px-4">
                  <td className="">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-24 h-w-24"
                    />
                  </td>
                  <td className="py-2 px-4 font-semibold">{card.alt}</td>
                  <td className="py-5 px-4 text-base font-normal">
                    {card.link}
                  </td>
                  <td className="py-2 px-4">
                    {/* Buttons */}
                    <div className=" pt-5 ">
                      <div>
                        <button
                          type="button"
                          className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-400 w-24 mb-2"
                          onClick={() =>
                            document
                              .getElementById(
                                `Brands_Content_Modal_${card._id}`
                              )
                              .showModal()
                          }
                        >
                          Edit
                        </button>
                        {/* update Content modal */}
                        <dialog
                          id={`Brands_Content_Modal_${card._id}`}
                          className="modal"
                        >
                          <div className="modal-box bg-white">
                            <div>
                              <h3 className="font-bold text-lg text-center text-black">
                                Update Content
                              </h3>
                            </div>
                            <UpdateBrands
                              key={card._id}
                              Brands={card}
                              onSuccess={reloadContents}
                              onClose={() =>
                                document
                                  .getElementById(
                                    `Brands_Content_Modal_${card._id}`
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

      {/* Add New Content Modal */}
      <dialog id="Add_New_Modal" className="modal">
        <div className="modal-box bg-white">
          <div>
            <h3 className="font-bold text-lg text-center">Add New Content</h3>
          </div>
          <AddBrands
            onSuccess={reloadContents}
            onClose={() => document.getElementById("Add_New_Modal").close()}
          />
        </div>
      </dialog>
    </div>
  );
};

export default AdminBrands;

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
