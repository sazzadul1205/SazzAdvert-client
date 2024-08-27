import { FaSearch } from "react-icons/fa";
import BL1 from "../../../assets/BlogDetails/BL1.jfif";
import BL2 from "../../../assets/BlogDetails/BL2.jfif";
import BL3 from "../../../assets/BlogDetails/BL3.jfif";

const RightSide = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[300px] bg-white pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>
      <div className="pt-10">
        <p className="border-b pb-2 border-gray-400 font-bold text-2xl">
          Latest Post
        </p>
        <div className="flex mt-5">
          <img src={BL1} alt="" className="mr-2 w-28 rounded-2xl" />
          <div>
            <p className="text-sm font-light">October 21, 2024</p>
            <p className="font-bold text-[18px]">
              The leading characteristics of review
            </p>
          </div>
        </div>
        <div className="flex mt-10">
          <img src={BL2} alt="" className="mr-2 w-28 rounded-2xl" />
          <div>
            <p className="text-sm font-light">October 21, 2024</p>
            <p className="font-bold text-[18px]">
              The leading characteristics of review
            </p>
          </div>
        </div>
        <div className="flex mt-10">
          <img src={BL3} alt="" className="mr-2 w-28 rounded-2xl" />
          <div>
            <p className="text-sm font-light">October 21, 2024</p>
            <p className="font-bold text-[18px]">
              The leading characteristics of review
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p className="border-b pb-2 border-gray-400 font-bold text-2xl">
          Categories
        </p>
        <div>
          <div className="flex font-bold justify-between pt-4">
            <p>Web Design</p>
            <p>(05)</p>
          </div>
          <div className="flex font-bold justify-between pt-4">
            <p>Branding</p>
            <p>(14)</p>
          </div>
          <div className="flex font-bold justify-between pt-4">
            <p>Digital Art</p>
            <p>(03)</p>
          </div>
          <div className="flex font-bold justify-between pt-4">
            <p>Graphics</p>
            <p>(12)</p>
          </div>
          <div className="flex font-bold justify-between pt-4">
            <p>Marketing</p>
            <p>(25)</p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p className="border-b pb-2 border-gray-400 font-bold text-2xl mb-5">
          Tags
        </p>
        <div className="flex flex-wrap gap-2 w-[400px]">
          <div className="badge badge-neutral bg-white border-none text-black px-5 py-4 rounded-none text-[15px]">
            Affiliate
          </div>
          <div className="badge badge-neutral bg-white border-none text-black px-5 py-4 rounded-none text-[15px]">
            Motion Graphics
          </div>
          <div className="badge badge-neutral bg-white border-none text-black px-5 py-4 rounded-none text-[15px]">
            Digital Marketing
          </div>
          <div className="badge badge-neutral bg-white border-none text-black px-5 py-4 rounded-none text-[15px]">
            Product Landing
          </div>
          <div className="badge badge-neutral bg-white border-none text-black px-5 py-4 rounded-none text-[15px]">
            Company Branding
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
