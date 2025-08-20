// "use client"
// import Image from "next/image";

// export default function InfoCard() {
//   return (
//     <div
//       data-scroll
//       data-scroll-class="is-inview"
//       data-scroll-repeat
//       className="container-fluid fade-in-section"
//       style={{ maxWidth: "1200px", margin: "2.5rem auto", animationDelay: "0.1s" }}
//     >
//       <div
//         className="position-relative overflow-hidden"
//         style={{
//           backgroundImage: "url('/assets/1stcard.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           borderRadius: "1.5rem",
//           minHeight: "600px",
//         }}
//       >
//         {/* Dark overlay */}
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{
//             background: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "1.5rem",
//             animationDelay: "0.15s"
//           }}
//         ></div>

//         {/* Content container */}
//         <div className="position-relative h-100" style={{ zIndex: 1 }}>
//           <div className="row g-0 h-100 p-4">
//             {/* Left Section */}
//             <div className="col-lg-7 d-flex flex-column justify-content-center pe-lg-4">
//               <h1
//                 className="fw-bold text-white text-uppercase mb-3 fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ fontSize: "2.7rem", lineHeight: "1.2", maxWidth: "470px", animationDelay: "0.2s" }}
//               >
//                 INTERNATIONAL <br /> BACCALAUREATE TUTORS <br /> IN DUBAI
//               </h1>

//               <p
//                 className="text-white mb-4 fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ fontSize: "0.9rem", letterSpacing: "0.1em", opacity: "0.8", animationDelay: "0.25s" }}
//               >
//                 LOREM IPSUM DOLOR SIT AMET
//               </p>

//               {/* Info Row */}
//               <div
//                 className="d-flex flex-wrap rounded p-4 mb-4 fw-semibold fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{
//                   background: "rgba(255, 255, 255, 0.1)",
//                   borderRadius: "1.5rem",
//                   maxWidth: "700px",
//                   fontSize: "0.9rem",
//                   gap: "3.75rem",
//                   animationDelay: "0.3s"
//                 }}
//               >
//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ borderRight: "1px solid rgba(255, 255, 255, 0.3)", animationDelay: "0.35s" }}
//                 >
//                   <div className="mb-2" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/medal.png" alt="Grade Support" width={32} height={32} />
//                   </div>
//                   Grade 8 to 12 <br /> Support
//                 </div>
//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ borderRight: "1px solid rgba(255, 255, 255, 0.3)", animationDelay: "0.4s" }}
//                 >
//                   <div className="mb-2" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/person.png" alt="Learning Mode" width={32} height={32} />
//                   </div>
//                   Online <br /> & In-Person
//                 </div>
//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.45s" }}
//                 >
//                   <div className="mb-2" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/location.png" alt="Location" width={32} height={32} />
//                   </div>
//                   Dubai <br /> (DIFC, JLT)
//                 </div>
//               </div>

//               <p
//                 className="text-white mb-4 fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ maxWidth: "600px", fontSize: "1rem", lineHeight: "1.4", opacity: "0.9", animationDelay: "0.5s" }}
//               >
//                 We provide comprehensive academic support through our customized IB
//                 curriculum courses, giving students access to high-end learning with
//                 experienced and certified IB tutors across various IB subjects.
//               </p>

//               <div
//                 className="d-flex gap-3 fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ animationDelay: "0.55s" }}
//               >
//                 <button
//                   className="btn fw-bold text-uppercase d-flex align-items-center gap-2 shadow"
//                   style={{
//                     background: "linear-gradient(to right, #E7F6FF, #A3CAF5)",
//                     color: "#273972",
//                     borderRadius: "12px",
//                     fontSize: "0.95rem",
//                     padding: "12px 32px",
//                     boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
//                   }}
//                 >
//                   IGCSE TUTORS
//                   <span
//                     className="d-inline-block"
//                     style={{
//                       border: "solid #dbdcddff",
//                       borderWidth: "0 3px 3px 0",
//                       padding: "4px",
//                       transform: "rotate(-45deg)",
//                     }}
//                   ></span>
//                 </button>
//                 <button
//                   className="btn fw-bold text-uppercase d-flex align-items-center gap-2 shadow"
//                   style={{
//                     background: "linear-gradient(to right, #E7F6FF, #A3CAF5)",
//                     color: "#273972",
//                     borderRadius: "12px",
//                     fontSize: "0.95rem",
//                     padding: "12px 32px",
//                     boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
//                   }}
//                 >
//                   A-LEVELS TUTORS
//                   <span
//                     className="d-inline-block"
//                     style={{
//                       border: "solid #dbdcddff",
//                       borderWidth: "0 3px 3px 0",
//                       padding: "4px",
//                       transform: "rotate(-45deg)",
//                     }}
//                   ></span>
//                 </button>
//               </div>
//             </div>

//             {/* Right Section - Form */}
//             <div
//               className="col-lg-5 mt-4 mt-lg-0 d-flex align-items-center fade-in-section"
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat
//               style={{ animationDelay: "0.6s" }}
//             >
//               <div
//                 className="w-100 rounded p-4 text-white form-container"
//                 style={{
//                   borderRadius: "1.5rem",
//                 }}
//               >
//                 <h2
//                   className="fw-bold text-uppercase mb-4 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ fontSize: "1.2rem", animationDelay: "0.65s" }}
//                 >
//                   GET A FREE DEMO CLASS + <br /> FREE STUDY RESOURCES
//                 </h2>

//                 <div className="mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.7s" }}
//                 >
//                   <input
//                     type="text"
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="NAME"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "12px",
//                       fontSize: "0.9rem",
//                       padding: "12px 15px",
//                     }}
//                   />
//                 </div>

//                 <div className="row g-2 mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.75s" }}
//                 >
//                   <div className="col-6">
//                     <input
//                       type="email"
//                       className="form-control bg-transparent text-white fw-semibold"
//                       placeholder="EMAIL"
//                       style={{
//                         border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                         borderRadius: "12px",
//                         fontSize: "0.9rem",
//                         padding: "12px 15px",
//                       }}
//                     />
//                   </div>
//                   <div className="col-6">
//                     <input
//                       type="text"
//                       className="form-control bg-transparent text-white fw-semibold"
//                       placeholder="PH.NO"
//                       style={{
//                         border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                         borderRadius: "12px",
//                         fontSize: "0.9rem",
//                         padding: "12px 15px",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.8s" }}
//                 >
//                   <input
//                     type="text"
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="SCHOOL"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "12px",
//                       fontSize: "0.9rem",
//                       padding: "12px 15px",
//                     }}
//                   />
//                 </div>

//                 <div className="mb-4 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.85s" }}
//                 >
//                   <textarea
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="DROP A MESSAGE"
//                     rows="3"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "18px",
//                       fontSize: "0.9rem",
//                       padding: "16px 15px",
//                       resize: "none",
//                     }}
//                   ></textarea>
//                 </div>

//                 <button
//                   className="btn fw-bold text-uppercase d-flex align-items-center gap-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     background: "transparent",
//                     color: "white",
//                     fontSize: "1rem",
//                     padding: "11px 28px",
//                     border: "1.5px solid rgba(255, 255, 255, 0.7)",
//                     borderRadius: "18px",
//                     transition: "all 0.3s ease",
//                     animationDelay: "0.9s"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "white";
//                     e.target.style.color = "#000";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.color = "white";
//                   }}
//                 >
//                   SUBMIT
//                   <span
//                     className="d-inline-block"
//                     style={{
//                       border: "solid currentColor",
//                       borderWidth: "0 3px 3px 0",
//                       padding: "4px",
//                       transform: "rotate(-45deg)",
//                     }}
//                   ></span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .form-control::placeholder {
//           color: rgba(255, 255, 255, 0.5) !important;
//           font-weight: 600;
//         }

//         .form-control:focus {
//           background-color: transparent !important;
//           border-color: rgba(255, 255, 255, 0.7) !important;
//           box-shadow: none !important;
//           color: white !important;
//         }

//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .fade-in-section.is-clipped {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Desktop form styling */
//         .form-container {
//           background: #9D9D9DB2;
//           opacity: 70%;
//           backdrop-filter: blur(12px);
//         }

//         /* Mobile form styling */
//         @media (max-width: 991.98px) {
//           .form-container {
//             background: linear-gradient(135deg, #00A491, #161664) !important;
//             opacity: 1 !important;
//             backdrop-filter: none !important;
//           }

//           .info-row {
//             flex-direction: column !important;
//             gap: 1.5rem !important;
//           }

//           .info-col {
//             border-right: none !important;
//             padding-right: 0 !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


"use client"
import Image from "next/image";

export default function InfoCard() {
  return (
    <div
      className="container-fluid"
      style={{ maxWidth: "90vw", margin: "2.5rem auto", animationDelay: "0.1s" }}
    >
      <div
        className="position-relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/act.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1.5rem",
          minHeight: "600px",
        }}
      >
        {/* Dark overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "1.5rem",
            animationDelay: "0.15s"
          }}
        ></div>

        {/* Content container */}
        <div className="position-relative h-100" style={{ zIndex: 1 }}>
          <div className="row g-0 h-100">
            {/* Left Section - Now taking 8 columns (2/3) */}
            <div className="col-lg-8 d-flex flex-column justify-content-center pe-lg-4 p-4 left-content">
              <h1
                className="fw-bold text-white text-uppercase mb-3 fade-in-section fs-1 fs-md-2 fs-lg-1"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{ lineHeight: "1.2", maxWidth: "470px", animationDelay: "0.2s" }}
              >
                ACT Tutors In <br />Dubai, For Assured <br />High Scores
              </h1>

              <p
                className="text-white mb-4 fade-in-section fs-6 fs-md-5"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{ letterSpacing: "0.1em", opacity: "0.8", animationDelay: "0.25s" }}
              >
                LOREM IPSUM DOLOR SIT AMET
              </p>

              <div
                className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold fade-in-section info-row"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "60px",
                  maxWidth: "700px",
                  fontSize: "0.9rem",
                  animationDelay: "0.3s",
                }}
              >
                <div
                  className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                    animationDelay: "0.35s",
                  }}
                >
                  <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                    <Image src="/assets/medal.png" alt="Grade Support" width={32} height={32} className="icon-img" />
                  </div>
                  Grade 8 to 12 <br /> Support
                </div>

                <div
                  className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{
                    borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                    animationDelay: "0.4s",
                  }}
                >
                  <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                    <Image src="/assets/person.png" alt="Learning Mode" width={32} height={32} className="icon-img" />
                  </div>
                  Online <br /> & In-Person
                </div>

                <div
                  className="d-flex flex-column align-items-center text-center text-white fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.45s" }}
                >
                  <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
                    <Image src="/assets/location.png" alt="Location" width={32} height={32} className="icon-img" />
                  </div>
                  Dubai <br /> (DIFC, JLT)
                </div>
              </div>

              <p
                className="text-white mb-4"
                style={{ maxWidth: "600px", fontSize: "1rem", lineHeight: "1.4", opacity: "0.9" }}
              >
                We provide comprehensive ACT test preparation with customized courses,
                giving students access to high-quality learning with experienced and
                certified ACT tutors to help achieve top scores.
              </p>

              <div className="d-flex gap-3">
                <button
                  className="btn fw-bold text-uppercase d-flex align-items-center gap-2 shadow"
                  style={{
                    background: "linear-gradient(to right, #E7F6FF, #A3CAF5)",
                    color: "#273972",
                    borderRadius: "40px",
                    fontSize: "0.95rem",
                    padding: "12px 32px",
                    boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
                  }}
                >
                  Get Free Demo
                  <img src="/assets/rar.png" alt="right" width={35} height={35} />
                </button>
              </div>
            </div>

            {/* Right Section - Form - Now taking 4 columns (1/3) */}
            <div
              className="col-lg-4 form-bg mt-4 mt-lg-0 d-flex align-items-center fade-in-section position-relative right-form"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: "0.6s" }}
            >
              {/* Rectangle background images positioned within form section */}
              <img src="/assets/rect1.png" alt="bg-shape" className="testimonialRect rect-1" />
              <img src="/assets/rect2.png" alt="bg-shape" className="testimonialRect rect-2" />
              <img src="/assets/rect3.png" alt="bg-shape" className="testimonialRect rect-3" />

              <div
                className="w-100 p-4 text-white form-container"
                style={{
                  borderRadius: "40px",
                  backgroundImage: "url('/assets/Rectangle390.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2
                  className="fw-bold text-uppercase mb-4 fade-in-section fs-5 fs-md-4"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.65s" }}
                >
                  GET A FREE DEMO CLASS + <br /> FREE STUDY RESOURCES
                </h2>

                <div className="mb-3 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.7s" }}
                >
                  <input
                    type="text"
                    className="form-control bg-transparent text-white fw-semibold"
                    placeholder="NAME"
                    style={{
                      border: "1.5px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "40px",
                      fontSize: "0.9rem",
                      padding: "12px 15px",
                    }}
                  />
                </div>

                <div className="row g-2 mb-3 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.75s" }}
                >
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-transparent text-white fw-semibold"
                      placeholder="EMAIL"
                      style={{
                        border: "1.5px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "40px",
                        fontSize: "0.9rem",
                        padding: "12px 15px",
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-transparent text-white fw-semibold"
                      placeholder="PH.NO"
                      style={{
                        border: "1.5px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "40px",
                        fontSize: "0.9rem",
                        padding: "12px 15px",
                      }}
                    />
                  </div>
                </div>

                <div className="mb-3 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.8s" }}
                >
                  <input
                    type="text"
                    className="form-control bg-transparent text-white fw-semibold"
                    placeholder="SCHOOL"
                    style={{
                      border: "1.5px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "40px",
                      fontSize: "0.9rem",
                      padding: "12px 15px",
                    }}
                  />
                </div>

                <div className="mb-4 fade-in-section"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.85s" }}
                >
                  <textarea
                    className="form-control bg-transparent text-white fw-semibold"
                    placeholder="DROP A MESSAGE"
                    rows="3"
                    style={{
                      border: "1.5px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: "29px",
                      fontSize: "0.9rem",
                      padding: "16px 15px",
                      resize: "none",
                    }}
                  ></textarea>
                </div>

                <button
                  className="btn fw-bold text-uppercase d-flex align-items-center gap-3"
                  style={{
                    background: "transparent",
                    color: "white",
                    fontSize: "1rem",
                    padding: "11px 28px",
                    border: "1.5px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: "40px",
                    transition: "all 0.3s ease",
                  }}
                >
                  SUBMIT
                  <img src="/assets/rwb.png" alt="right" width={35} height={35} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
          font-weight: 600;
        }

        .form-control:focus {
          background-color: transparent !important;
          border-color: rgba(255, 255, 255, 0.7) !important;
          box-shadow: none !important;
          color: white !important;
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
        .fade-in-section.is-clipped {
          opacity: 1;
          transform: translateY(0);
        }

        /* Desktop form styling */
        .form-container {
          background: #9D9D9DB2;
          opacity: 70%;
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 10;
        }

        /* Rectangle positioning */
        .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }

        .rect-1 {
          top: 3%;
          left: 10%;
          width: 80px;
          height: 30px;
display: none !important;
        }

        .rect-2 {
          top: 5%;
          right: 10%;
          width: 50px;
          height: 25px;
display: none !important;
        }

        .rect-3 {
          bottom: 20%;
          right: 15%;
          width: 55px;
          height: 28px;
display: none !important;
        }

        /* Adjust column proportions for true 2/3 and 1/3 */
        @media (min-width: 992px) {
          .col-lg-8 {
            flex: 0 0 66.666667% !important;
            max-width: 66.666667% !important;
            padding-right: 1rem !important;
          }
          
          .col-lg-4 {
            flex: 0 0 33.333333% !important;
            max-width: 33.333333% !important;
            padding-left: 1rem !important;
          }
          
          .left-content {
            padding: 3rem 2rem 3rem 3rem !important;
          }
          
          .right-form {
            padding: 2rem 3rem 2rem 2rem !important;
          }
          
          .form-container {
            padding: 2rem 1.5rem !important;
            margin: 0 !important;
            max-width: 100%;
          }
          
          .form-container h2 {
            font-size: 1rem !important;
            line-height: 1.3 !important;
          }
          
          .form-control {
            font-size: 0.85rem !important;
            padding: 10px 15px !important;
          }
          
          textarea.form-control {
            padding: 14px 15px !important;
          }
          
          .form-container .btn {
            font-size: 0.9rem !important;
            padding: 10px 25px !important;
          }
        }

        /* Enhanced spacing for larger screens while maintaining proportions */
        @media (min-width: 1400px) {
          .left-content {
            padding: 4rem 2.5rem 4rem 4rem !important;
          }
          
          .right-form {
            padding: 3rem 4rem 3rem 2.5rem !important;
          }
          
          .form-container {
            padding: 2.5rem 2rem !important;
          }
          
          .form-container h2 {
            font-size: 1.1rem !important;
            line-height: 1.4 !important;
          }
          
          .form-control {
            font-size: 0.9rem !important;
            padding: 12px 18px !important;
          }
          
          textarea.form-control {
            padding: 16px 18px !important;
          }
          
          .form-container .btn {
            font-size: 0.95rem !important;
            padding: 12px 30px !important;
          }
        }

        /* Further spacing adjustments for very large screens */
        @media (min-width: 1920px) {
          .left-content {
            padding: 5rem 3rem 5rem 5rem !important;
          }
          
          .right-form {
            padding: 4rem 5rem 4rem 3rem !important;
          }
          
          .form-container {
            padding: 3rem 2.5rem !important;
          }
          
          .form-container h2 {
            font-size: 1.2rem !important;
          }
          
          .form-control {
            font-size: 0.95rem !important;
            padding: 14px 20px !important;
          }
          
          textarea.form-control {
            padding: 18px 20px !important;
          }
          
          .form-container .btn {
            font-size: 1rem !important;
            padding: 14px 35px !important;
          }
        }

        @media (max-width: 576px) {
          .info-row {
            font-size: 0.75rem !important;
          }
          .icon-img {
            width: 20px !important;
            height: 20px !important;
          }
        }

        /* Mobile form styling */
        @media (max-width: 991.98px) {
          .position-relative.overflow-hidden {
            min-height: auto !important;
            background-image: url('/assets/act.jpg') !important;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover; 
          }
          
          .form-bg{
            background-image: url('/assets/rectaglelinear.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            background-attachment: fixed;
          }

          .position-relative.overflow-hidden::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.45);
            z-index: 1;
          }
          
          .position-absolute.top-0.start-0.w-100.h-100 {
            display: none !important;
          }
          
          .row.g-0.h-100 {
            flex-direction: column !important;
          }
          
          .col-lg-8, .col-lg-4 {
            width: 100% !important;
          }
          
          .col-lg-8 {
            order: 1 !important;
            margin-bottom: 2rem !important;
            padding: 2rem 1.5rem !important;
          }
          
          .col-lg-4 {
            order: 2 !important;
            margin-top: 0 !important;
            padding: 0 1.5rem 2rem !important;
          }
          
          h1 {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            text-align: center !important;
            margin-bottom: 1rem !important;
            max-width: none !important;
          }
          
          .text-white.mb-4:first-of-type {
            font-size: 0.75rem !important;
            margin-bottom: 1.5rem !important;
            text-align: center !important;
          }
          
          .info-row {
            flex-direction: row !important;
            justify-content: space-around !important;
            align-items: center !important;
            gap: 0.5rem !important;
            padding: 1.5rem 1rem !important;
            margin-bottom: 1.5rem !important;
            background: rgba(255, 255, 255, 0.15) !important;
          }

          .info-col {
            border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
            padding-right: 0.8rem !important;
            flex: 1 !important;
            font-size: 0.7rem !important;
            line-height: 1.2 !important;
          }
          
          .info-col:last-child {
            border-right: none !important;
            padding-right: 0 !important;
          }
          
          .info-col img {
            width: 24px !important;
            height: 24px !important;
          }
          
          .text-white.mb-4:last-of-type {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
            text-align: center !important;
            margin-bottom: 1.5rem !important;
            max-width: none !important;
            padding: 0 1rem !important;
          }
          
          .d-flex.gap-3 {
            justify-content: center !important;
            width: 100% !important;
            margin-bottom: 2rem !important;
          }

          .rect-1 {
            top: 0%;
            left: -3%;
            width: 27vw;
            height: 7vh;
            opacity: 1;
            display:block !important;
          }

          .rect-2 {
            top: 1.7%;
            right: -3%;
            width: 35vw;
            height: 7vh;
            opacity: 1;
            display:block !important;
          }

          .rect-3 {
            bottom: 9%;
            right: -3%;
            width: 25vw;
            height: 7vh;
            opacity: 1;
            display:block !important;
          }
          
          .form-container {
            background: transparent !important;
            opacity: 1 !important;
            backdrop-filter: none !important;
            padding: 2rem !important;
            padding-top: 4rem !important;
            z-index: 10;
          }
          
          .form-container h2 {
            font-size: 0.9rem !important;
            text-align: center !important;
            line-height: 1.3 !important;
            margin-bottom: 1.5rem !important;
            font-weight: 700 !important;
          }
          
          .form-control {
            font-size: 0.8rem !important;
            padding: 10px 12px !important;
          }
          
          textarea.form-control {
            padding: 12px !important;
          }
          
          .form-container .btn {
            font-size: 0.85rem !important;
            padding: 12px 24px !important;
            max-width: none !important;
            width: auto !important;
            display: flex !important;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}

