"use client";
import { useEffect, useState } from "react";

export default function IBCurriculumStages() {
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
    const curriculums = [
        "IB (MYP & IBDP)",
        "IGCSE / GCSE",
        "A-Levels",
        "Homeschooling",
    ];
    const standardisedTest = [
        "EmSAT",
        "ACT",
        "Advanced Placements (AP)",
        "UCAT",
    ];

    return (
        <div
            className="py-5 overflow-hidden fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.1s", maxWidth: "90vw", margin: "0 auto" }}
        >
            {/* Header Section */}
            <div
                className="text-center mb-5 fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{ animationDelay: "0.15s" }}
            >
                {/* Gradient subtitle with lines */}
                <div
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section"
                    style={{ animationDelay: "0.1s" }}
                >
                    <div
                        className={`SubHeading testSubheading ${isMobile ? "mobileFontOverride" : ""}`}
                    >
                        WHAT CURRICULUM & STANDARDISED TESTS WE OFFER?
                    </div>
                </div>

                {/* Main title */}
                <h2
                    className="fw-bold mb-0 fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat
                    style={{
                        animationDelay: "0.3s",
                        fontSize: isMobile ? "1.5rem" : "2.5rem",
                        lineHeight: "1.1",
                        textTransform: "uppercase",
                        marginTop: "3vh"
                    }}
                >
                    <span
                        style={{
                            background: "linear-gradient(135deg, #3F88BA, #161664)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        LOREM IPSUM DOLOR SIT AMET,
                    </span>{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #00A491, #003E37)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        CONSECTETUR
                    </span>{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #3F88BA, #161664)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        ADIPISCING
                    </span>
                </h2>
            </div>

            <img src="/assets/bgrect25.png" alt="bg-shape" className="testimonialRect rect-1" />
            <img src="/assets/bgrect26.png" alt="bg-shape" className="testimonialRect rect-2" />
            <img src="/assets/bgrect27.png" alt="bg-shape" className="testimonialRect rect-3" />
            {/* Cards Section */}
            <div
                className=" fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{ animationDelay: "0.4s" }}
            >
                <div className="cards-container">
                    {/* Curriculums Card */}
                    <div
                        className="card1 card-ibdp fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: "0.45s" }}
                    >
                        <div>
                            <div className="card-title card-title-ibdp">CURRICULUMS</div>
                            <div className="card-divider"></div>
                            <ul className="card-list">
                                {curriculums.map((item, index) => (
                                    <li key={index} className="card-item">
                                        <span className="check-icon">✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Standardised Tests Card */}
                    <div
                        className="card1 card-myp fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: "0.55s" }}
                    >
                        <div>
                            <div className="card-title2 card-title-myp">
                                STANDARDISED TESTS
                            </div>
                            <div className="card-divider"></div>
                            <ul className="card-list">
                                {standardisedTest.map((item, index) => (
                                    <li key={index} className="card-item">
                                        <span className="check-icon">✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
.mobileFontOverride {
  font-size: 17px !important;
}

        /* Header Section */
        .curriculumSubSection {
          text-align: center;
          position: relative;
          margin-bottom: 1rem;
        }
        /* Cards */
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 700px);
  gap: 2rem;
  justify-content: center; /* keep centered on desktop */
  margin-top: 2rem;
}
  .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }

        .rect-1 {
          top: 0;
          right: 0;
          width: 631px;
          height: 120px;
        }

        .rect-2 {
          top: 15%;
          left: 0;
           width: 428px;
          height: 120px;
        }

        .rect-3 {
          bottom: 0;
          right: 0;
          width: 945px;
          height: 120px;
        }


/* Tablet & below → single column */
@media (max-width: 1200px) {
  .cards-container {
    grid-template-columns: 1fr;
    justify-content: center; /* center single card */
  }

  .card1 {
    width: 100%;      /* take full width of container */
    max-width: 90vw;  /* prevent overflow */
    height: auto;     /* keep aspect ratio if needed */
  }
}



        .card1 {
          padding: 50px 40px;
          min-height: 400px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .card-ibdp {
          background: url("/assets/recte1.png") no-repeat center center /
            cover;
                width:700px;
            height:496px;
        }

        .card-myp {
          background: url("/assets/recte2.png") no-repeat center center /
            cover;
            width:700px;
            height:496px;
        }

        .card-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 45px;
          margin-bottom: 15px;
background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-title2 {
          font-size: 40px;
          font-weight: 800;
          line-height: 45px;
          margin-bottom: 15px;
background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Divider between title and list */
        .card-divider {
          width: 70%;
          height: 1px;
          background: #233467;
          margin: 20px 0;
        }

        /* Lists */
        .card-list {
          list-style: none;
          padding: 0;
          margin-top: 10px;
        }

        .card-item {
          display: flex;
          align-items: center;
          color: #1a2a49;
          margin-bottom: 2rem;
          font-size:30px;
          line-height:30px;
          font-weight: 600;
        }

        .check-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          margin-right: 12px;
          border-radius: 50%;
background: linear-gradient(285.71deg, #3F88BA -4.32%, #161664 106.53%),
linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
          color: white;
          font-size: 14px;
          font-weight: bold;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr;
          }
          .card-title,
          .card-title2 {
            font-size: 28px;
          }
          .card-item {
            font-size: 18px;
          }
          .check-icon {
            width: 24px;
            height: 24px;
            font-size: 12px;
          }
                  .rect-1 {
          top: 24%;
          right: 0;
          width: 125px;
          height: 60px;
        }

        .rect-2 {
          top: 50%;
          left: 0;
           width: 125px;
          height: 60px;
        }

        .rect-3 {
          bottom: 40%;
          right: 0;
          width: 125px;
          height: 60px;
        }
        }

        @media (max-width: 575px) {
          .card-title,
          .card-title2 {
            font-size: 24px;
          }
          .card-item {
            font-size: 16px;
          }
        }
      `}</style>
        </div>
    );
}
