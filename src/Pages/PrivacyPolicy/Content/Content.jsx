import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";

const Content = () => {
  // API fetch for Privacy Policy Content
  const axiosPublic = useAxiosPublic();
  const {
    data: PrivacyPolicyContent,
    isLoading: PrivacyPolicyContentLoading,
    error: PrivacyPolicyContentError,
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


  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] pt-28 to-white">
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
  );
};

export default Content;
