import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();

  // Admin Links
  const AdminNavLink = [
    { to: "AdminHome", label: "Home" },
    { to: "AdminCareers", label: "Careers" },
    { to: "AdminServices", label: "Services" },
    { to: "AdminServicesDetails", label: "Services Details" },
    { to: "AdminAboutUs", label: "About Us" },
    { to: "AdminSuccessStories", label: "Success Stories" },
    { to: "AdminBlogs", label: "Blogs" },
    { to: "AdminContacts", label: "Contacts" },
    { to: "AdminOurTeam", label: "Our Team" },
    { to: "AdminCareerDetails", label: "Career Details" },
    { to: "AdminSuccessStoryDetails", label: "Success Story Details" },
    { to: "AdminBlogDetails", label: "Blog Details" },
    { to: "AdminTags", label: "Tags" },
    { to: "AdminCategories", label: "Categories" },
    { to: "AdminPrivacyPolicy", label: "PrivacyPolicy" },
    { to: "AdminTermsCondition", label: "TermsCondition" },
  ];

  const generateRandomColor = () => {
    // Generate a random hex color
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const adminNav = AdminNavLink.map((link) => {
    const randomColor = generateRandomColor();

    return (
      <li key={link.to} className="mb-2">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `text-lg font-semibold relative group block rounded-r-2xl py-2 px-4 transition-colors duration-300 hover:text-white ${
              isActive ? `bg-${randomColor} text-white` : `text-black`
            }`
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? randomColor : "transparent",
          })}
        >
          {link.label}
          <span
            className={`absolute inset-y-0 left-0 w-0 bg-${randomColor} group-hover:w-full transition-all duration-300 -z-10`}
            style={{ backgroundColor: randomColor }}
          ></span>
        </NavLink>
      </li>
    );
  });

  useEffect(() => {
    // Navigate to the Admin home page when the component mounts
    navigate("/Dashboard/AdminHome");
  }, [navigate]);

  return (
    <div className="bg-gradient-to-r from-pink-700 to-blue-700">
      <div className="flex max-w-[1200px] mx-auto">
        {/* Dashboard side bar */}
        <div className="w-80 h-screen pb-10 fixed border border-black bg-white overflow-y-auto">
          <NavLink to={"/"}>
            <p className="text-red-600 font-bold text-2xl pt-4 pl-5 hover:text-pink-400">
              {"<-"} Back
            </p>
          </NavLink>
          <p
            className="text-center text-4xl font-bold py-5"
            style={{
              background: "linear-gradient(to right, #3512CF 0%, #CF0775 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SazzVert
          </p>
          <ul className="menu p-4 pb-5">
            <ul className="menu menu-vertical px-1">{adminNav}</ul>
          </ul>
        </div>
        {/* Dashboard Content */}
        <div className="flex-1 ml-[320px]  overflow-y-auto min-h-screen">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
