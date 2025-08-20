"use client";
import React from "react";

export default function IgniteCareerCard() {
  return (
    <section className="ignite-section">
      <div className="ignite-container">
        {/* Left Content */}
        <div className="ignite-left">
          <div className="subtitle-wrapper">
            <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3 fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: "0.25s" }}>
               <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="SubHeading testSubheading">ABOUT IGNITE'S CAREER
</div>
          </div>
            </div>
          </div>

          <h1 className="ignite-main-title fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            LOREM IPSUM DOLOR SIT AMET,<br />
            CONSECTETUR <span className="green-text">ADIPISCING</span>
          </h1>

          <p className="ignite-description  fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            Choosing us means partnering with experienced coaches who
            are dedicated to unlocking your potential.We offer personalized
            strategies, proven methods, and unwavering support to help
            you navigate challenges.
          </p>

          <h2 className="ignite-secondary-title fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            LOREM IPSUM DOLOR SIT AMET,<br />
            CONSECTETUR ADIPISCING
          </h2>

          <p className="ignite-short-description">
            Choosing us means partnering with
            experienced coaches who are dedicated to
            unlocking your potential.
          </p>
        </div>

        {/* Right Content */}
        <div className="ignite-right">
          <div className="image-container fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat style={{
              animationDelay: "0.3s",
            }}>
            <img
              src="/assets/person1.jpg"
              alt="Two professionals working together on laptop"
              className="main-image"
            />
          </div>

          {/* Separate Check items boxes */}
          <div
            className="check-boxes-container fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}
          >
            <div className="check-box d-flex justify-content-between">

              {/* First item */}
              <div className="d-flex align-items-start gap-2">
                  <img src="/assets/check.png" alt="check" width={30} height={30} />
                <span>Lorem ipsum dolor<br />sit amet, consectetur.</span>
              </div>

              {/* Second item */}
              <div className="d-flex align-items-start gap-2">
                  <img src="/assets/check.png" alt="check" width={30} height={30} />
                <span className="spanText">Lorem ipsum dolor<br />sit amet, consectetur.</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
      @font-face {
  font-family: 'Monstra';
  src: url('/fonts/Monstra.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.my-text {
  font-family: 'Monstra', sans-serif;
}

        .ignite-section {
          padding: 60px 20px;
          font-family: 'Montserrat', sans-serif;
        }

        .ignite-container {
          max-width: 90vw;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .ignite-left {
          padding-right: 20px;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
        
        .subtitle-wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
          margin-bottom: 25px;
        }

        .header-title {
          font-size: 30px;
          line-height:1;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          white-space: nowrap;
        }

        .menu-lines {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .line {
          width: 20px;
          height: 2px;
          background: #00A491;
          display: block;
        }

        .ignite-subtitle {
          font-size: 36.864px;
          font-weight: 700;
          color: #2C5F7D;
          letter-spacing: 1;
          margin: 0;
        }

        .ignite-main-title {
          font-size: 2vw;
          font-weight: 800;
          color: #233467;
          line-height: 1.2;
          margin: 0 0 12px 0;
        }

        .green-text {
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ignite-description {
          font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
          max-width: 90%;
        }

        .ignite-secondary-title {
          font-size: 1.5vw;
          font-weight: 800;
          background: linear-gradient(90deg, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;          
          line-height: 35px;
          letter-spacing: 5%;
          margin: 0 0 15px 0;
          text-transform: uppercase;
        }

        .ignite-short-description {
      font-size: 1vw;
          font-weight:600;
          color: #7a8ca3;
          margin: 0 0 18px 0;
          line-height: 1.6;
          max-width: 90%;
        }

        .ignite-right {
          position: relative;
        }

        .image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        .check-boxes-container {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .check-box {
          background: url("/assets/Rectangle154.png") no-repeat center/cover;
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          flex: 1;
          box-shadow: 0 4px 15px rgba(168, 197, 242, 0.3);
        }

        .check-circle {
          width: 28px;
          height: 28px;
          background: linear-gradient(180deg, #3F88BA 0%, #161664 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-box span {
          font-size: 1vwrem;
          color: #2C5F7D;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .ignite-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .ignite-left {
            padding-right: 0;
          }

         .ignite-main-title {
          font-size: 2.3vw;
          font-weight: 800;
          color: #233467;
          line-height: 1;
          margin: 0 0 25px 0;
        }

          .check-boxes-container {
            flex-direction: flex;
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .subtitle-wrapper {
            justify-content: center;
            text-align: center;
            width: 100%;
          }

          .header-title {
            font-size: 20px !important;
            white-space: nowrap;
            overflow: visible;
            padding: 0 8px;
          }

           .ignite-main-title {
          font-size: 19px;
          font-weight: 800;
          color: #233467;
          margin: 0 0 25px 0;
            text-align: center;
        }

          .ignite-secondary-title {
            font-size: 1.2rem;
            text-align: center;
          }

          .ignite-description,
          .ignite-short-description {
          font-size:15px;
            text-align: center;
          }

          .check-boxes-container {
            padding: 20px;
          }

          .line {
            width: 15px;
          }
        }

        @media (max-width: 480px) {
          .header-title {
            font-size: 19px !important;
            padding: 0 4px;
          }

          .header-title img {
            width: 12px !important;
            height: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}