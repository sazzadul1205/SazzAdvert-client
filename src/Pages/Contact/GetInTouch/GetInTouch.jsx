import icon1 from "../../../assets/Contacts/icon1.png";
import icon2 from "../../../assets/Contacts/icon2.png";
import icon3 from "../../../assets/Contacts/icon3.png";

const GetInTouch = () => {
  return (
    <div className=" bg-gradient-to-b from-[#FFE6E6] to-white py-14 text-black">
      <div className=" max-w-[1200px] mx-auto">
        <div className="w-[648px] text-center mx-auto pb-10">
          <p>GET IN TOUCH</p>
          <h1 className="font-bold text-3xl ">
            Your Gateway to Excellence: Contact Us and Unlock a World of
            Possibilities
          </h1>
        </div>
        <div className="flex bg-white border border-black rounded-xl">
          {/* Left side */}
          <div className="bg-black px-20 py-16 rounded-2xl">
            {/* Box-1 */}
            <div className="border border-gray-700 text-white p-5 rounded-2xl mb-5">
              <h1>Office Address</h1>
              <div className="flex items-center">
                <div className="bg-[#4c4c4c] rounded-full w-16 h-16 flex justify-center items-center ">
                  <img src={icon2} />
                </div>
                <p className="ml-5 w-[270px] items-center">
                  2750 Quadra Street Victoria Road, New York, USA
                </p>
              </div>
            </div>
            {/* Box-1 */}
            <div className="border border-gray-700 text-white p-5 rounded-2xl mb-5">
              <h1>Phone Number</h1>
              <div className="flex items-center">
                <div className="bg-[#4c4c4c] rounded-full w-16 h-16 flex justify-center items-center ">
                  <img src={icon1} />
                </div>
                <div className="ml-5 w-[270px] items-center">
                  <p> (+123) 456-7898 </p>
                  <p> (+123) 456-7898 </p>
                </div>
              </div>
            </div>
            {/* Box-1 */}
            <div className="border border-gray-700 text-white p-5 rounded-2xl">
              <h1>Email Us</h1>
              <div className="flex items-center">
                <div className="bg-[#4c4c4c] rounded-full w-16 h-16 flex justify-center items-center ">
                  <img src={icon3} />
                </div>
                <div className="ml-5 w-[270px] items-center">
                  <p>support@adli.com</p>
                  <p> info@adli.com </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="px-14 py-20">
            <div className="pb-4">
              <label className="font-semibold"> Your Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-[500px] rounded-full  bg-[#f2f2f8] mt-2"
              />
            </div>
            <div className="pb-4">
              <label className="font-semibold"> Your Email</label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="input input-bordered w-[500px] rounded-full  bg-[#f2f2f8] mt-2"
              />
            </div>
            <div className="pb-4">
              <label className="font-semibold"> Your Phone</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="input input-bordered w-[500px] rounded-full  bg-[#f2f2f8] mt-2"
              />
            </div>
            <div className="pb-4">
              <label className="font-semibold"> Your Subject</label>
              <input
                type="text"
                placeholder="Enter your subject"
                className="input input-bordered w-[500px] rounded-full  bg-[#f2f2f8] mt-2"
              />
            </div>
            <label className="font-semibold "> Your Message</label>

            <textarea
              className="textarea textarea-bordered mt-4  bg-[#f2f2f8] w-[500px] h-[100px] rounded-XL"
              placeholder="Bio"
            ></textarea>

            <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none mt-2">
              SUBMIT NOW {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
