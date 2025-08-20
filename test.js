// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function IBCurriculumStages() {
//     const curriculums = [
//         "IB (MYP & IBDP)",
//         "IGCSE / GCSE",
//         "A-Levels",
//         "Homeschooling",
//     ];
//     const standardisedTest = [
//         "EmSAT",
//         "ACT",
//         "Advanced Placements (AP)",
//         "UCAT",
//     ];

//     return (
//         <>
//             <section className="achievementsSection pb-0">
//                 <div className="container">
//                     <div className="achievementsHeadings">
//                         <div className="text-center mb-md-5 mb-4 fade-in-section"
//                             data-scroll
//                             data-scroll-class="is-inview"
//                             data-scroll-repeat
//                             style={{ animationDelay: "0.2s" }}>
//                             <div className="testHeadings">
//                                 <div
//                                     data-scroll
//                                     data-scroll-class="is-inview"
//                                     data-scroll-repeat="true"
//                                     className="fade-in-section"
//                                     style={{ animationDelay: "0.1s" }}
//                                 >
//                                     <div className="SubHeading testSubheading">curriculum & standardized tests we offer?
//                                     </div>
//                                 </div>
//                                 <h2
//                                     data-scroll
//                                     data-scroll-class="is-inview"
//                                     data-scroll-repeat="true"
//                                     className="fade-in-section testTitle"
//                                     style={{ animationDelay: "0.2s" }}
//                                 >
//                                     LOREM IPSUM DOLOR SIT AMET,
//                                     CONSECTETUR <span className="highlight">ADIPISCING</span>
//                                 </h2>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="achievementsSection">
//                 <div className="container">
//                     <div className="row gy-5">
//                         <div className="col-lg-6">
//                             <div
//                                 className="curriculum-col curriculum-col-left"
//                                 style={{ borderRadius: 20 }}
//                             >
//                                 <p
//                                     className="curriculum-section-heading1 text-center"
//                                     style={{
//                                         fontSize: 32,
//                                         borderBottomColor: "grey",
//                                         borderBottomWidth: 1,
//                                     }}
//                                 >
//                                     CURRICULUMS
//                                 </p>
//                                 <div
//                                     style={{
//                                         border: "1px solid rgba(35, 52, 103, 1)",
//                                         width: 300,
//                                         opacity: ".25",
//                                         margin: "auto auto 40px",
//                                     }}
//                                 />
//                                 <div className="row gy-3">
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>IB Chemistry Tutors (MYP)</h1>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>IB Chemistry Tutors (IBDP)</h1>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>IGCSE/GCSE Chemistry Tutors</h1>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>A-Level Chemistry Tutors</h1>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6">
//                             <div
//                                 className="curriculum-col curriculum-col-right"
//                                 style={{ borderRadius: 20 }}
//                             >
//                                 <p
//                                     className="curriculum-section-heading2 text-center"
//                                     style={{
//                                         fontSize: 32,
//                                         borderBottomColor: "grey",
//                                         borderBottomWidth: 1,
//                                         borderRadius: 0,
//                                     }}
//                                 >
//                                     STANDARDISED TESTS
//                                 </p>{" "}
//                                 <div
//                                     style={{
//                                         border: "1px solid rgba(35, 52, 103, 1)",
//                                         width: 300,
//                                         opacity: ".25",
//                                         margin: "auto auto 40px",
//                                     }}
//                                 />
//                                 <div className="row gy-3">
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive-blue.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>IB Chemistry Tutors (MYP)</h1>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive-blue.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>IB Chemistry Tutors (IBDP)</h1>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive-blue.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>IGCSE/GCSE Chemistry Tutors</h1>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6">
//                                         <div className="curriculum-info">
//                                             <Image
//                                                 src="/images/check-inactive-blue.webp"
//                                                 width={30}
//                                                 height={30}
//                                                 quality={100}
//                                             />{" "}
//                                             <h1>A-Level Chemistry Tutors</h1>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <style jsx>{`
                
//                 /* Header */
// .achievementsSection {
//   padding: 70px 0;
// }

// .achievementsHeadings {
//   text-align: center;
//   /* background: linear-gradient(white, white) padding-box,
//     linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
//   border-bottom: 2px solid transparent;
//   padding-bottom: 30px; */
// }