// "use client"
// import Image from "next/image";

// export default function InfoCard() {
//   return (
//     <div
//       data-scroll
//       data-scroll-class="is-inview"
//       data-scroll-repeat
//       className="container-fluid fade-in-section"
//       style={{ maxWidth: "90vw", margin: "2.5rem auto", animationDelay: "0.1s" }}
//     >
//       <div
//         className="position-relative overflow-hidden"
//         style={{
//           backgroundImage: "url('/assets/1stcard.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           borderRadius: "1.5rem",
//           minHeight: "600px",
//         }}
//       >
//         {/* Dark overlay */}
//         <div
//           className="position-absolute top-0 start-0 w-100 h-100 fade-in-section"
//           data-scroll
//           data-scroll-class="is-inview"
//           data-scroll-repeat
//           style={{
//             background: "rgba(0, 0, 0, 0.6)",
//             borderRadius: "1.5rem",
//             animationDelay: "0.15s"
//           }}
//         ></div>

//         {/* Content container */}
//         <div className="position-relative h-100" style={{ zIndex: 1 }}>
//           <div className="row g-0 h-100 p-4">
//             {/* Left Section */}
//             <div className="col-lg-7 d-flex flex-column justify-content-center pe-lg-4">
//               <h1
//                 className="fw-bold text-white text-uppercase mb-3 fade-in-section fs-1 fs-md-2 fs-lg-1"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ lineHeight: "1.2", maxWidth: "470px", animationDelay: "0.2s" }}
//               >
//                 INTERNATIONAL <br /> BACCALAUREATE TUTORS <br /> IN DUBAI
//               </h1>

