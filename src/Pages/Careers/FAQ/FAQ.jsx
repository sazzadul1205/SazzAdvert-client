import { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = ({ FaqData, FaqTitle }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto" data-aos="fade-up">
        <div className="text-center justify-center mx-auto text-black pb-10">
          <p className="text-[17px] font-semibold">{FaqTitle?.title}</p>
          <h1 className="text-[36px] w-full max-w-[648px] font-semibold mx-auto">
            {FaqTitle?.description}
          </h1>
        </div>

        {/* Accordion */}
        <div>
          {FaqData?.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-[#faf4f4] text-black mb-5 w-[810px] mx-auto"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="pr-5 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
FAQ.propTypes = {
  FaqData: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  FaqTitle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FAQ;
