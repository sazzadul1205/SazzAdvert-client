import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AdminPlaque = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedPlaque, setSelectedPlaque] = useState(null);
  const axiosPublic = useAxiosPublic();

  // Fetching Plaques Data
  const {
    data: plaquesData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["Plaques"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/Plaques`);
      return res.data;
    },
  });

  // Handle Loading State
  if (isLoading) return <Loader />;
  if (error) return <p>Error loading plaques data.</p>;

  // Ensure data is loaded and available
  const Plaque = plaquesData && plaquesData[0];

  const onSubmit = async (data) => {
    const updatedPlaque = {
      avatars: [
        { src: data.avatar1, alt: Plaque?.avatars[0]?.alt },
        { src: data.avatar2, alt: Plaque?.avatars[1]?.alt },
        { src: data.avatar3, alt: Plaque?.avatars[2]?.alt },
      ],
      awards: {
        src: data.awardsSrc,
        title: data.awardsTitle,
        clients: data.awardsClients,
        description: data.awardsDescription,
      },
      review: {
        stars: data.reviewStars,
        src: data.reviewSrc,
        reviews: data.reviewReviews,
        reviewOn: data.reviewOn,
      },
    };

    try {
      const res = await axiosPublic.put(
        `/Plaques/${selectedPlaque._id}`,
        updatedPlaque
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

  const handleEditClick = (Plaque) => {
    setSelectedPlaque(Plaque);
    reset({
      avatar1: Plaque.avatars[0].src,
      avatar2: Plaque.avatars[1].src,
      avatar3: Plaque.avatars[2].src,
      awardsSrc: Plaque.awards.src,
      awardsTitle: Plaque.awards.title,
      awardsClients: Plaque.awards.clients,
      awardsDescription: Plaque.awards.description,
      reviewStars: Plaque.review.stars,
      reviewSrc: Plaque.review.src,
      reviewReviews: Plaque.review.reviews,
      reviewOn: Plaque.review.reviewOn,
    });
    document.getElementById("Modal_AdminHome").showModal();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_AdminHome").close();
    setSelectedPlaque(null);
    reset(); // Reset the form fields
  };

  return (
    <div>
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Plaque</p>
        <button
          className="px-5 py-2 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-xl text-white hover:text-black text-lg"
          onClick={() => handleEditClick(Plaque)}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      <div className="bg-white py-20 text-black">
        <div className="flex justify-between mx-auto max-w-[1200px] pb-20 border-b">
          {/* Avatars */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-4">
              {Plaque?.avatars?.map((avatar, index) => (
                <div key={index} className="avatar border-none">
                  <div className="w-12 rounded-full">
                    <img
                      src={avatar.src}
                      alt={avatar.alt}
                      className="border-white border-2"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg">Meet Our Expert {">"}</p>
          </div>

          {/* Awards */}
          <div className="flex items-center">
            <img src={Plaque?.awards?.src} alt="Award" />
            <div className="ml-5">
              <p className="font-semibold">{Plaque?.awards?.title}</p>
              <p>
                <span className="font-bold mr-1 text-lg">
                  {Plaque?.awards?.clients}
                </span>
                {Plaque?.awards?.description}
              </p>
            </div>
          </div>

          {/* Review */}
          <div>
            <div className="flex">
              <p className="mr-10">{Plaque?.review?.reviewOn}</p>
              <div className="rating">
                {Array.from({ length: Plaque?.review?.stars }).map(
                  (_, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked={index === 1}
                    />
                  )
                )}
              </div>
            </div>
            <div className="flex">
              <img className="mr-10" src={Plaque?.review?.src} alt="Clutch" />
              <p>{Plaque?.review?.reviews}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <div className="modal-action">
            <form method="dialog">
              <button
                className="text-3xl font-bold mr-5 text-red-500"
                onClick={onCloseModal}
              >
                x
              </button>
            </form>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Plaque</h3>
            <div className="py-4">
              {/* Avatars */}
              <div className="pt-2 border-t border-black mt-2">
                <p className="text-xl font-semibold">Avatars</p>
                <div>
                  <div className="form-control">
                    <label className="label">Avatar-1</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("avatar1", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Avatar-2</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("avatar2", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Avatar-3</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("avatar3", { required: true })}
                    />
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div className="pt-2 border-t border-black mt-2">
                <p className="text-xl font-semibold pt-2">Awards</p>
                <div>
                  <div className="form-control">
                    <label className="label">Awards Image URL</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("awardsSrc", { required: true })}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">Awards Title</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("awardsTitle", { required: true })}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">Awards Clients</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("awardsClients", { required: true })}
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">Awards Description</label>
                    <textarea
                      className="textarea textarea-bordered bg-white"
                      {...register("awardsDescription", { required: true })}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Review */}
              <div className="pt-2 border-t border-black mt-2">
                <p className="text-xl font-semibold pt-2">Review</p>
                <div>
                  <div className="form-control">
                    <label className="label">Review Stars</label>
                    <input
                      type="number"
                      className="input input-bordered bg-white"
                      {...register("reviewStars", {
                        required: true,
                        min: 0,
                        max: 5,
                      })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Review Image URL</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("reviewSrc", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Total Reviews</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("reviewReviews", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Review On</label>
                    <input
                      type="text"
                      className="input input-bordered bg-white"
                      {...register("reviewOn", { required: true })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Button's */}
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

export default AdminPlaque;