//               <p
//                 className="text-white mb-4 fade-in-section fs-6 fs-md-5"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ letterSpacing: "0.1em", opacity: "0.8", animationDelay: "0.25s" }}
//               >
//                 LOREM IPSUM DOLOR SIT AMET
//               </p>


//               <div
//                 className="d-flex flex-wrap justify-content-evenly p-4 mb-4 fw-semibold fade-in-section info-row"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{
//                   background: "rgba(255, 255, 255, 0.1)",
//                   borderRadius: "60px",
//                   maxWidth: "700px",
//                   fontSize: "0.9rem", // default desktop size
//                   animationDelay: "0.3s",
//                 }}
//               >
//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     borderRight: "1px solid rgba(255, 255, 255, 0.3)",
//                     animationDelay: "0.35s",
//                   }}
//                 >
//                   <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/medal.png" alt="Grade Support" width={32} height={32} className="icon-img" />
//                   </div>
//                   Grade 8 to 12 <br /> Support
//                 </div>

//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white pe-3 fade-in-section info-col"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     borderRight: "1px solid rgba(255, 255, 255, 0.3)",
//                     animationDelay: "0.4s",
//                   }}
//                 >
//                   <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/person.png" alt="Learning Mode" width={32} height={32} className="icon-img" />
//                   </div>
//                   Online <br /> & In-Person
//                 </div>

