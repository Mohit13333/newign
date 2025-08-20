"use client";

export default function CareersBanner() {
  return (
    <section className="careers-banner fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat style={{
        animationDelay: "0.3s",
      }}>
      {/* Dark overlay */}
      <div className="dark-overlay"></div>

      <div className="overlay">
        <h2 className="heading"
          style={{
            background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          CAREERS
        </h2>
        <p className="subHeading">HOME // CAREERS</p>
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
          .careers-banner {
            font-family: 'Montserrat', sans-serif;
            position: relative;
            max-width: 90vw;
            width: 100%;
            height: calc(90vw / 2.98); /* desktop aspect ratio */
            margin: auto;
            border-radius: 12px;
            overflow: hidden;
            background-image: url("/assets/banner.jpg");
            background-size: cover;
            background-position: center;
          }

          /* Dark overlay */
          .dark-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 12px;
          }

          .overlay {
            position: absolute;
            bottom: 20px;
            left: 50px;
            color: white;
            z-index: 1;
          }

          .heading {
            margin: 0;
font-size: 3.33vw; 
            font-weight: 800;
            line-height:70px;
          }

          .subHeading {
            margin: 0;
font-size: 1.35vw;
            font-weight:800;
            opacity: 0.8;
          }

          @media (max-width: 768px) {
            .careers-banner {
              height: 90vw; /* square card on mobile */
            }
            h2 {
font-size: 6.33vw !important; 
            font-weight: 800 !important;
            line-height:36px !important;
                        }
            p {
      margin: 0 !important;
font-size: 4.08vw !important;
            font-weight:800 !important;
            opacity: 0.8 !important;            }
          }
      `}</style>
    </section>
  );
}