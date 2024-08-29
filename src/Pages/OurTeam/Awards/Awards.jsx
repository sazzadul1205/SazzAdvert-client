


const Awards = () => {
  return (
    <div className="bg-[#FFE6E6] py-14 text-black">
      <div className="bg-[#faf4f4] max-w-[1200px] mx-auto flex flex-col lg:flex-row h-[390px] rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 p-10">
          <div className="bg-[#FFEEEE] mx-auto items-center w-[280px] text-black">
            <img
              src={"https://i.ibb.co/d4MW8SF/Awards-Badge.png"}
              alt=""
              className="w-[170px] h-[170px] mx-auto mt-10"
            />
            <h1 className="text-lg text-center">Award Winning Agency</h1>
          </div>
          <div className="ml-10 mt-10 text-black">
            <img
              src={"https://i.ibb.co/jwVj7Tj/Awards-Icon1.png"}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">215%</h1>
              <p className="font-semibold text-lg mb-5">Average ROI</p>
              <p>Customers Achieved</p>
            </div>
          </div>
          <div className="ml-10 mt-10 text-black">
            <img
              src={"https://i.ibb.co/HPGx6Fc/Awards-Icon2.png"}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">200,000s</h1>
              <p className="font-semibold text-lg mb-5">Ads</p>
              <p>Already Created</p>
            </div>
          </div>
          <div className="ml-10 mt-10 text-black">
            <img
              src={"https://i.ibb.co/vcqNYjM/Awards-Icon3.png"}
              alt="Years driving growth"
              className="bg-[#FFEEEE] p-4 rounded-full"
            />
            <div>
              <h1 className="font-bold text-4xl mb-2">$10</h1>
              <p className="font-semibold text-lg mb-5">Million</p>
              <p>Managed Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