//                 <div
//                   className="d-flex flex-column align-items-center text-center text-white fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.45s" }}
//                 >
//                   <div className="mb-2 icon-wrap" style={{ color: "#acf2d6" }}>
//                     <Image src="/assets/location.png" alt="Location" width={32} height={32} className="icon-img" />
//                   </div>
//                   Dubai <br /> (DIFC, JLT)
//                 </div>
//               </div>

//               <p
//                 className="text-white mb-4 fade-in-section"
//                 data-scroll
//                 data-scroll-class="is-inview"
//                 data-scroll-repeat
//                 style={{ maxWidth: "600px", fontSize: "1rem", lineHeight: "1.4", opacity: "0.9", animationDelay: "0.5s" }}
//               >
//                 We provide comprehensive academic support through our customized IB
//                 curriculum courses, giving students access to high-end learning with
//                 experienced and certified IB tutors across various IB subjects.
//               </p>

//               <div className="d-flex gap-3">
//                 <button
//                   className="btn fw-bold text-uppercase d-flex align-items-center gap-2 shadow"
//                   style={{
//                     background: "linear-gradient(to right, #E7F6FF, #A3CAF5)",
//                     color: "#273972",
//                     borderRadius: "40px",
//                     fontSize: "0.95rem",
//                     padding: "12px 32px",
//                     boxShadow: "2px 4px 8px rgba(38, 66, 149, 0.5)",
//                   }}
//                 >
//                   Get Free Demo
//                   <img src="/assets/rar.png" alt="right" width={35} height={35} />
//                 </button>
//               </div>
//             </div>

