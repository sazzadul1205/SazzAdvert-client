import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Content = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: TermsConditionContent,
    isLoading: TermsConditionContentLoading,
    error: TermsConditionContentError,
  } = useQuery({
    queryKey: ["TermsConditionContent"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/TermsConditionContent`);
      return res.data[0];
    },
  });

  // Handle loading and error states
  if (TermsConditionContentLoading) {
    return <Loader />;
  }

  if (TermsConditionContentError) {
    return <div>Error loading data.</div>;
  }

  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] pt-28 to-white">
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
          <h1 className="text-[22px] font-bold pt-5">Password and security</h1>
          <p className="mt-5 leading-relaxed text-[#687693]">
            {TermsConditionContent.SecurityData1}
          </p>
          <p className="mt-5 leading-relaxed text-[#687693]">
            {TermsConditionContent.SecurityData2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
