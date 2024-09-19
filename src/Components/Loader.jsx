import { FidgetSpinner } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="bg-white flex justify-center items-center ">
      <div className="max-w-[1200px] mx-auto h-screen mt-96">
        <FidgetSpinner
          visible={true}
          height="200"
          width="200"
          ariaLabel="fidget-spinner-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-spinner-wrapper"
        />
      </div>
    </div>
  );
};

export default Loader;