//             {/* Right Section - Form */}
//             <div
//               className="col-lg-5 form-bg mt-4 mt-lg-0 d-flex align-items-center fade-in-section"
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat
//               style={{ animationDelay: "0.6s" }}
//             >
//               <div
//                 className="w-100 p-4 text-white form-container"
//                 style={{
//                   borderRadius: "40px",
//                   backdropFilter: "blur(20px)",
//                   WebkitBackdropFilter: "blur(20px)",
//                 }}
//               >
//                 <h2
//                   className="fw-bold text-uppercase mb-4 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ fontSize: "1.2rem", animationDelay: "0.65s" }}
//                 >
//                   GET A FREE DEMO CLASS + <br /> FREE STUDY RESOURCES
//                 </h2>

//                 <div className="mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.7s" }}
//                 >
//                   <input
//                     type="text"
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="NAME"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "40px",
//                       fontSize: "0.9rem",
//                       padding: "12px 15px",
//                     }}
//                   />
//                 </div>

//                 <div className="row g-2 mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.75s" }}
//                 >
//                   <div className="col-6">
//                     <input
//                       type="email"
//                       className="form-control bg-transparent text-white fw-semibold"
//                       placeholder="EMAIL"
//                       style={{
//                         border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                         borderRadius: "40px",
//                         fontSize: "0.9rem",
//                         padding: "12px 15px",
//                       }}
//                     />
//                   </div>
//                   <div className="col-6">
//                     <input
//                       type="text"
//                       className="form-control bg-transparent text-white fw-semibold"
//                       placeholder="PH.NO"
//                       style={{
//                         border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                         borderRadius: "40px",
//                         fontSize: "0.9rem",
//                         padding: "12px 15px",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.8s" }}
//                 >
//                   <input
//                     type="text"
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="SCHOOL"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "40px",
//                       fontSize: "0.9rem",
//                       padding: "12px 15px",
//                     }}
//                   />
//                 </div>

