import Logo from "../../../assets/BlogsPage/Logo.png";

const Box = () => {
  return (
    <div className="bg-[#FFE6E6] py-5 ">
      <div className="max-w-[1200px] mx-auto">
        <div>
          {/* Banner */}
          <div className="card bg-[#faf4f4] w-full shadow-xl text-black  ">
            <div className="flex justify-between py-16 px-10">
              <div>
                <div className="flex  ">
                  <img src={Logo} className="ml-5 w-8 h-8" />
                  <div className="ml-5">
                    <p>Posted by</p>
                    <p className="font-bold">Adli</p>
                  </div>
                </div>
                <div className="card-actions pt-4 mt-5">
                  <button className="bg-[#FFEEEE] hover:bg-red-600 hover:text-white p-4 rounded-full">
                    Paid Advert
                  </button>
                  <button className="bg-[#FFEEEE] hover:bg-red-600 hover:text-white p-4 rounded-full">
                    Google Search
                  </button>
                </div>
                <div className=" mt-5">
                  <h2 className=" text-4xl font-bold ">
                    Demystifying Paid Search Ads: A {"Beginner's"} Guide
                  </h2>
                </div>
                <p className="mt-10 hover:text-red-500 font-semibold">
                  READ MORE <span className="text-red-500">{">"}</span>
                </p>
              </div>
              <div className="">
                <img src={'https://i.imgur.com/a47YsMX.jpg'} className="rounded-xl w-[600px] h-[300px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
