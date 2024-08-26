import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const nav = (
    <>
      <li>
        {/* Home link's */}
        <div className="dropdown dropdown-hover">
          <p className={"hover:text-[#EF4335]"} to="/">
            HOME
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white font-semibold z-[1] w-72 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ef4335] bg-white "
                    : "hover:text-[#ef4335]  "
                }
                to="/"
              >
                PAID SEARCH AD AGENCY
              </NavLink>
            </li>
            <li>
              <a href="#">SOCIAL MEDIA AD AGENCY</a>
            </li>
            <li>
              <a href="#">TRADITIONAL/OFFLINE AD AGENCY</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        {/* Services link's */}
        <div className="dropdown dropdown-hover">
          <p className="hover:text-[#ef4335]">OUR SOLUTIONS</p>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white font-semibold z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ef4335] bg-white "
                    : "hover:text-[#ef4335]  "
                }
                to="/Services"
              >
                OUR SERVICES
              </NavLink>
            </li>
            <li>
              <a href="#">SERVICE DETAILS</a>
            </li>
            <li>
              <a href="#">OUR TEAM</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        {/* About Us link's */}
        <div className="dropdown dropdown-hover">
          <p className={"hover:text-[#EF4335]"}>WHO WE ARE</p>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white font-semibold z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ef4335] bg-white "
                    : "hover:text-[#ef4335]  "
                }
                to="/AboutUs"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <a href="#">CAREERS</a>
            </li>
            <li>
              <a href="#">CAREER DETAILS</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        {/* Work Link's */}
        <div className="dropdown dropdown-hover">
          <p className={"hover:text-[#EF4335]"}>OUR WORK</p>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white font-semibold z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ef4335] bg-white "
                    : "hover:text-[#ef4335]  "
                }
                to="/SuccessStories"
              >
                SUCCESS STORIES
              </NavLink>
            </li>
            <li>
              <a href="#">SUCCESS STORY DETAILS</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        {/* Pages link's */}
        <div className="dropdown dropdown-hover">
          <p className={"hover:text-[#EF4335]"}>PAGES</p>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white font-semibold z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ef4335] bg-white "
                    : "hover:text-[#ef4335]  "
                }
                to="/Blogs"
              >
                OUR BLOG
              </NavLink>
            </li>
            <li>
              <a href="#">BLOG DETAILS</a>
            </li>
            <li>
              <a href="#">TAGS</a>
            </li>
            <li>
              <a href="#">CATEGORIES</a>
            </li>
            <li>
              <a href="#">AUTHOR</a>
            </li>
            <li>
              <a href="#">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="#">AUTHOR</a>
            </li>
          </ul>
        </div>
      </li>
      {/* Contacts */}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#ef4335] text-md "
              : "hover:text-[#ef4335] text-md"
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      </li>
    </>
  );

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
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                {nav}
              </ul>
            )}
          </div>
          <Link to="/" className="text-3xl font-bold italic">
            SazzAdvert
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1 space-x-5 font-semibold">{nav}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/Careers">
            <button className="btn text-white px-10 rounded-3xl hover:bg-[#ef4335] border-none">
              Get Proposal {">"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
