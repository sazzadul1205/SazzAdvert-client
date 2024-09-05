import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    {
      label: "HOME",
      link: "/",
      subMenu: [],
    },
    {
      label: "OUR SOLUTIONS",
      link: "#",
      subMenu: [
        { label: "OUR SERVICES", link: "/Services" },
        { label: "SERVICE DETAILS", link: "/ServicesDetails" },
        { label: "OUR TEAM", link: "/OurTeam" },
      ],
    },
    {
      label: "WHO WE ARE",
      link: "#",
      subMenu: [
        { label: "ABOUT US", link: "/AboutUs" },
        { label: "CAREERS", link: "/Careers" },
        { label: "CAREER DETAILS", link: "/CareerDetails" },
      ],
    },
    {
      label: "OUR WORK",
      link: "#",
      subMenu: [
        { label: "SUCCESS STORIES", link: "/SuccessStories" },
        { label: "SUCCESS STORY DETAILS", link: "/SuccessStoryDetails" },
      ],
    },
    {
      label: "PAGES",
      link: "#",
      subMenu: [
        { label: "OUR BLOG", link: "/Blogs" },
        { label: "BLOG DETAILS", link: "/BlogDetails" },
        { label: "TAGS", link: "/Tags" },
        { label: "CATEGORIES", link: "/Categories" },
        { label: "AUTHOR", link: "/Author" },
        { label: "PRIVACY POLICY", link: "/PrivacyPolicy" },
        { label: "TERMS & CONDITION", link: "/TermsCondition" },
      ],
    },
    { label: "Contacts", link: "/contacts", subMenu: [] },
  ];

  const renderNav = () =>
    navItems.map(({ label, link, subMenu }) => (
      <li key={label} >
        <div className="dropdown dropdown-hover ">
          {subMenu.length ? (
            <>
              <p className="hover:text-[#EF4335]">{label}</p>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white font-semibold z-[1] w-52 p-2 shadow"
              >
                {subMenu.map((item) => (
                  <li key={item.link}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ef4335] bg-white "
                          : "hover:text-[#ef4335] "
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive ? "text-[#ef4335] " : "hover:text-[#ef4335]"
              }
            >
              {label}
            </NavLink>
          )}
        </div>
      </li>
    ));

  return (
    <div
      className={`navbar py-[20px] fixed z-50 lg:px-[350px] mx-auto text-black transition-colors duration-300 ${
        scrollPosition > 50 ? "bg-white" : "bg-[#FFE6E6]"
      }`}
    >
      <div className="navbar mx-auto max-w-[1200px]">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              aria-label="Toggle menu"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white font-semibold w-52"
              >
                {renderNav()}
              </ul>
            )}
          </div>
          <Link to="/" className="text-3xl font-bold italic">
            <p
              className="text-center text-4xl font-bold py-5"
              style={{
                background:
                  "linear-gradient(to right, #3512CF 0%, #CF0775 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SazzAdvert
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1 space-x-5 font-semibold text-sm">
            {renderNav()}
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/Careers">
            <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none">
              Get Proposal {">"}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
