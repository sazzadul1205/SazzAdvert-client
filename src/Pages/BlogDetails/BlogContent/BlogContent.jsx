import img1 from "../../../assets/BlogDetails/img1.jpg";
import block1 from "../../../assets/BlogDetails/block1.jpg";
import block2 from "../../../assets/BlogDetails/block2.jpg";
import block3 from "../../../assets/BlogDetails/block3.jpg";

import { FaTags } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const BlogContent = () => {
  return (
    <div className="">
      <img src={img1} alt="" className="rounded-2xl" />
      <p className="mt-3 text-sm">January 21, 2024</p>
      <h1 className="font-bold">
        Demystifying Paid Search Ads: A Beginner's Guide
      </h1>
      <p className="leading-relaxed">
        Welcome to the world of Paid Search Ads! If you're new to digital
        advertising and wondering how to effectively harness the power of search
        engines to drive targeted traffic and reach potential customers, you're
        in the right place. In this beginner's guide, we'll take you on a
        journey through the ins and outs of paid search ads, unraveling the
        complexities and providing you with essential tips to kickstart your
        successful advertising campaigns.
      </p>
      <p className="pt-3 leading-relaxed">
        In this chapter, we'll the groundwork by explaining paid search ads are
        and how they function. You'll gain insights into popular advertising
        platforms like Google Ads and Bing Ads, and we'll explore the numerous
        benefits these ads offer
      </p>
      <div className="flex gap-5 mt-5">
        <img src={block1} alt="" className="w-1/3  rounded-xl" />
        <div className="w-2/3 block ">
          <img
            src={block2}
            alt=""
            className="h-[200px] w-[500px] mb-5 rounded-xl"
          />
          <img src={block3} alt="" className="h-[200px] w-[500px] rounded-xl" />
        </div>
      </div>
      <p className="mt-3 leading-relaxed">
        Unravel the components that make up a successful search ad in this
        chapter. From captivating headlines to compelling descriptions and
        strategically placed URLs, we'll delve into the art of crafting ad copy
        that engages and resonates with your target audience. With a focus on
        relevant keywords and match types, you'll learn how to optimize your ads
        for maximum impact and relevancy.
      </p>
      <p className="mt-3 leading-relaxed">
        Ready to create your first paid search ad campaign? This chapter will
        guide you through the process step-by-step. You'll learn how to define
        your advertising goals, structure campaigns and ad groups effectively,
        and set appropriate budgets and bidding strategies. Armed with this
        knowledge, you'll be ready to launch your campaign with confidence.
      </p>
      <div className="justify-between flex mt-16 pb-10 border-b">
        <div className="flex text-2xl ">
          <FaTags className="mt-1 item-center"></FaTags>
          <p className="font-semibold ml-2 text-lg item-center">Paid Advert</p>
        </div>
        <div className="flex gap-2 text-3xl ml-10">
          <p className="text-xl">Share</p>
          <FaFacebook></FaFacebook>
          <FaLinkedin></FaLinkedin>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
          <FaYoutube></FaYoutube>
        </div>
      </div>
      <div className="justify-between flex mt-5">
        <div className="flex gap-2 font-semibold">
          <FaArrowLeft />
          <p>Previews Post</p>
        </div>
        <div className="flex gap-2 font-semibold">
          <p>Next Post</p>
          <FaArrowRight />
        </div>
      </div>
      <div className="bg-white border border-black mt-20 px-20 py-12">
        <h1 className="font-bold text-2xl">Post A Comment</h1>
        <textarea
          className="textarea textarea-bordered bg-[#F2F2F8] w-full h-36 rounded-2xl border"
          placeholder="Bio"
        ></textarea>
        <div className="flex gap-10 mt-5 text-black">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs bg-[#F2F2F8] rounded-2xl"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs bg-[#F2F2F8] rounded-2xl"
          />
          <input
            type="text"
            placeholder="Website"
            className="input input-bordered w-full max-w-xs bg-[#F2F2F8] rounded-2xl"
          />
        </div>
        <div className="form-control mt-5">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="checkbox mr-2" />
            <span className="mb-0">
              {" "}
              Save my name, email, and website in this browser for the next time
              I comment.{" "}
            </span>
          </label>
        </div>
        <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none mt-5">
          SUBMIT NOW {">"}
        </button>
      </div>
    </div>
  );
};

export default BlogContent;
