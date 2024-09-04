import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase, FaEdit } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Components/Loader";
import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

const AdminCareerDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "responsibilities",
  });
  const {
    fields: qualificationFields,
    append: appendQualification,
    remove: removeQualification,
  } = useFieldArray({
    control,
    name: "qualifications",
  });
  const [selectedBanner, setSelectedBanner] = useState(null);

  // Fetch Job Details
  const {
    data: JobDetails,
    isLoading: JobDetailsLoading,
    error: JobDetailsError,
    refetch,
  } = useQuery({
    queryKey: ["JobDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/JobDetails`);
      return res.data[0]; // Assuming you're only interested in the first job detail
    },
  });

  if (JobDetailsLoading) {
    return <Loader />;
  }

  if (JobDetailsError) {
    return <p>Error loading data.</p>;
  }

  const onSubmit = async (data) => {
    const updatedJobDetails = {
      title: data.title,
      location: data.location,
      jobType: data.jobType,
      postedDate: data.postedDate,
      jobDescription: data.jobDescription,
      openPositions: data.openPositions,
      responsibilitiesTop: data.responsibilitiesTop,
      responsibilities: data.responsibilities.map((item) => item.detail),
      otherSkills: data.otherSkills,
      qualifications: data.qualifications.map((item) => item.detail),
    };

    try {
      const res = await axiosPublic.put(
        `/JobDetails/${selectedBanner._id}`,
        updatedJobDetails
      );
      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          "Details Updated!",
          "Job details have been updated successfully."
        );
        refetch();
        onCloseModal();
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Update Details",
        "An error occurred while updating the job details."
      );
      onCloseModal();
    }
  };

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

  const handleEditClick = (jobDetails) => {
    setSelectedBanner(jobDetails);
    reset({
      title: jobDetails.title,
      location: jobDetails.location,
      jobType: jobDetails.jobType,
      postedDate: jobDetails.postedDate,
      jobDescription: jobDetails.jobDescription,
      openPositions: jobDetails.openPositions,
      responsibilitiesTop: jobDetails.responsibilitiesTop,
      responsibilities: jobDetails.responsibilities.map((detail) => ({
        detail,
      })),
      otherSkills: jobDetails.otherSkills,
      qualifications: jobDetails.qualifications.map((detail) => ({ detail })),
    });
    document.getElementById("Modal_AdminHome").showModal();
  };

  const onCloseModal = () => {
    document.getElementById("Modal_AdminHome").close();
    setSelectedBanner(null);
  };

  return (
    <div className="bg-white py-4 text-black px-5">
      {/* Header Section */}
      <div className="flex justify-between pb-5 border-b border-red-500">
        <p className="font-bold text-2xl">Career Details</p>
        <button
          className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
          onClick={() => handleEditClick(JobDetails)}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-green-50 px-12 rounded-xl shadow-lg mt-3 py-5">
        {/* Top Section */}
        <div className="flex justify-between items-center py-10">
          <p className="text-lg font-bold">{JobDetails.title}</p>
          {/* Icons */}
          <div className="flex space-x-5 ">
            <div className="flex items-center space-x-1">
              <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center ">
                <FaLocationDot className="text-2xl mx-auto" />
              </div>
              <p>{JobDetails.location}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center ">
                <FaBriefcase className="text-2xl mx-auto" />
              </div>
              <p>{JobDetails.jobType}</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center ">
                <FaCalendarAlt className="text-2xl mx-auto" />
              </div>
              <p>{JobDetails.postedDate}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <div>
            <h1 className="font-bold text-base">Job Details:</h1>
            <p className="leading-relaxed">{JobDetails.jobDescription}</p>
          </div>

          <div>
            <h1 className="font-bold text-base pt-10">
              Open Number of Positions:
            </h1>
            <p>{JobDetails.openPositions}</p>
          </div>

          <div>
            <h1 className="font-bold text-base pt-10">Responsibilities</h1>
            <p className="mb-6 leading-relaxed">
              {JobDetails.responsibilitiesTop}
            </p>
            <ul className="list-disc mb-6 ml-4">
              {JobDetails.responsibilities.map((responsibility, index) => (
                <li className="pt-4 leading-relaxed" key={index}>
                  {responsibility}
                </li>
              ))}
            </ul>
            <p className="leading-relaxed">
              Other Skills: {JobDetails.otherSkills}
            </p>
          </div>

          <div>
            <h1 className="font-bold text-base pt-10">Ideal Qualifications:</h1>
            <ul className="list-disc ml-5 gap-2">
              {JobDetails.qualifications.map((qualification, index) => (
                <li className="mb-3 leading-relaxed" key={index}>
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Details</h3>
            <div className="py-4">
              {/* Title */}
              <div className="form-control">
                <label className="label">Title</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("title", { required: true })}
                />
              </div>
              {/* Location */}
              <div className="form-control">
                <label className="label">Location</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("location", { required: true })}
                />
              </div>
              {/* JobType */}
              <div className="form-control">
                <label className="label">JobType</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("jobType", { required: true })}
                />
              </div>
              {/* Posted Date */}
              <div className="form-control">
                <label className="label">postedDate</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("postedDate", { required: true })}
                />
              </div>
              {/* Job Description */}
              <div className="form-control">
                <label className="label">Job Description</label>
                <textarea
                  className="input input-bordered bg-white h-72"
                  {...register("jobDescription", { required: true })}
                />
              </div>
              {/* Open Positions */}
              <div className="form-control">
                <label className="label">Open Positions</label>
                <input
                  type="text"
                  className="input input-bordered bg-white"
                  {...register("openPositions", { required: true })}
                />
              </div>
              {/* ResponsibilitiesTop */}
              <div className="form-control">
                <label className="label">ResponsibilitiesTop</label>
                <textarea
                  className="input input-bordered bg-white h-40"
                  {...register("responsibilitiesTop", { required: true })}
                />
              </div>
              {/* Responsibilities */}
              <div className="form-control">
                <label className="label">Responsibilities</label>
                {fields.map((item, index) => (
                  <div key={item.id} className="flex gap-2 mb-2">
                    <textarea
                      {...register(`responsibilities.${index}.detail`, {
                        required: true,
                      })}
                      className="input input-bordered bg-white w-full h-32"
                    />
                    <button
                      type="button"
                      className="btn btn-outline btn-error"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-outline btn-primary mt-2"
                  onClick={() => append({ detail: "" })}
                >
                  Add Responsibility
                </button>
              </div>
              {/* Other Skills */}
              <div className="form-control">
                <label className="label">Other Skills</label>
                <textarea
                  className="input input-bordered bg-white"
                  {...register("otherSkills", { required: true })}
                />
              </div>
              {/* Qualifications */}
              <div className="form-control">
                <label className="label">Qualifications</label>
                {qualificationFields.map((item, index) => (
                  <div key={item.id} className="flex gap-2 mb-2">
                    <textarea
                      {...register(`qualifications.${index}.detail`, {
                        required: true,
                      })}
                      className="input input-bordered bg-white w-full h-36"
                    />
                    <button
                      type="button"
                      className="btn btn-outline btn-error"
                      onClick={() => removeQualification(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-outline btn-primary mt-2"
                  onClick={() => appendQualification({ detail: "" })}
                >
                  Add Qualification
                </button>
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

export default AdminCareerDetails;
