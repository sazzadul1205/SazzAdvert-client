import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Loader from "../../../../Components/Loader";

const AdminBanner = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const [selectedBanner, setSelectedBanner] = useState(null);

  const {
    data: BannerPrivacyPolicy = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["BannerPrivacyPolicy"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=PrivacyPolicy`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const onSubmit = async (data) => {
    const updatedBanner = {
      title: data.title,
      heading: data.heading,
      description: data.description,
      image: data.imageUrl,
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
        refetch();
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
      title: banner.title,
      description: banner.description,
      content: banner.content,
      imageUrl: banner.imageUrl,
    });
    document.getElementById("Modal_AdminHome").showModal();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_AdminHome").close();
    setSelectedBanner(null);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Banner</p>
        <button
          className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
          onClick={() => handleEditClick(BannerPrivacyPolicy[0])}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-blue-100 rounded-xl mt-2">
        {BannerPrivacyPolicy.map((banner) => (
          <div key={banner._id}>
            <div className="hero max-w-[1200px] mx-auto text-black">
              <div className="hero-content text-center ">
                <div>
                  <h1 className="text-lg font-bold w-[700px] mx-auto">
                    {banner.title}
                  </h1>
                  <p className="text-3xl font-bold pb-5  mx-auto">
                    {banner.description}
                  </p>
                  <p className="text-lg pb-5 w-[700px] mx-auto">
                    {banner.content}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b max-w-[1200px] mx-auto">
              <img
                src={banner.imageUrl}
                alt="Banner"
                className="w-1/2 h-auto max-w-[800px] mx-auto pb-10"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Banner</h3>
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
                  className="textarea textarea-bordered bg-white h-32"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">Content</label>
                <textarea
                  className="textarea textarea-bordered bg-white h-32"
                  {...register("content", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">Image URL</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("imageUrl", { required: true })}
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
    </div>
  );
};

export default AdminBanner;

const showSuccessAlert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
  });
};
