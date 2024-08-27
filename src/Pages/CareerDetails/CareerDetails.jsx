import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

// Example data structure for responsibilities and qualifications
const jobDetails = {
  responsibilities: [
    "Work with and support other Search Engineers, Internet Marketers, Designers, Programmers, Art and Creative Directors on high-end websites.",
    "Develop your skills and augment your training with directed research in your very specific tasks.",
    "Use the online productivity platform Asana to organize and keep track of your completed tasks.",
    "Get constant feedback and suggestions on how to improve your skills.",
    "Break through barriers and confusion by working with the team before you are frustrated with tasks.",
    "Be certain you are studying and practicing the most important daily skills you need to be an elite level internet marketer and search engine optimizer.",
    "Coordinates with individual brand managers to maintain website content in a timely manner.",
    "Configures websites to deliver functionality and promotions as directed.",
    "Generates and analyzes SEO reports, monitors opportunities for improvement, and implements SEO changes to the websites.",
    "Audits website content for reliability, accuracy, and usability. Updates website metadata and content daily to ensure relevance and accuracy.",
  ],
  qualifications: [
    "Bachelor's degree in marketing, communications, public relations, or a related field is preferred.",
    "Ideally 4 years of experience in social media management, preferably in the nutrition, health, or wellness industry. Provide a portfolio or examples of successful social media campaigns.",
    "Strong understanding of various social media platforms, their features, algorithms, and best practices. Proficiency in using social media management and analytics tools.",
    "Excellent copywriting skills with the ability to create engaging and compelling content. Proficiency in graphic design and video editing software is not a requirement but is a plus.",
    "Experience in identifying, collaborating with, and managing influencers for successful marketing campaigns. Familiarity with influencer marketing platforms and tools.",
    "Ability to develop and execute social media strategies aligned with business goals. Strong analytical skills to track metrics, analyze data, and make data-driven decisions.",
    "Proven track record of creating innovative social media campaigns and content ideas. Ability to think outside the box and stay updated with the latest trends.",
    "Excellent communication and interpersonal skills to effectively collaborate with internal teams, external partners, and influencers.",
    "Strong work ethic and a desire to continuously learn and improve.",
    "A scrappy, startup mindset, with no fear of taking ownership to develop and drive your vision.",
    "The desire to win, with an inherently competitive spirit.",
    "You live, breathe, eat, sleep, and dream social media; if talking about the TikTok algorithm doesn't excite you, this role may not be a good fit!",
  ],
};

const CareerDetails = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFE6E6] to-white py-36 text-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white px-12 py-16 rounded-lg shadow-lg">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Online Marketing Manager</h1>
            <div className="flex space-x-5 text-lg">
              <div className="flex items-center space-x-1">
                <FaLocationDot className="text-2xl text-gray-500" />
                <p>Dhaka</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaBriefcase className="text-2xl text-gray-500" />
                <p>Full Time</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-2xl text-gray-500" />
                <p>July 29, 2024</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div>
              <h1 className="font-bold text-base">Job Details:</h1>
              <p>
                Welcome to "Demystifying Paid Search Ads: A Beginner's Guide."
                If you've ever wondered how businesses appear at the top of
                search engine results, you're about to discover the secret
                behind their success. Paid search advertising, also known as
                Pay-Per-Click (PPC), is a powerful digital marketing tool that
                allows businesses to bid on keywords and display targeted ads to
                potential customers. In this comprehensive guide, we'll break
                down the fundamentals of paid search ads, empowering you to
                harness this effective strategy and propel your business to new
                heights in the digital landscape.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-base pt-10">
                Open Number of Positions:
              </h1>
              <p>05</p>
            </div>

            <div>
              <h1 className="font-bold text-base pt-10">Responsibilities</h1>
              <ul className="list-disc ml-5">
                {jobDetails.responsibilities.map((responsibility, index) => (
                  <li className="pt-2" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-base pt-10">
                Ideal Qualifications:
              </h1>
              <ul className="list-disc ml-5 gap-2">
                {jobDetails.qualifications.map((qualification, index) => (
                  <li className="mb-3" key={index}>
                    {qualification}
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none mt-5">
              Get Proposal {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
