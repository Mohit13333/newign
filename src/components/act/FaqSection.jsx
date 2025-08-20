"use client";

import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const faqData = [
    {
      question: "LOREM IPSUM DOLOR SIT AMET?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      question: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      question: "LOREM IPSUM DOLOR SIT AMET?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
    {
      question: "LOREM IPSUM DOLOR SIT AMET?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    },
  ];

  return (
    <div
      className=" d-flex justify-content-center align-items-center bg-white px-3 px-lg-5 fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
    >
      <div
        className="w-100 overflow-hidden fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          maxWidth: "90vw",
          backgroundImage: 'url("/assets/faqbg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: isMobile ? "2rem 1.5rem" : "3rem 2rem",
          borderRadius: "3rem",
          display: "flex",
          alignItems: "center", // vertical center
          minHeight: "60vh", // keep section height
        }}
      >
        <div className="row g-5 w-100 align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            {/* FAQ Header */}
            <div className="testimonialHeader">
              <span className="SubHeading">                FAQS
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="fw-bold mb-4 lh-sm"
              style={{ color: "#1e3a8a", fontSize: isMobile ? "1.8rem" : "2vw", lineHeight:"1.2", marginTop:"6px"  }}
            >
              LOREM IPSUM DOLOR SIT AMET,
              <span style={{ color: "#0d9488" }}> CONSECTETUR </span>
              <span style={{ color: "#1e3a8a", fontSize: isMobile ? "1.8rem" : "2vw", lineHeight:"1.2" }}>ADIPISCING</span>
            </h1>

            <p
              style={{ color: "#64748b", maxWidth: "28rem",fontSize: isMobile ? "1.2rem" : "23px", lineHeight: isMobile ? "1.5" : "1.2" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 d-flex flex-column gap-3 fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-bottom"
                style={{ borderColor: "#cbd5e1" }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-100 d-flex justify-content-between align-items-center text-start btn btn-link text-decoration-none p-0"
                  style={{
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <span
                    className="fw-bold h5 lh-sm mb-0"
                    style={{ color: "#1e3a8a",fontSize: isMobile ? "1.1rem" : "25px", lineHeight:"100%",letterSpacing:"10%" }}
                  >
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus
                      style={{
                        color: "#1e3a8a",
                        width: isMobile ? "18px" : "22px",
                        height: isMobile ? "18px" : "22px",
                      }}
                    />
                  ) : (
                    <Plus
                      style={{
                        color: "#1e3a8a",
                        width: isMobile ? "18px" : "22px",
                        height: isMobile ? "18px" : "22px",
                      }}
                    />
                  )}
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    transition: "all 0.3s ease-in-out",
                    maxHeight: openIndex === index ? "10rem" : "0",
                    paddingBottom: openIndex === index ? "1rem" : "0",
                  }}
                >
                  <p
                    style={{
                      color: "#64748b",
                      paddingRight: "1.5rem",
                      marginBottom: 0,
                      fontSize: isMobile ? "0.9rem" : "23px", 
                      lineHeight: isMobile ? "1.4" : "1.2"
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default FAQSection;