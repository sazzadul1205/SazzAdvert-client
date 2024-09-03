import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import Loader from "../../../../Components/Loader";

const AdminFirstBanner = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, control } = useForm();
  const [selectedBanner, setSelectedBanner] = useState(null);

  const {
    data: BannerAboutUs = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["BannerAboutUs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Banners?page=AboutUs`);
      return res.data[0];
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "icons", // Name of the array in the form
  });

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = async (data) => {
    const updatedBanner = {
      page: "AboutUs",
      left: {
        subtitle: data.subtitle,
        title: data.title,
        description: data.description,
        stats: [
          {
            img: data.img1,
            value: data.value1,
            text: data.text1,
          },
          {
            img: data.img2,
            value: data.value2,
            text: data.text2,
          },
        ],
      },
      right: {
        mainImg: data.mainImg,
        icons: data.icons.map((icon) => icon.value), // Accessing the icons from the field array
      },
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
      subtitle: banner.left?.subtitle || "",
      title: banner.left?.title || "",
      description: banner.left?.description || "",
      img1: banner.left?.stats?.[0]?.img || "",
      value1: banner.left?.stats?.[0]?.value || "",
      text1: banner.left?.stats?.[0]?.text || "",
      img2: banner.left?.stats?.[1]?.img || "",
      value2: banner.left?.stats?.[1]?.value || "",
      text2: banner.left?.stats?.[1]?.text || "",
      mainImg: banner.right?.mainImg || "",
      icons: banner.right?.icons?.map((icon) => ({ value: icon })) || [
        { value: "" },
      ],
    });
    document.getElementById("Modal_AdminFirstBanner").showModal();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_AdminFirstBanner").close();
    setSelectedBanner(null);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Banner</p>
        <button
          className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
          onClick={() => handleEditClick(BannerAboutUs)}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-blue-100 rounded-xl mt-2 p-10">
        {/* Left */}
        <div className="text-black mx-auto">
          <p className="text-lg py-2 font-semibold text-center">
            {BannerAboutUs.left?.subtitle}
          </p>
          <h1 className="text-3xl font-bold mb-6 px-10 text-center">
            {BannerAboutUs.left?.title}
          </h1>
          <p className="text-center px-5">{BannerAboutUs.left?.description}</p>
          <div className="flex justify-between pt-10">
            {BannerAboutUs.left?.stats?.map((stat, index) => (
              <div
                key={index}
                className="items-center p-5 w-[300px] bg-blue-50 rounded-2xl text-black shadow-xl"
              >
                <img
                  src={stat.img}
                  alt={stat.text}
                  className="bg-white p-5 rounded-full w-20 h-20"
                />
                <div>
                  <p className="text-4xl font-bold py-4">{stat.value}</p>
                  <p className="text-lg">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="mt-5">
          <div className="">
            <img
              src={BannerAboutUs.right?.mainImg}
              className="mx-auto w-[500px] rounded-xl z-10"
              alt="Main Banner"
            />
          </div>
          <div className="flex pt-10 gap-5 justify-center">
            {BannerAboutUs.right?.icons?.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Icon ${index + 1}`}
                className="w-20"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <dialog id="Modal_AdminFirstBanner" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Banner</h3>

            {/* Left Section */}
            <div>
              <p className="font-semibold p-2 border-b border-red-500">
                Left Section
              </p>
              <div className="py-4">
                {/* Subtitle */}
                <div className="form-control">
                  <label className="label">Subtitle</label>
                  <input
                    type="text"
                    className="input input-bordered bg-white"
                    {...register("subtitle", { required: true })}
                  />
                </div>
                {/* Title */}
                <div className="form-control">
                  <label className="label">Title</label>
                  <input
                    type="text"
                    className="input input-bordered bg-white"
                    {...register("title", { required: true })}
                  />
                </div>
                {/* Description */}
                <div className="form-control">
                  <label className="label">Description</label>
                  <textarea
                    className="textarea textarea-bordered bg-white h-32"
                    {...register("description", { required: true })}
                  />
                </div>
                {/* Stats */}
                <div className="mt-5">
                  <div className="shadow-xl p-3 mt-2 to-blue-50">
                    <p className="font-bold text-lg border-b border-red-500 pb-2">
                      Stats-1
                    </p>
                    <div className="form-control">
                      <label className="label">Image URL</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register("img1", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Value</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register("value1", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Text</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register("text1", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="shadow-xl p-3 mt-2 to-blue-50">
                    <p className="font-bold text-lg border-b border-red-500 pb-2">
                      Stats-2
                    </p>
                    <div className="form-control">
                      <label className="label">Image URL</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register("img2", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Value</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register("value2", { required: true })}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">Text</label>
                      <input
                        type="text"
                        className="input input-bordered bg-white"
                        {...register("text2", { required: true })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="mt-8">
              <p className="font-semibold p-2 border-b border-red-500">
                Right Section
              </p>
              <div className="py-4">
                <div className="form-control">
                  <label className="label">Main Image URL</label>
                  <input
                    type="text"
                    className="input input-bordered bg-white"
                    {...register("mainImg", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">Icons</label>
                  {fields.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-2 mb-2">
                      <input
                        type="text"
                        className="input input-bordered bg-white flex-grow"
                        {...register(`icons.${index}.value`, {
                          required: true,
                        })}
                      />
                      <button
                        type="button"
                        className="btn bg-red-500 hover:bg-red-300 border-none text-white"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn bg-blue-500 hover:bg-blue-300 border-none text-white mt-2"
                    onClick={() => append({ value: "" })}
                  >
                    Add Icon
                  </button>
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

export default AdminFirstBanner;
