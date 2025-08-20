"use client";
import React from "react";
import {
    ArrowRight,
    UserCheck,
    BookOpen,
    Database,
    Laptop,
    BarChart3,
    TrendingUp,
    Image,
    Award
} from "lucide-react";

function USPItem({ number, icon, title, desc }) {
    return (
        <div className="text-start fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: `${0.2 + number * 0.05}s` }}
        >
            <div className="d-flex align-items-start mb-4">
                <div
                    className="bg-teal rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                    style={{
                        width: "64px",
                        height: "64px",
                        background: "linear-gradient(135deg, #00A491, #003E37)"
                    }}
                >
                    {icon}
                </div>

                <span
                    className="fw-bold lh-1"
                    style={{ fontSize: "3.5rem", color: "#e5e7eb", marginLeft: "4px" }}
                >
                    {number}
                </span>
            </div>
            <h3
                className="fw-bold text-uppercase mb-3"
                style={{
                    fontSize: "1.125rem",
                    letterSpacing: "1px",
                    background: "linear-gradient(135deg, #3F88BA, #161664)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                {title}
            </h3>

            <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                {desc}
            </p>
        </div>
    );
}

function UpsSection() {
    const uspItems = [
        {
            number: "01",
            icon: <Image size={32} color="#fff" />,
            title: "IB-SPECIFIC TUTORS",
            desc: "Highly qualified IB-specific tutors delivering all-around support."
        },
        {
            number: "02",
            icon: <UserCheck size={32} color="#fff" />,
            title: "INDIVIDUAL ATTENTION",
            desc: "Small group training (SGT) to focus individually on every student."
        },
        {
            number: "03",
            icon: <Award size={32} color="#fff" />,
            title: "GRADE ASSURANCE",
            desc: "Better grade assurance with critical testing & review methodology."
        },
        {
            number: "04",
            icon: <BookOpen size={32} color="#fff" />,
            title: "EXAMINATION PREP",
            desc: "Full IB exam prep with tutoring, resources, testing, & review."
        },
        {
            number: "05",
            icon: <Database size={32} color="#fff" />,
            title: "STRONG FOUNDATION",
            desc: "Focus on fundamentals for an exceptionally strong foundation."
        },
        {
            number: "06",
            icon: <Laptop size={32} color="#fff" />,
            title: "STIMULATING ENVIRONMENT",
            desc: "Result-oriented culture ensuring a fun & stimulating environment."
        },
        {
            number: "07",
            icon: <BarChart3 size={32} color="#fff" />,
            title: "STRUCTURED LEARNING",
            desc: "Problem-based learning covering practical aspects of all units."
        },
        {
            number: "08",
            icon: <TrendingUp size={32} color="#fff" />,
            title: "PROGRESS TRACKING",
            desc: "Practice with unit tests & mock exams under exam-like conditions."
        }
    ];

    return (
        <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            className=" py-5 px-3 fade-in-section"
            style={{ animationDelay: "0.1s" }}
        >
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-5 fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat
                    style={{ animationDelay: "0.15s" }}
                >
                <div className="testHeadings">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="SubHeading testSubheading">UPS,s
</div>
          </div>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET,
            CONSECTETUR <span className="highlight">ADIPISCING</span>
          </h2>
        </div>

                </div>

                {/* USP Grid */}
                <div className="row g-4 mb-5">
                    {uspItems.map((item) => (
                        <div key={item.number} className="col-6 col-md-3">
                            <USPItem {...item} />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center fade-in-section"
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat
                    style={{ animationDelay: "0.7s" }}>
                    <button
                        className="btn fw-bold d-flex align-items-center mx-auto rounded-pill"
                        style={{
                            background: "linear-gradient(90deg, #3F88BA, #161664)",
                            color: 'white',
                            padding: '0.8rem 1.8rem',
                            border: 'none',
                            transition: 'opacity 0.3s ease',
                            fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)"
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                        onMouseLeave={(e) => e.target.style.opacity = "1"}
                    >
                        MEET OUR TRAINERS
                        <div
                            className="ms-3 rounded-circle d-flex align-items-center justify-content-center fade-in-section"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat
                            style={{
                                width: 'clamp(1.5rem, 2vw, 2rem)',
                                height: 'clamp(1.5rem, 2vw, 2rem)',
                                background: "linear-gradient(90deg, #E7F6FF, #A3CAF5)",
                                animationDelay: "0.75s"
                            }}
                        >
                            <img src="/assets/arrowright.png" alt="arrright" width={12} height={12} />
                        </div>
                    </button>
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
      `}</style>
        </div>
    );
}

export default UpsSection;