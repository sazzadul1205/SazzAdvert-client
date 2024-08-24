const FAQ = () => {
  // Sample data (this would typically come from a database)
  const faqItems = [
    {
      question: "How does Paid Search Marketing work?",
      answer:
        "Paid Search Marketing works through an auction-based system. Advertisers bid on specific keywords, stating the maximum amount they are willing to pay for each click on their ad. The search engine then considers the bid amount, ad relevance, and other factors to determine which ads will be displayed.",
    },
    {
      question: "What are the benefits of Paid Search Marketing? ",
      answer:
        "Paid Search Marketing works through an auction-based system. Advertisers bid on specific keywords, stating the maximum amount they are willing to pay for each click on their ad. The search engine then considers the bid amount, ad relevance, and other factors to determine which ads will be displayed.",
    },
    {
      question: "Which platforms offer Paid Search Marketing?",
      answer:
        "Paid Search Marketing works through an auction-based system. Advertisers bid on specific keywords, stating the maximum amount they are willing to pay for each click on their ad. The search engine then considers the bid amount, ad relevance, and other factors to determine which ads will be displayed.",
    },
    {
      question: "How do I create a Paid Search Marketing campaign? ",
      answer:
        "Paid Search Marketing works through an auction-based system. Advertisers bid on specific keywords, stating the maximum amount they are willing to pay for each click on their ad. The search engine then considers the bid amount, ad relevance, and other factors to determine which ads will be displayed.",
    },
    {
      question: "What is Quality Score in Paid Search Marketing?",
      answer:
        "Paid Search Marketing works through an auction-based system. Advertisers bid on specific keywords, stating the maximum amount they are willing to pay for each click on their ad. The search engine then considers the bid amount, ad relevance, and other factors to determine which ads will be displayed.",
    },
    {
      question: "Is Paid Search Marketing suitable for all businesses?",
      answer:
        "Paid Search Marketing works through an auction-based system. Advertisers bid on specific keywords, stating the maximum amount they are willing to pay for each click on their ad. The search engine then considers the bid amount, ad relevance, and other factors to determine which ads will be displayed.",
    },
  ];

  return (
    <div className=" bg-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center justify-center mx-auto text-black pb-10">
          <p className="text-[17px] font-semibold">FAQ’S</p>
          <h1 className="text-[36px] w-full max-w-[648px] font-semibold mx-auto">
            Our Achievements, Woven with Passion and Precision
          </h1>
        </div>

        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-[#faf4f4] text-black mb-5 w-[810px] mx-auto"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p className="pr-5 ">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