//                 <div className="mb-4 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{ animationDelay: "0.85s" }}
//                 >
//                   <textarea
//                     className="form-control bg-transparent text-white fw-semibold"
//                     placeholder="DROP A MESSAGE"
//                     rows="3"
//                     style={{
//                       border: "1.5px solid rgba(255, 255, 255, 0.5)",
//                       borderRadius: "40px",
//                       fontSize: "0.9rem",
//                       padding: "16px 15px",
//                       resize: "none",
//                     }}
//                   ></textarea>
//                 </div>

//                 <button
//                   className="btn fw-bold text-uppercase d-flex align-items-center gap-3 fade-in-section"
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat
//                   style={{
//                     background: "transparent",
//                     color: "white",
//                     fontSize: "1rem",
//                     padding: "11px 28px",
//                     border: "1.5px solid rgba(255, 255, 255, 0.7)",
//                     borderRadius: "40px",
//                     transition: "all 0.3s ease",
//                     animationDelay: "0.9s"
//                   }}
//                 >
//                   SUBMIT
//                   <img src="/assets/rwb.png" alt="right" width={35} height={35} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .form-control::placeholder {
//           color: rgba(255, 255, 255, 0.5) !important;
//           font-weight: 600;
//         }

//         .form-control:focus {
//           background-color: transparent !important;
//           border-color: rgba(255, 255, 255, 0.7) !important;
//           box-shadow: none !important;
//           color: white !important;
//         }

