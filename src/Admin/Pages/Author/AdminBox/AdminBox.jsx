import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import Loader from "../../../../Components/Loader";

const AdminBox = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, control } = useForm();

  const {
    data: BannerAuthor2 = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["BannerAuthor2"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=Author2`);
      return res.data[0];
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "buttons",
  });

  const [selectedBanner, setSelectedBanner] = useState(null);

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = async (data) => {
    const updatedBanner = {
      title: data.title,
      bannerImage: data.bannerImage,
      postedBy: {
        name: data.postedByName,
        logo: data.postedByLogo,
      },
      buttons: data.buttons,
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
      console.error("Failed to update banner:", error);
      showErrorAlert(
        "Failed to Update Banner",
        "An error occurred while updating the banner."
      );
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

  const handleEditClick = (banner) => {
    setSelectedBanner(banner);
    reset({
      title: banner.title,
      bannerImage: banner.bannerImage,
      postedByName: banner.postedBy?.name,
      postedByLogo: banner.postedBy?.logo,
      buttons: banner.buttons || [],
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
          onClick={() => handleEditClick(BannerAuthor2)}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-blue-100 rounded-xl mt-5">
        {/* Banner */}
        <div className="p-5">
          <div className="text-center">
            {BannerAuthor2.postedBy && (
              <div className="flex w-[200px] mx-auto">
                <img
                  src={BannerAuthor2.postedBy.logo}
                  className="ml-5 w-8 h-8"
                  alt="Posted by logo"
                />
                <div className="ml-5">
                  <p>Posted by</p>
                  <p className="font-bold">{BannerAuthor2.postedBy.name}</p>
                </div>
              </div>
            )}
            <div className="pt-4 mt-5">
              {BannerAuthor2.buttons &&
                BannerAuthor2.buttons.map((buttonText, index) => (
                  <button
                    key={index}
                    className="bg-[#FFEEEE] hover:bg-red-600 hover:text-white p-4 rounded-full mx-1"
                  >
                    {buttonText}
                  </button>
                ))}
            </div>
            <div className="mt-5">
              <h2 className="text-3xl font-bold mb-5">{BannerAuthor2.title}</h2>
            </div>
          </div>
          <div className="mx-auto w-[500px]">
            {BannerAuthor2.bannerImage && (
              <img
                src={BannerAuthor2.bannerImage}
                className="rounded-xl w-[500px]"
                alt="Banner "
              />
            )}
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Banner</h3>
            <div>
              <p>Posted By</p>
              <div className="py-4">
                <div className="form-control">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input input-bordered bg-white"
                    {...register("postedByName", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Logo</label>
                  <input
                    type="url"
                    className="input input-bordered bg-white"
                    {...register("postedByLogo", { required: true })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Buttons
                </label>
                <div className="space-y-2">
                  {fields.map((item, index) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="text"
                        {...register(`buttons.${index}`)}
                        className="input input-bordered bg-white w-full"
                      />
                      <button
                        type="button"
                        className="bg-red-500 text-white px-2 text-lg py-2 rounded hover:bg-red-400"
                        onClick={() => remove(index)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                    onClick={() => append("")}
                  >
                    Add Button
                  </button>
                </div>
              </div>
              <div className="form-control">
                <label className="label">Title</label>
                <textarea
                  className="textarea textarea-bordered bg-white h-32"
                  {...register("title", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">Banner Image</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("bannerImage", { required: true })}
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

export default AdminBox;