// .achievementsTitle {
//   font-size: 2rem;
//   font-weight: 700;
//   margin: 40px 0 30px;
//   line-height: 1.1;
//   text-transform: uppercase;
//   color: var(--blue-color);
// }

// .achievementsTitle .highlight {
//   background: linear-gradient(
//     to right,
//     var(--lightgreen-color),
//     var(--green-color)
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// }

// .achievementsHeadings p {
//   font-size: 1.4rem;
//   color: rgba(0, 0, 0, 0.5);
//   line-height: 1.4;
// }

// .SubHeading {
//   font-size: 0.9rem;
//   font-weight: 600;
//   letter-spacing: 2px;
//   margin: 0;
//   text-transform: uppercase;
//   color: #1e3a8a;
//   padding-top: 10px;
// }

// /* Carousel container */
// .achievements-container {
//   width: 100%;
//   max-width: 1500px;
//   margin: 0 auto;
//   position: relative;
//   padding-bottom: 40px;
// }

// .achievements-swiperWrapper {
//   position: relative;
//   padding-bottom: 60px;
//   overflow: visible;
// }

// /* Slide wrapper stacks card + info */
// .achievements-slideWrapper {
//   /* display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px; */
//   text-align: center;
// }

// /* Card */
// .achievements-slideCard {
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   border: none;
//   border-radius: 15px;
//   /* position: relative; */
//   /* overflow: hidden; */
//   /* padding: 20px; */
//   /* display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center; */
//   height: 350px;
//   /* box-shadow: none; */
//   width: 260px;
// }
// .customNavBtn {
//   background-color: transparent;
// }
// /* Logo */
// .achievements-logoWrapper {
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
// }
// .mix-blend {
//   mix-blend-mode: darken;
// }
// .achievements-logoWrapper img {
//   max-width: 100%;
//   height: auto;
//   mix-blend-mode: darken;
// }

// /* Score */
// .achievements-score {
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: #1e3a8a;
//   position: absolute;
//   top: 64%;
//   right: 0;
//   padding: 10px 20px;
//   /* background: #fff; */
//   /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
// }

// /* Info below card */
// .achievements-info {
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   text-align: center;
// }

// /* Name with underline */
// .achievements-name {
//   font-size: 1.2rem;
//   font-weight: 700;
//   color: #1f7f67;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
//   position: relative;
//   padding-bottom: 4px;
//   margin: 0;
// }
// .curriculum-info {
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   padding: 15px;
// }
// .curriculum-info h1 {
//   color: rgba(35, 52, 103, 1);
//   font-size: 16px;
//   font-weight: 700;
//   margin-bottom: 0;
// }
// .achievements-name::after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 1px;
//   background: #d0d7e3;
// }

// /* Description row */
// .achievements-bottomRow {
//   position: relative;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 0.9rem;
//   color: #1e3a8a;
//   margin: 0;
//   padding-bottom: 4px;
// }

// .achievements-bottomRow::after {
//   content: "";
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   height: 1px;
//   background: #d0d7e3;
// }

// .achievements-iconWrapper {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .achievements-descriptionText {
//   font-weight: 500;
//   letter-spacing: 0.5px;
// }

// /* Navigation arrows */
// .achievements-navButton {
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   /* background: #1e3a8a; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 5;
// }

// .achievements-prev {
//   left: 10px;
// }

// .achievements-next {
//   right: 10px;
// }

// .achievements-arrow {
//   stroke: #ffffff;
//   fill: none;
//   stroke-width: 2;
// }

// .swiper-button-prev:after,
// .swiper-button-next:after {
//   display: none !important;
// }

// .customNavBtn {
//   border: 0;
//   background-color: none;
// }

// /* Responsive tweaks */
// @media (max-width: 1024px) {
//   .achievements-score {
//     font-size: 2rem;
//   }

//   .achievements-name {
//     font-size: 1rem;
//   }
// }

// @media (max-width: 768px) {
//   .achievements-slideCard {
//     padding: 15px;
//     min-height: 200px;
//   }

//   .achievements-score {
//     font-size: 1.5rem;
//   }

//   .achievements-navButton {
//     width: 30px;
//     height: 30px;
//   }

//   .achievementsHeadings p {
//     font-size: 1rem;
//     color: rgba(0, 0, 0, 0.5);
//     line-height: 1.4;
//   }
// }

// /*Table*/
// .actTestHeadings {
//   text-align: center;
//   padding-bottom: 30px;
// }

// .act-exam-overview {
//   padding: 60px 0;
// }

