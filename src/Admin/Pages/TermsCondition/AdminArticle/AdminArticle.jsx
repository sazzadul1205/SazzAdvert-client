import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Loader from "../../../../Components/Loader";
import Swal from "sweetalert2";
import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";

const AdminArticle = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset, control } = useForm();
  const [selectedBanner, setSelectedBanner] = useState(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "LiabilitiesDataList", // Update with your data name for the list
  });

  // Fetch API
  const {
    data: TermsConditionContent,
    isLoading: TermsConditionContentLoading,
    error: TermsConditionContentError,
    refetch,
  } = useQuery({
    queryKey: ["TermsConditionContent"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TermsConditionContent`);
      return res.data[0]; // Assuming the response is an array with a single object
    },
  });

  // Handle loading and error states
  if (TermsConditionContentLoading) {
    return <Loader />;
  }

  if (TermsConditionContentError) {
    return <div>Error loading data.</div>;
  }

  const onSubmit = async (data) => {
    const updatedTermsCondition = {
      TermsCondition1: data.TermsCondition1,
      TermsCondition2: data.TermsCondition2,
      AcceptableUse: data.AcceptableUse,
      liability1: data.liability1,
      liability2: data.liability2,
      LiabilitiesDataList: data.LiabilitiesDataList.map((item) => item.detail), // Update correctly
      registrationData: data.registrationData,
      SecurityData1: data.SecurityData1,
      SecurityData2: data.SecurityData2,
    };

    try {
      const res = await axiosPublic.put(
        `/TermsConditionContent/${selectedBanner._id}`,
        updatedTermsCondition
      );
      if (res.data.modifiedCount === 1) {
        showSuccessAlert(
          "Details Updated!",
          "Terms and conditions have been updated successfully."
        );
        refetch();
        onCloseModal();
      }
    } catch (error) {
      console.error(error);
      showErrorAlert(
        "Failed to Update Details",
        "An error occurred while updating the terms and conditions."
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
      TermsCondition1: policyContent.TermsCondition1,
      TermsCondition2: policyContent.TermsCondition2,
      AcceptableUse: policyContent.AcceptableUse,
      liability1: policyContent.liability1,
      liability2: policyContent.liability2,
      LiabilitiesDataList: policyContent.LiabilitiesDataList.map((detail) => ({
        detail,
      })),
      registrationData: policyContent.registrationData,
      SecurityData1: policyContent.SecurityData1,
      SecurityData2: policyContent.SecurityData2,
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
        <p className="font-bold text-2xl">Terms & Conditions</p>
        <button
          className="px-10 py-1 flex items-center bg-yellow-500 hover:bg-yellow-400 rounded-lg text-white hover:text-black text-lg"
          onClick={() => handleEditClick(TermsConditionContent)}
        >
          <FaEdit className="mr-5" />
          <p>Edit</p>
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-green-50 px-12 rounded-xl shadow-lg mt-3 py-5">
        <div className="max-w-[1200px] mx-auto text-[#4C4C4C] pb-10">
          <p>Last updated: {TermsConditionContent.PublishDate}</p>
          <div>
            <h1 className="text-[22px] font-bold pt-5">Terms & conditions</h1>
            <p className="leading-relaxed text-[#687693]">
              {TermsConditionContent.TermsCondition1}
            </p>
            <p className="mt-5 leading-relaxed text-[#687693]">
              {TermsConditionContent.TermsCondition2}
            </p>
          </div>
          <div>
            <h1 className="text-[22px] font-bold pt-5">
              Intellectual property and acceptable use
            </h1>
            <p className="mt-5 leading-relaxed text-[#687693]">
              {TermsConditionContent.AcceptableUse}
            </p>
          </div>
          <div>
            <h1 className="text-[22px] font-bold pt-5">
              Limitation of liability
            </h1>
            <div>
              <p className="mt-5 leading-relaxed text-[#687693]">
                {TermsConditionContent.liability1}
              </p>
              <p className="mt-5 leading-relaxed text-[#687693]">
                {TermsConditionContent.liability2}
              </p>
            </div>
            <ul className="list-decimal mt-5 text-[#4C4C4C]">
              {TermsConditionContent.LiabilitiesDataList.map((item, idx) => (
                <li key={idx} className="mt-4 ml-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-[22px] font-bold pt-5">Registration</h1>
            <p className="mt-5 leading-relaxed text-[#687693]">
              {TermsConditionContent.registrationData}
            </p>
          </div>
          <div>
            <h1 className="text-[22px] font-bold pt-5">
              Password and security
            </h1>
            <p className="mt-5 leading-relaxed text-[#687693]">
              {TermsConditionContent.SecurityData1}
            </p>
            <p className="mt-5 leading-relaxed text-[#687693]">
              {TermsConditionContent.SecurityData2}
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Editing */}
      <dialog id="Modal_AdminHome" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg text-center">Edit Details</h3>
            <div className="py-4">
              {/* Terms Condition 1 */}
              <div className="form-control">
                <label className="label">Terms Condition 1</label>
                <textarea
                  {...register("TermsCondition1", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>

              {/* Terms Condition 2 */}
              <div className="form-control pt-4">
                <label className="label">Terms Condition 2</label>
                <textarea
                  {...register("TermsCondition2", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>

              {/* Acceptable Use */}
              <div className="form-control pt-4">
                <label className="label">Acceptable Use</label>
                <textarea
                  {...register("AcceptableUse", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>

              {/* Liability 1 */}
              <div className="form-control pt-4">
                <label className="label">Liability 1</label>
                <textarea
                  {...register("liability1", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>

              {/* Liability 2 */}
              <div className="form-control pt-4">
                <label className="label">Liability 2</label>
                <textarea
                  {...register("liability2", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>

              {/* Liabilities List */}
              <div className="form-control pt-4">
                <label className="label">Liabilities List</label>
                {fields.map((item, index) => (
                  <div key={item.id} className="flex space-x-2">
                    <input
                      {...register(`LiabilitiesDataList.${index}.detail`)}
                      className="input input-bordered w-full bg-white"
                    />
                    <button
                      type="button"
                      className="btn btn-error"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={() => append({ detail: "" })}
                >
                  Add Liability Item
                </button>
              </div>

              {/* Registration Data */}
              <div className="form-control pt-4">
                <label className="label">Registration Data</label>
                <textarea
                  {...register("registrationData", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>

              {/* Security Data 1 */}
              <div className="form-control pt-4">
                <label className="label">Security Data 1</label>
                <textarea
                  {...register("SecurityData1", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
              </div>

              {/* Security Data 2 */}
              <div className="form-control pt-4">
                <label className="label">Security Data 2</label>
                <textarea
                  {...register("SecurityData2", { required: true })}
                  className="input input-bordered bg-white h-40"
                />
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
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AdminArticle;
