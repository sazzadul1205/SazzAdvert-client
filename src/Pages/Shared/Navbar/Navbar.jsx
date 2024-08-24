import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const nav = (
    <>
      <li>
        <NavLink className="hover:text-[#ef4335] text-md" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef4335] text-md" to="/about">
          Our Solutions
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef4335] text-md" to="/blog">
          Who we are
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef4335] text-md" to="/contact">
          Our Work
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef4335] text-md" to="/pages">
          Pages
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-[#ef4335] text-md" to="/contacts">
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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="text-3xl font-bold italic">SazzAdvert</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5  px-1 space-x-5 font-semibold">{nav}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/Careers"}>
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