// .act-table-container {
//   margin-top: 40px;
//   overflow-x: auto;
// }

// .act-exam-table {
//   width: 100%;
//   border-collapse: separate;
//   border-spacing: 0;
//   margin: 0 auto;
//   /* No background-color here, as rows will handle it */
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
//   border-radius: 8px;
//   overflow: hidden;
//   border: 1px solid #dee2e6;
//   border: 1px solid #161664;
// }

// .act-exam-table th,
// .act-exam-table td {
//   padding: 15px 20px;
//   text-align: left;

//   color: #495057;
// }

// .act-exam-table td {
//   border-right: 1px solid #161664;
// }

// /* Header row background with gradient */
// .act-exam-table thead tr {
//   background: linear-gradient(to right, #a3caf5, #e7f6ff);
//   /* Remove direct color here, as th will handle text color */
//   font-weight: 500;
// }

// /* Text color for each heading (th) with "gradient" */
// .act-exam-table thead th {
//   background: linear-gradient(to right, #161f5a, #e7f6ff);
//   /* The requested text "gradient" */
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   border-right: 1px solid #161664;
// }

// /* Even body rows background with gradient */
// .act-exam-table tbody tr:nth-of-type(even) {
//   background: linear-gradient(to right, #e3effc, #f8fcff);
// }

// /* Odd body rows (optional, keeps default or can set a single color) */
// .act-exam-table tbody tr:nth-of-type(odd) {
//   background-color: #ffffff;
//   /* Default white background for odd rows */
// }

// .act-exam-table tbody tr:last-child td {
//   border-bottom: none;
// }

// .act-exam-table th:last-child,
// .act-exam-table td:last-child {
//   border-right: none;
// }

// /* Responsive adjustments */
// @media (max-width: 768px) {
//   .act-exam-table th,
//   .act-exam-table td {
//     padding: 10px 15px;
//     font-size: 0.9em;
//   }

//   .achievementsTitle {
//     font-size: 1.8em;
//   }
// }

// .subjects-card {
//   padding: 20px;
//   gap: 25px;
//   display: flex;
//   flex-direction: column;
//   border-radius: 30px;
//   transition: all 0.3s ease;
//   height: 100%;
//   justify-content: space-between;
//   position: relative;
//   overflow: hidden;
// }
// .subjects-card::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(269.48deg, #e7f6ff 2.74%, #a3caf5 93.4%);
//   opacity: 0.5;
//   z-index: -1;
// }

// .subjects-card:hover::before {
//   background: linear-gradient(47.43deg, #00a491 0%, #003e37 123.39%);
//   opacity: 1;
// }

// .subjects-card:hover .subjects-name {
//   color: rgba(255, 255, 255, 1);
// }
// .subjects-card:hover .counts {
//   color: rgba(255, 255, 255, 1);
// }
// .subjects-card .counts {
//   font-size: 40px;
//   font-weight: 700;
//   color: rgba(22, 22, 100, 1);
// }
// .subjects-card .subjects-name {
//   font-size: 20px;
//   font-weight: 700;
//   color: rgba(22, 22, 100, 1);
// }

// .myCustomAchievments {
//   padding: 80px 30px;
//   margin: 0 30px;
//   background: linear-gradient(
//     270deg,
//     rgb(255 255 255 / 0%) -5.67%,
//     #a6eac7 121.47%
//   );
//   border-top-left-radius: 50px;
//   border-bottom-left-radius: 50px;
// }
// .myCustomAchievments .achievement-section-content {
//   font-size: 18px;
// }

// @media (max-width: 768px) {
//   .act-exam-table th,
//   .act-exam-table td {
//     padding: 8px 10px;
//     font-size: 0.8em;
//   }
//   .curriculum-info {
//     padding: 15px 30px;
//   }
//   .curriculum-info h1 {
//     font-size: 16px;
//   }
//   .curriculum-section-heading1 {
//     font-size: 22px !important;
//   }
//   .achievementsTitle {
//     font-size: 1.5em;
//   }

//   .SubHeading {
//     font-size: 0.9em;
//   }
//   .subjects-card {
//     border-radius: 10px !important;
//   }
//   .subjects-card .subjects-name {
//     font-size: 14px;
//   }
//   .myCustomAchievments {
//     margin: 0;
//     margin-top: 40px;
//   }
//   .myCustomAchievments .achievement-section-desc {
//     font-size: 13px;
//   }
//   /* .myCustomAchievments .achievement-section-sub-heading2 {
//     font-size: 2.1rem;
//   }
//   .myCustomAchievments .achievement-section-sub-heading1 {
//     font-size:3rem;
//   } */
// }
//                 `}</style>
//             </section>
//         </>
//     );
// }







