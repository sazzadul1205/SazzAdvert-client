import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTags,
} from "react-icons/fa";

// Mapping of icon names to actual components
const iconMap = {
  FaFacebook: FaFacebook,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaYoutube: FaYoutube,
};

const ViewBlogDetails = ({ BlogsDetailsData, onClose }) => {
  return (
    <div>
      {/* Banner Image */}
      <div>
        <img
          src={BlogsDetailsData?.bannerImage || "/default-banner.jpg"}
          alt="Blog Banner"
          className="rounded-2xl w-full"
        />

        {/* Date */}
        <p className="mt-4 text-sm">
          {BlogsDetailsData?.postedDate || "No Date Available"}
        </p>

        {/* Title */}
        <p className="font-bold text-3xl py-5">
          {BlogsDetailsData?.title || "No Title Available"}
        </p>

        {/* Content Blocks */}
        <div className="pt-3 leading-relaxed">
          <p className="pt-3 leading-relaxed">
            {BlogsDetailsData?.content1 || "No Content Available"}
          </p>
          <p className="pt-3 leading-relaxed">
            {BlogsDetailsData?.content2 || ""}
          </p>
        </div>

        {/* Content Images */}
        <div className="flex gap-5 mt-5">
          {BlogsDetailsData?.contentImages?.[0] && (
            <img
              src={BlogsDetailsData.contentImages[0]}
              alt="Content Image 1"
              className="w-1/3 rounded-xl"
            />
          )}
          <div className="w-2/3">
            {BlogsDetailsData?.contentImages?.[1] && (
              <img
                src={BlogsDetailsData.contentImages[1]}
                alt="Content Image 2"
                className="h-[200px] w-[500px] mb-5 rounded-xl"
              />
            )}
            {BlogsDetailsData?.contentImages?.[2] && (
              <img
                src={BlogsDetailsData.contentImages[2]}
                alt="Content Image 3"
                className="h-[200px] w-[500px] rounded-xl"
              />
            )}
          </div>
        </div>

        {/* More Content Blocks */}
        <div className="leading-relaxed">
          <p className="mt-5 leading-relaxed">
            {BlogsDetailsData?.content3 || ""}
          </p>
          <p className="mt-5 leading-relaxed">
            {BlogsDetailsData?.content4 || ""}
          </p>
        </div>

        {/* Bottom Part */}
        <div className="flex justify-between mt-16 pb-10 border-b">
          <div className="flex text-2xl">
            <FaTags className="mt-1" />
            <p className="font-semibold ml-2 text-lg">
              {BlogsDetailsData?.tags || "No Tags"}
            </p>
          </div>

          <div className="flex gap-2 text-3xl">
            <p className="text-xl">Share</p>
            {BlogsDetailsData?.socialMedia?.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <a href={item.link || "#"} key={index} className="ml-2">
                  {IconComponent && <IconComponent />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="modal-action flex justify-end">
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-400"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewBlogDetails;
