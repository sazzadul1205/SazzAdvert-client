import Image from "../../../assets/ServiceDetails/Image1.jpg";

const Marketing = () => {
  const chapters = [
    {
      title: "Introduction:",
      content:
        "Welcome to 'Demystifying Paid Search Ads: A Beginner's Guide.' If you've ever wondered how businesses appear at the top of search engine results, you're about to discover the secret behind their success. Paid search advertising, also known as Pay-Per-Click (PPC), is a powerful digital marketing tool that allows businesses to bid on keywords and display targeted ads to potential customers. In this comprehensive guide, we'll break down the fundamentals of paid search ads, empowering you to harness this effective strategy and propel your business to new heights in the digital landscape.",
    },
    {
      title: "Chapter 1: Understanding Paid Search Advertising",
      content:
        "In this chapter, we'll lay the groundwork by explaining what paid search ads are and how they function. You'll gain insights into popular advertising platforms like Google Ads and Bing Ads, and we'll explore the numerous benefits these ads offer to businesses of all sizes. By understanding the core principles of paid search advertising, you'll be better equipped to leverage its potential to drive relevant traffic and achieve your marketing objectives.",
    },
    {
      title: "Chapter 2: The Anatomy of a Search Ad",
      content:
        "Unravel the components that make up a successful search ad in this chapter. From captivating headlines to compelling descriptions and strategically placed URLs, we'll delve into the art of crafting ad copy that engages and resonates with your target audience. With a focus on relevant keywords and match types, you'll learn how to optimize your ads for maximum impact and relevancy.",
    },
    {
      title: "Chapter 3: Setting Up Your First Campaign",
      content:
        "Ready to create your first paid search ad campaign? This chapter will guide you through the process step-by-step. You'll learn how to define your advertising goals, structure campaigns and ad groups effectively, and set appropriate budgets and bidding strategies. Armed with this knowledge, you'll be ready to launch your campaign with confidence.",
    },
    {
      title: "Chapter 4: Keyword Research & Targeting",
      content:
        "The cornerstone of successful paid search advertising lies in selecting the right keywords. In this chapter, we'll dive into keyword research techniques to identify high-value, relevant terms that align with your business offerings. Discover how to use keyword tools and understand match types to ensure your ads reach the right audience at the right time.",
    },
  ];

  const sidebarLinks = [
    "Campaign Strategy",
    "Campaign Optimization",
    "Bid Management",
    "Performance Tracking",
    "Google Ads",
    "Microsoft Ads",
    "Social Media Ads",
    "Shopping Campaign",
  ];

  return (
    <div className="bg-[#FFE6E6]">
      <div className="max-w-[1200px] mx-auto text-black">
        <img src={Image} alt="" />
        <div className="flex pt-10 justify-between">
          {/* Main Content */}
          <div className="w-[850px]">
            <p className="text-4xl font-bold mb-5">Paid search marketing</p>
            {chapters.map((chapter, index) => (
              <div key={index}>
                <p className="font-bold pb-3">{chapter.title}</p>
                <p className="pb-8">{chapter.content}</p>
              </div>
            ))}
          </div>
          {/* Sidebar */}
          <div className="w-[310px]">
            <div className="bg-white p-10 font-semibold rounded-xl">
              {sidebarLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 hover:text-red-500 cursor-pointer"
                >
                  <p className="underline">{link}</p>
                  <p className="text-red-500">{">"}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