import Head from 'next/head';

export default function CurriculumPage() {
    return (
        <>
            <Head>
                <title>Curriculum & Standardized Tests</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="page-container">
                <div className="content-wrapper">
                    {/* Header Section */}
                    <div className="text-center mb-md-5 mb-4 fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: "0.2s" }}>
                        <div className="testHeadings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <div className="SubHeading testSubheading">                                curriculum & standardized tests we offer?
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
                    </div>  <div
                        className="container fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ maxWidth: "1140px", animationDelay: "0.15s" }}
                    >
                        <div
                            className="curriculumSubSection"
                            style={{ padding: "30px 0", marginBottom: "3rem" }}
                        >
                            <div className="SubHeading testSubheading">
                                WHAT CURRICULUM & STANDARDISED TESTS WE OFFER?
                            </div>
                            <div className="testHeadings">
                                <h2
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section testTitle"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    Lorem ipsum dolor sit amet,{" "}
                                    <span className="highlight">consectetur</span> adipiscing
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="cards-container">
                        <div className="card card-curriculum">
                            <h3 className="card-title">
                                CURRICULUMS
                            </h3>
                            <ul className="card-list">
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    IB (MYP &amp; IBDP)
                                </li>
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    IGCSE / GCSE
                                </li>
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    A-Levels
                                </li>
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Homeschooling
                                </li>
                            </ul>
                        </div>

                        <div className="card card-test">
                            <h3 className="card-title">
                                STANDARDIZED TEST
                            </h3>
                            <ul className="card-list">
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    EmSAT
                                </li>
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    ACT
                                </li>
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    Advanced Placements (AP)
                                </li>
                                <li className="card-item">
                                    <span className="check-icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    UCAT
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .page-container {
          background-color: #ffffff;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          font-family: 'Montserrat', sans-serif;
        }
        
        .content-wrapper {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .heading-secondary {
          color: #1B2E58;
          font-weight: 800;
          text-align: center;
          font-size: 24px;
          line-height: 28px;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
        }
        
        .heading-line {
          width: 40px;
          height: 3px;
          background: linear-gradient(to right, #0B6B5B, #1B2E58);
          display: inline-block;
          flex-shrink: 0;
        }
        
        .heading-primary {
          color: #1B2E58;
          font-weight: 800;
          text-align: center;
          font-size: 36px;
          line-height: 44px;
          margin-bottom: 3.5rem;
          max-width: 900px;
        }
        
        .text-accent {
          color: #0B6B5B;
        }
        
        .cards-container {
          display: flex;
          gap: 2.5rem;
          width: 100%;
          max-width: 1000px;
          justify-content: center;
        }
        
        .card {
          flex: 1;
          border-radius: 1.5rem;
          padding: 2.5rem;
          min-width: 300px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .card-curriculum {
          background: linear-gradient(to top right, #DDF6E3, #F7FFF7);
        }
        
        .card-test {
          background: linear-gradient(to top right, #D9E9FF, #F0F8FF);
        }
        
        .card-title {
          color: #1B2E58;
          font-weight: 800;
          font-size: 24px;
          line-height: 28px;
          border-bottom: 1px solid #B7C1C9;
          padding-bottom: 1rem;
          margin-bottom: 2rem;
        }
        
        .card-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: #1B2E58;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
        }
        
        .card-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .check-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #1B2E58;
          color: white;
          flex-shrink: 0;
        }
        
        @media (max-width: 768px) {
          .page-container {
            padding: 30px 15px;
          }
          
          .heading-secondary {
            font-size: 20px;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .heading-primary {
            font-size: 28px;
            line-height: 36px;
            margin-bottom: 2.5rem;
          }
          
          .cards-container {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .card {
            padding: 2rem;
          }
          
          .card-title {
            font-size: 22px;
          }
        }
        
        @media (max-width: 480px) {
          .heading-line {
            width: 30px;
          }
          
          .card {
            padding: 1.5rem;
          }
          
          .card-list {
            font-size: 16px;
          }
        }
      `}</style>
        </>
    );
}