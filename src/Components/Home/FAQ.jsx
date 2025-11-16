import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer: "",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer: "",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer: "",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer: "",
    },
  ];

  return (
    <div className="w-full  py-14 flex flex-col items-center px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#1A1A1A]">
        Frequently Asked Question (FAQ)
      </h2>

      {/* Subtitle */}
      <p className="mt-3 text-center text-gray-600 max-w-2xl">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      {/* FAQ list */}
      <div className="mt-10 w-full max-w-3xl space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`border rounded-xl bg-white ${
              open === i ? "border-[#7bd389]" : "border-gray-200"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-semibold text-gray-800">{item.question}</span>
              {open === i ? (
                <FiChevronUp className="text-xl text-gray-700" />
              ) : (
                <FiChevronDown className="text-xl text-gray-700" />
              )}
            </button>

            {open === i && item.answer && (
              <div className="px-4 pb-4 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-10 bg-[#a3e37d] hover:bg-[#94d46e] text-gray-900 font-semibold px-8 py-3 rounded-full flex items-center space-x-2 shadow-md">
        <span>See More FAQ’s</span>
        <span className="bg-black text-white rounded-full p-1">
          →
        </span>
      </button>
    </div>
  );
};

export default FAQ;
