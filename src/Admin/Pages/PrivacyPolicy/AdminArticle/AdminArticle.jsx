import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";
import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";

const AdminArticle = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, control } = useForm(); // Add control here
  const [selectedBanner, setSelectedBanner] = useState(null);

  const { fields, append, remove } = useFieldArray({
    control, // Pass control from useForm
    name: "personalDataList", // Change this to "personalDataList"
  });

  //   Fetch API
  const {
    data: PrivacyPolicyContent,
    isLoading: PrivacyPolicyContentLoading,
    error: PrivacyPolicyContentError,
    refetch,
  } = useQuery({
    queryKey: ["PrivacyPolicyContent"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/PrivacyPolicyContent`);
      return res.data[0]; // This assumes the response is an array with a single object
    },
  });

  // Handle loading and error states
  if (PrivacyPolicyContentLoading) {
    return <Loader />;
  }

  if (PrivacyPolicyContentError) {
    return <div>Error loading data.</div>;
  }

  const onSubmit = async (data) => {
    const updatedPrivacyPolicy = {
      privacyPolicyContent1: data.privacyPolicyContent1,
      privacyPolicyContent2: data.privacyPolicyContent2,
      informationCollection: data.informationCollection,
      personalData1: data.personalData1,
      personalData2: data.personalData2,
      personalDataList: data.personalDataList.map((item) => item.detail), // Update correctly
      legalData: data.legalData,
      securityData1: data.securityData1,
      securityData2: data.securityData2,
    };

    try {
      const res = await axiosPublic.put(
        `/PrivacyPolicyContent/${selectedBanner._id}`,
        updatedPrivacyPolicy
      );
      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          "Details Updated!",
          "Privacy policy has been updated successfully."
        );
        refetch();
        onCloseModal();
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Update Details",
        "An error occurred while updating the privacy policy."
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

  const handleEditClick = (policyContent) => {
    setSelectedBanner(policyContent);
    reset({
      privacyPolicyContent1: policyContent.privacyPolicyContent1,
      privacyPolicyContent2: policyContent.privacyPolicyContent2,
      informationCollection: policyContent.informationCollection,
      personalData1: policyContent.personalData1,
      personalData2: policyContent.personalData2,
      personalDataList: policyContent.personalDataList.map((detail) => ({
        detail,
      })),
      legalData: policyContent.legalData,
      securityData1: policyContent.securityData1,
      securityData2: policyContent.securityData2,
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
        <p className="font-bold text-2xl">Privacy Policy</p>
        <button
          className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
          onClick={() => handleEditClick(PrivacyPolicyContent)}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-green-50 px-12 rounded-xl shadow-lg mt-3 py-5">
        <div className="max-w-[1200px] mx-auto text-[#4C4C4C] pb-10">
          <div>
            <p>Last updated: {PrivacyPolicyContent.publishDate}</p>
            <div>
              <h1 className="text-[22px] font-bold pt-5">Privacy Policy</h1>
              <p className="leading-relaxed text-[#687693]">
                {PrivacyPolicyContent.privacyPolicyContent1}
              </p>
              <p className="mt-5 leading-relaxed text-[#687693]">
                {PrivacyPolicyContent.privacyPolicyContent2}
              </p>
            </div>
            <div>
              <h1 className="text-[22px] font-bold pt-5">
                What type of personal information do we collect?
              </h1>
              <p className="mt-5 leading-relaxed text-[#687693]">
                {PrivacyPolicyContent.informationCollection}
              </p>
            </div>
            <div>
              <h1 className="text-[22px] font-bold pt-5">
                How do we collect your personal data?
              </h1>
              <div>
                <p className="mt-5 leading-relaxed text-[#687693]">
                  {PrivacyPolicyContent.personalData1}
                </p>
                <p className="mt-5 leading-relaxed text-[#687693]">
                  {PrivacyPolicyContent.personalData2}
                </p>
              </div>
              <ul className="list-decimal mt-5 text-[#4C4C4C]">
                {PrivacyPolicyContent.personalDataList.map((item, idx) => (
                  <li key={idx} className="mt-4 ml-5">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-[22px] font-bold pt-5">
                What are our legal bases for processing your data?
              </h1>
              <p className="mt-5 leading-relaxed text-[#687693]">
                {PrivacyPolicyContent.legalData}
              </p>
            </div>
            <div>
              <h1 className="text-[22px] font-bold pt-5">Security</h1>
              <p className="mt-5 leading-relaxed text-[#687693]">
                {PrivacyPolicyContent.securityData1}
              </p>
              <p className="mt-5 leading-relaxed text-[#687693]">
                {PrivacyPolicyContent.securityData2}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Update Section */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Details</h3>
            <div className="py-4">
              {/* Privacy Policy Content1 */}
              <div className="form-control">
                <label className="label">Privacy Policy Content-1</label>
                <textarea
                  {...register("privacyPolicyContent1", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>
              {/* privacy Policy Content2 */}
              <div className="form-control pt-4">
                <label className="label">Privacy Policy Content-2</label>
                <textarea
                  {...register("privacyPolicyContent2", { required: true })}
                  className="input input-bordered bg-white h-56"
                />
              </div>
              {/* Information Collection */}
              <div className="form-control pt-4">
                <label className="label">Information Collection</label>
                <textarea
                  {...register("informationCollection", { required: true })}
                  className="input input-bordered bg-white h-80"
                />
              </div>
              {/* Personal Data-1 */}
              <div className="form-control pt-4">
                <label className="label">Personal Data-1</label>
                <textarea
                  {...register("personalData1", { required: true })}
                  className="input input-bordered bg-white h-60"
                />
              </div>
              {/* Personal Data-2 */}
              <div className="form-control pt-4">
                <label className="label">Personal Data-2</label>
                <textarea
                  {...register("personalData2", { required: true })}
                  className="input input-bordered bg-white h-60"
                />
              </div>
              {/* Personal Data List */}
              <div>
                <label className="label">Personal Data List</label>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex items-center">
                    <textarea
                      {...register(`personalDataList.${index}.detail`)}
                      className="input input-bordered bg-white mr-2 w-full h-24"
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="btn btn-error text-white btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => append({ detail: "" })}
                  className="btn btn-primary mt-2 w-full text-white"
                >
                  Add Personal Data
                </button>
              </div>
              {/* Legal Data */}
              <div className="form-control pt-4">
                <label className="label">Legal Data</label>
                <textarea
                  {...register("legalData", { required: true })}
                  className="input input-bordered bg-white h-56"
                />
              </div>
              {/* Security Data-1 */}
              <div className="form-control pt-4">
                <label className="label">Security Data-1</label>
                <textarea
                  {...register("securityData1", { required: true })}
                  className="input input-bordered bg-white h-56"
                />
              </div>
              {/* Security Data-2 */}
              <div className="form-control pt-4">
                <label className="label">Security Data-2</label>
                <textarea
                  {...register("securityData2", { required: true })}
                  className="input input-bordered bg-white h-56"
                />
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

export default AdminArticle;