//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .fade-in-section.is-clipped {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* Desktop form styling */
//         .form-container {
//           background: #9D9D9DB2;
//           opacity: 70%;
//           backdrop-filter: blur(12px);
//         }

//         @media (max-width: 576px) {
//           .info-row {
//             font-size: 0.75rem !important;
//           }
//           .icon-img {
//             width: 20px !important;
//             height: 20px !important;
//           }
//         }

//         /* Mobile form styling */
//         @media (max-width: 991.98px) {
//           .position-relative.overflow-hidden {
//             min-height: auto !important;
//             background-image: url('/assets/1stcard.jpg') !important;
//             background-repeat: no-repeat;
//             background-position: center;
//             background-size: cover;
//           }

//           /* Fix for background image showing on sides */
//           .position-relative.overflow-hidden::after {
//             content: "";
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.7);
//             border-radius: 1.5rem;
//             z-index: 0;
//           }

//           .form-bg {
//             background: linear-gradient(180deg, rgba(0, 164, 145, 0.9) 0%, rgba(22, 22, 100, 0.9) 100%) !important;
//             padding: 2rem 1.5rem !important;
//             margin: 0 !important;
//             border-radius: 0 0 1.5rem 1.5rem !important;
//             position: relative;
//             z-index: 1;
//           }

