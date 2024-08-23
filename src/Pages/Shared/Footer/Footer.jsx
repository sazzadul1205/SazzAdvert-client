import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Footer = () => {
  return (
    <div className="bg-white pb-5">
      <ScrollAnimation animateIn="fadeIn">
        <footer className="footer bg-[#f2f2f8] text-black pt-20 p-10 max-w-[1200px] mx-auto rounded-lg">
          <nav>
            <h6 className="footer-title text-[22px] pb-3 text-black">
              {" "}
              Solutions
            </h6>
            <a className="link link-hover pb-2 text-[16px]">Google Ads</a>
            <a className="link link-hover pb-2 text-[16px]">Social Media Ads</a>
            <a className="link link-hover pb-2 text-[16px]">Amazon Shopping</a>
            <a className="link link-hover pb-2 text-[16px]">Email Marketing</a>
            <a className="link link-hover pb-2 text-[16px]">Microsoft Ads</a>
          </nav>
          <nav>
            <h6 className="footer-title text-[22px] pb-3 text-black">
              Resources
            </h6>
            <a className="link link-hover pb-2 text-[16px]">Our Blog </a>
            <a className="link link-hover pb-2 text-[16px]">Success Stories </a>
            <a className="link link-hover pb-2 text-[16px]">
              Customers Review{" "}
            </a>
            <a className="link link-hover pb-2 text-[16px]">Contact Us </a>
            <a className="link link-hover pb-2 text-[16px]">About Us </a>
          </nav>
          <nav>
            <h6 className="footer-title text-[22px] pb-3 text-black">
              Opportunities
            </h6>
            <a className="link link-hover pb-2 text-[16px]">Careers </a>
            <a className="link link-hover pb-2 text-[16px]">Partnerships </a>
            <a className="link link-hover pb-2 text-[16px]">Awards </a>
            <a className="link link-hover pb-2 text-[16px]">Get A Proposal </a>
            <a className="link link-hover pb-2 text-[16px]">Free Audit </a>
          </nav>
          <form>
            <h6 className="footer-title text-[22px] pb-3 text-black">
              SignUp Newsletter
            </h6>
            <fieldset className="form-control w-80">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-[250px] rounded-full mb-5 bg-white"
              />
              <button className="btn text-white bg-black rounded-3xl border-none hover:bg-[#ef4335] w-[250PX]">
                SIGNUP NOW {">"}
              </button>
            </fieldset>
            <div className="flex gap-2 text-2xl ml-10">
              <FaFacebook></FaFacebook>
              <FaLinkedin></FaLinkedin>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaYoutube></FaYoutube>
            </div>
          </form>
        </footer>
        <footer className="footer text-lg text-black font-semibold items-center p-4 mx-auto max-w-[1200px]">
          <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p>Privacy & Policy | Terms & Conditions</p>
          </div>
        </footer>
      </ScrollAnimation>
    </div>
  );
};

export default Footer;