//           .form-container {
//             padding: 1.5rem !important;
//             border-radius: 20px !important;
//             background: rgba(0, 0, 0, 0.25) !important;
//             backdrop-filter: blur(10px) !important;
//             margin: 0 !important;
//           }

//           /* Hide original dark overlay on mobile */
//           .position-absolute.top-0.start-0.w-100.h-100 {
//             display: none !important;
//           }

//           /* Mobile content layout */
//           .row.g-0.h-100.p-4 {
//             flex-direction: column !important;
//             padding: 1.5rem !important;
//             text-align: center !important;
//           }

//           .col-lg-7 {
//             order: 1 !important;
//             margin-bottom: 1.5rem !important;
//             padding: 0 !important;
//           }

//           .col-lg-5 {
//             order: 2 !important;
//             margin-top: 0 !important;
//             padding: 0 !important;
//           }

//           /* Mobile heading */
//           h1 {
//             font-size: 1.5rem !important;
//             line-height: 1.2 !important;
//             text-align: center !important;
//             margin-bottom: 1rem !important;
//             max-width: none !important;
//           }

//           /* Mobile subtitle */
//           .text-white.mb-4:first-of-type {
//             font-size: 0.75rem !important;
//             margin-bottom: 1.5rem !important;
//             text-align: center !important;
//           }

//           /* Mobile info row */
//           .info-row {
//             flex-direction: row !important;
//             justify-content: space-around !important;
//             align-items: center !important;
//             gap: 0.5rem !important;
//             padding: 1.5rem 1rem !important;
//             margin-bottom: 1.5rem !important;
//             background: rgba(255, 255, 255, 0.15) !important;
//           }

//           .info-col {
//             border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
//             padding-right: 0.8rem !important;
//             flex: 1 !important;
//             font-size: 0.7rem !important;
//             line-height: 1.2 !important;
//           }

//           .info-col:last-child {
//             border-right: none !important;
//             padding-right: 0 !important;
//           }

//           .info-col img {
//             width: 24px !important;
//             height: 24px !important;
//           }

//           /* Mobile description paragraph */
//           .text-white.mb-4:last-of-type {
//             font-size: 0.8rem !important;
//             line-height: 1.4 !important;
//             text-align: center !important;
//             margin-bottom: 1.5rem !important;
//             max-width: none !important;
//             padding: 0 !important;
//           }

//           /* Mobile buttons */
//           .d-flex.gap-3 {
//             justify-content: center !important;
//             width: 100% !important;
//             margin-bottom: 1.5rem !important;
//           }

//           /* Form elements */
//           .form-container h2 {
//             font-size: 0.9rem !important;
//             text-align: center !important;
//             line-height: 1.3 !important;
//             margin-bottom: 1.5rem !important;
//             font-weight: 700 !important;
//           }

//           .form-control {
//             font-size: 0.8rem !important;
//             padding: 10px 15px !important;
//             border-radius: 40px !important;
//             border: 1.5px solid rgba(255, 255, 255, 0.5) !important;
//             background-color: transparent !important;
//             color: white !important;
//             margin-bottom: 0.75rem !important;
//           }

//           textarea.form-control {
//             border-radius: 20px !important;
//             padding: 12px 15px !important;
//           }

//           .form-container .btn {
//             font-size: 0.85rem !important;
//             padding: 12px 24px !important;
//             border-radius: 40px !important;
//             margin: 0 auto !important;
//             display: flex !important;
//             justify-content: center !important;
//             border: 1.5px solid rgba(255, 255, 255, 0.7) !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }