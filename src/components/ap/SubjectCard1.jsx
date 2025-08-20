// "use client";

// export default function SubjectsCard() {
//   return (
//     <div className="subjectSection">
//       <div className="subjectSectionInner">
//         {/* Background decorative rectangles */}
//         <div className="bgRect" style={{
//           background: 'rgba(255,255,255,0.1)',
//           position: 'absolute',
//           width: '350px',
//           height: '70px',
//           top: '10%',
//           left: '0',
//           borderRadius: '0 20px 20px 0'
//         }}></div>
//         <div className="bgRect" style={{
//           background: 'rgba(255,255,255,0.1)',
//           position: 'absolute',
//           width: 'auto',
//           height: '70px',
//           top: '25%',
//           left: '20px',
//           borderRadius: '0 20px 20px 0'
//         }}></div>
//         <div className="bgRect" style={{
//           background: 'rgba(255,255,255,0.1)',
//           position: 'absolute',
//           width: '150px',
//           height: '70px',
//           bottom: '15%',
//           left: '20px',
//           borderRadius: '0 20px 20px 0'
//         }}></div>

//         {/* LEFT COLUMN */}
//         <div className="subjectLeft">
//           {/* Header */}
//           <span 
//             style={{
//               fontSize: "1.3vw",
//               color: "white",
//               letterSpacing: "2px",
//               opacity: 0.9,
//               fontWeight: 600,
//               textTransform: "uppercase",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               width: "200px"
//             }}
//           >
//             <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
//             <span>Subjects</span>
//             <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
//           </span>

//           {/* Heading */}
//           <h2 className="subjectTitle">
//             LOREM IPSUM DOLOR SIT AMET, <br />
//             <span className="subjectHighlight">CONSECTETUR ADIPISCING</span>
//           </h2>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="subjectRight">
//           <div className="subjectBubblesGrid">
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 IGCSE Environmental Management (EVM)
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.7 }}>
//                 IGCSE/GCSE Double Award Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div 
//                 className="subjectBubble"
//                 style={{
//                   background: "linear-gradient(90deg, #d0e8ff, #a8cfff)",
//                   color: "#0d2344",
//                   fontWeight: 700,
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                   border: "2px solid #a8cfff",
//                   opacity: 1
//                 }}
//               >
//                 IGCSE/GCSE Double Award Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 Combined Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow">
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 IGCSE Further Math
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .subjectSection {
//           width: 100%;
//           padding: 0px 0 80px 0;
//         }
//         .subjectSectionInner {
//           background: linear-gradient(135deg, #1F3C68, #265A90);
//           background-size: cover;
//           background-position: center;
//           padding: 150px 30px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//           max-width: 90vw;
//           margin: 0 auto;
//           border-radius: 40px;
//           position: relative;
//           overflow: hidden;
//           min-height: 350px;
//         }

//         .bgRect {
//           position: absolute;
//           width: auto;
//           height: 70px;
//           object-fit: contain;
//           z-index: 0;
//         }

//         .subjectLeft {
//           min-width: 320px;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;
//           margin-left: 40px;
//           gap: 18px;
//           padding-left: 30px;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectTitle {
//           color: white;
//           font-size: 1.8vw;
//           font-weight: 800;
//           line-height: 1.2;
//           text-transform: uppercase;
//           max-width: 500px;
//           margin: 0;
//         }

//         .subjectHighlight {
//           font-size: 1.8vw;
//           background: linear-gradient(to right, #b8e0ff 0%, #b8e0ff 60%, #FFFFFF 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .subjectRight {
//           display: flex;
//           align-items: center;
//           justify-content: flex-start;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectBubblesGrid {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//           align-items: flex-start;
//           justify-content: center;
//           width: 100%;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectBubbleRow {
//           display: flex;
//           gap: 30px;
//           align-items: center;
//           justify-content: flex-start;
//           position: relative;
//           z-index: 1;
//           width: 100%;
//         }

//         .subjectBubble {
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 40px;
//           color: white;
//           font-size: 1.4vw;
//           font-weight: 500;
//           padding: 10px 55px;
//           cursor: pointer;
//           transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: none;
//           margin-bottom: 0;
//           user-select: none;
//           min-width: 120px;
//           text-align: left;
//           letter-spacing: 0.02em;
//           outline: none;
//           position: relative;
//           z-index: 1;
//           background: transparent;
//         }

//         .subjectBubble:hover {
//           color: white;
//           background-color: rgba(255, 255, 255, 0.3);
//           box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
//         }

//         @media (max-width: 1280px) {
//           .subjectBubble {
//             padding: 10px 45px;
//           }
//         }

//         @media (max-width: 1199px) {
//           .subjectLeft span {
//             font-size: 18px !important;
//           }

//           .subjectTitle,
//           .subjectHighlight {
//             font-size: 24px !important;
//             line-height: 1.4;
//           }

//           .subjectSectionInner {
//             padding: 140px 30px;
//           }

//           .subjectLeft {
//             gap: 5px;
//           }

//           .subjectBubblesGrid {
//             gap: 10px;
//           }

//           .subjectBubbleRow {
//             gap: 10px;
//           }

//           .subjectBubble {
//             padding: 10px 30px;
//           }
//         }

//         @media (max-width: 1100px) {
//           .subjectSectionInner {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 32px;
//             padding: 70px 20px;
//           }

//           .subjectLeft span {
//             margin-bottom: 10px;
//           }

//           .subjectBubble {
//             font-size: 1rem !important;
//           }

//           .subjectLeft {
//             margin-left: 0;
//             width: 100%;
//             align-items: center;
//             text-align: center;
//             gap: 15px;
//             padding: 0 !important;
//           }

//           .subjectLeft span {
//             justify-content: center !important;
//           }

//           .subjectRight {
//             width: 100%;
//             padding: 0 !important;
//           }

//           .subjectBubblesGrid {
//             width: 100%;
//             gap: 14px;
//             align-items: center;
//           }

//           .subjectBubbleRow {
//             gap: 12px;
//             justify-content: center;
//           }

//           .subjectBubble {
//             text-align: center;
//           }
//         }

//         @media (max-width: 767px) {
//           .subjectBubble {
//             padding: 5px 15px 10px 15px !important;
//             font-size: 16px !important;
//           }
//         }

//         @media (max-width: 575px) {
//           .subjectLeft {
//             min-width: auto;
//           }

//           .subjectBubbleRow {
//             flex-wrap: wrap;
//             justify-content: center;
//           }

//           .subjectBubble {
//             padding: 10px 40px !important;
//           }
//         }

//         @media (max-width: 420px) {
//           .subjectBubble {
//             padding: 10px 35px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// "use client";
// import React from "react";

// export default function SubjectsCard() {
//   return (
//     <div className="subjectSection fade-in-section" 
//       data-scroll 
//       data-scroll-class="is-inview" 
//       data-scroll-repeat
//       style={{ animationDelay: "0.1s" }}
//     >
//       <div className="subjectSectionInner">
//         {/* Background decorative rectangles */}
//  <img
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-repeat="true"
//             data-scroll-offset="-10%"
//             src="/assets/bgrect1.png"
//             alt="bg-shape"
//             className="subjects-card1-bg-rect"
//           />
//           <img
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-repeat="true"
//             data-scroll-offset="-10%"
//             src="/assets/bgrect2.png"
//             alt="bg-shape"
//             className="subjects-card1-bg-rect"
//           />
//           <img
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-offset="-10%"
//             src="/assets/bgrect3.png"
//             alt="bg-shape"
//             className="subjects-card1-bg-rect"
//           />

//         {/* LEFT COLUMN */}
//         <div className="subjectLeft fade-in-section"
//           data-scroll 
//           data-scroll-class="is-inview" 
//           data-scroll-repeat
//           style={{ animationDelay: '0.3s' }}
//         >
//           {/* Header */}
//           <span 
//             className="fade-in-section"
//             data-scroll 
//             data-scroll-class="is-inview" 
//             data-scroll-repeat
//             style={{
//               fontSize: "1.3vw",
//               color: "white",
//               letterSpacing: "2px",
//               opacity: 0.9,
//               fontWeight: 600,
//               textTransform: "uppercase",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               width: "200px",
//               animationDelay: '0.35s'
//             }}
//           >
//             <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
//             <span>Subjects</span>
//             <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
//           </span>

//           {/* Heading */}
//           <h2 className="subjectTitle fade-in-section"
//             data-scroll 
//             data-scroll-class="is-inview" 
//             data-scroll-repeat
//             style={{ animationDelay: '0.4s' }}
//           >
//             LOREM IPSUM DOLOR SIT AMET, <br />
//             <span className="subjectHighlight fade-in-section"
//               data-scroll 
//               data-scroll-class="is-inview" 
//               data-scroll-repeat
//               style={{ animationDelay: '0.45s' }}
//             >
//               CONSECTETUR ADIPISCING
//             </span>
//           </h2>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="subjectRight fade-in-section"
//           data-scroll 
//           data-scroll-class="is-inview" 
//           data-scroll-repeat
//           style={{ animationDelay: '0.5s' }}
//         >
//           <div className="subjectBubblesGrid">
//             <div className="subjectBubbleRow fade-in-section"
//               data-scroll 
//               data-scroll-class="is-inview" 
//               data-scroll-repeat
//               style={{ animationDelay: '0.55s' }}
//             >
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 IGCSE Environmental Management (EVM)
//               </div>
//             </div>
//             <div className="subjectBubbleRow fade-in-section"
//               data-scroll 
//               data-scroll-class="is-inview" 
//               data-scroll-repeat
//               style={{ animationDelay: '0.6s' }}
//             >
//               <div className="subjectBubble" style={{ opacity: 0.7 }}>
//                 IGCSE/GCSE Double Award Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow fade-in-section"
//               data-scroll 
//               data-scroll-class="is-inview" 
//               data-scroll-repeat
//               style={{ animationDelay: '0.65s' }}
//             >
//               <div 
//                 className="subjectBubble"
//                 style={{
//                   background: "linear-gradient(90deg, #d0e8ff, #a8cfff)",
//                   color: "#0d2344",
//                   fontWeight: 700,
//                   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                   border: "2px solid #a8cfff",
//                   opacity: 1
//                 }}
//               >
//                 IGCSE/GCSE Double Award Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow fade-in-section"
//               data-scroll 
//               data-scroll-class="is-inview" 
//               data-scroll-repeat
//               style={{ animationDelay: '0.7s' }}
//             >
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 Combined Science
//               </div>
//             </div>
//             <div className="subjectBubbleRow fade-in-section"
//               data-scroll 
//               data-scroll-class="is-inview" 
//               data-scroll-repeat
//               style={{ animationDelay: '0.75s' }}
//             >
//               <div className="subjectBubble" style={{ opacity: 0.5 }}>
//                 IGCSE Further Math
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .subjectSection {
//           width: 100%;
//           padding: 0px 0 80px 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .subjectSection.is-inview {
//           opacity: 1;
//           transform: translateY(0);
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
//    .subjects-card1-bg-rect {
//           position: absolute;
//           width: auto;
//           height: 70px;
//           object-fit: contain;
//           z-index: 0;
//         }

//   .subjects-card1-bg-rect:nth-child(1) {
//           width: 350px;
//           bottom: 55px;
//           left: -52px;
//         }

//   .subjects-card1-bg-rect:nth-child(2) {
//           top: 15%;
//           left: 20px;
//         }

//   .subjects-card1-bg-rect:nth-child(3) {
//           width: 150px;
//           object-fit: fill;
//           object-position: left;
//           border-radius: 0 20px 20px 0;
//           bottom: 15%;
//           right: 0;
//         }
//         .subjectSectionInner {
//           background: linear-gradient(135deg, #1F3C68, #265A90);
//           background-size: cover;
//           background-position: center;
//           padding: 150px 30px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//           max-width: 90vw;
//           margin: 0 auto;
//           border-radius: 40px;
//           position: relative;
//           overflow: hidden;
//           min-height: 350px;
//         }

//         .bgRect {
//           position: absolute;
//           width: auto;
//           height: 70px;
//           object-fit: contain;
//           z-index: 0;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .bgRect.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .subjectLeft {
//           min-width: 320px;
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;
//           margin-left: 40px;
//           gap: 18px;
//           padding-left: 30px;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectTitle {
//           color: white;
//           font-size: 1.8vw;
//           font-weight: 800;
//           line-height: 1.2;
//           text-transform: uppercase;
//           max-width: 500px;
//           margin: 0;
//         }

//         .subjectHighlight {
//           font-size: 1.8vw;
//           background: linear-gradient(to right, #b8e0ff 0%, #b8e0ff 60%, #FFFFFF 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .subjectRight {
//           display: flex;
//           align-items: center;
//           justify-content: flex-start;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectBubblesGrid {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//           align-items: flex-start;
//           justify-content: center;
//           width: 100%;
//           position: relative;
//           z-index: 1;
//         }

//         .subjectBubbleRow {
//           display: flex;
//           gap: 30px;
//           align-items: center;
//           justify-content: flex-start;
//           position: relative;
//           z-index: 1;
//           width: 100%;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .subjectBubbleRow.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .subjectBubble {
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           border-radius: 40px;
//           color: white;
//           font-size: 1.4vw;
//           font-weight: 500;
//           padding: 10px 55px;
//           cursor: pointer;
//           transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: none;
//           margin-bottom: 0;
//           user-select: none;
//           min-width: 120px;
//           text-align: left;
//           letter-spacing: 0.02em;
//           outline: none;
//           position: relative;
//           z-index: 1;
//           background: transparent;
//         }

//         .subjectBubble:hover {
//           color: white;
//           background-color: rgba(255, 255, 255, 0.3);
//           box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
//         }

//         @media (max-width: 1280px) {
//           .subjectBubble {
//             padding: 10px 45px;
//           }
//         }

//         @media (max-width: 1199px) {
//           .subjectLeft span {
//             font-size: 18px !important;
//           }

//           .subjectTitle,
//           .subjectHighlight {
//             font-size: 24px !important;
//             line-height: 1.4;
//           }

//           .subjectSectionInner {
//             padding: 140px 30px;
//           }

//           .subjectLeft {
//             gap: 5px;
//           }

//           .subjectBubblesGrid {
//             gap: 10px;
//           }

//           .subjectBubbleRow {
//             gap: 10px;
//           }

//           .subjectBubble {
//             padding: 10px 30px;
//           }
//         }

//         @media (max-width: 1100px) {
//           .subjectSectionInner {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 32px;
//             padding: 70px 20px;
//           }

//           .subjectLeft span {
//             margin-bottom: 10px;
//           }

//           .subjectBubble {
//             font-size: 1rem !important;
//           }

//           .subjectLeft {
//             margin-left: 0;
//             width: 100%;
//             align-items: center;
//             text-align: center;
//             gap: 15px;
//             padding: 0 !important;
//           }

//           .subjectLeft span {
//             justify-content: center !important;
//           }

//           .subjectRight {
//             width: 100%;
//             padding: 0 !important;
//           }

//           .subjectBubblesGrid {
//             width: 100%;
//             gap: 14px;
//             align-items: center;
//           }

//           .subjectBubbleRow {
//             gap: 12px;
//             justify-content: center;
//           }

//           .subjectBubble {
//             text-align: center;
//           }
//         }

//         @media (max-width: 767px) {
//           .subjectBubble {
//             padding: 5px 15px 10px 15px !important;
//             font-size: 16px !important;
//           }
//         }
//            .subjects-card1-bg-rect {
//           position: absolute;
//           width: auto;
//           height: 40px;
//           object-fit: contain;
//           z-index: 0;
//         }

//   .subjects-card1-bg-rect:nth-child(1) {
//           width: 150px;
//           bottom: 55px;
//           left: -52px;
//         }

//   .subjects-card1-bg-rect:nth-child(2) {
//           top: 15%;
//           left: 20px;
//         }

//   .subjects-card1-bg-rect:nth-child(3) {
//           width: 150px;
//           object-fit: fill;
//           object-position: left;
//           border-radius: 0 20px 20px 0;
//           bottom: 15%;
//           right: 0;
//         }
//         @media (max-width: 575px) {
//           .subjectLeft {
//             min-width: auto;
//           }

//           .subjectBubbleRow {
//             flex-wrap: wrap;
//             justify-content: center;
//           }

//           .subjectBubble {
//             padding: 10px 40px !important;
//           }
//         }

//         @media (max-width: 420px) {
//           .subjectBubble {
//             padding: 10px 35px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


// import React from "react";


// const subjectRows = [
//   ["IGCSE Environmental Management (EVM)"],
//   ["IGCSE/GCSE Double Award Science"],
//   ["A-Level Mathematics"],
//   ["IGCSE Physics"],
//   ["IGCSE Chemistry"],
//   ["IGCSE Biology"],
// ];

// export default function Subjects({ }) {
//   return (
//     <section
//       data-scroll
//       data-scroll-class="is-inview"
//       data-scroll-repeat="true"
//       className="fade-in-section subjectSection"
//       style={{ animationDelay: "0.2s" }}
//     >
//       <div className="container">
//         <div className="subjectSectionInner">
//           <img
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-repeat="true"
//             data-scroll-offset="-10%"
//             src="/images/rectangle-bg4.png"
//             alt="bg-shape"
//             className="bgRect"
//           />
//           <img
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-repeat="true"
//             data-scroll-offset="-10%"
//             src="/images/rectangle-bg5.png"
//             alt="bg-shape"
//             className="bgRect"
//           />
//           <img
//             data-scroll
//             data-scroll-class="is-clipped"
//             data-scroll-offset="-10%"
//             src="/images/rectangle-bg4.png"
//             alt="bg-shape"
//             className="bgRect"
//           />
//           <div className="col-4 subjectLeft">
//             <span
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section SubHeading"
//               style={{ animationDelay: "0.1s" }}
//             >
//               SUBJECT
//             </span>
//             <h1
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section subjectTitle"
//               style={{ animationDelay: "0.2s" }}
//             >
//               LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
//               <span className="subjectHighlight">ADIPISCING</span>
//             </h1>
//             <p
//               data-scroll
//               data-scroll-class="is-inview"
//               data-scroll-repeat="true"
//               className="fade-in-section subjectDesc"
//               style={{ animationDelay: "0.3s" }}
//             >
//               Choosing us means partnering with experienced coaches who are
//               dedicated to unlocking your potential.
//             </p>
//           </div>
//           <div className="col-8 pe-5 subjectRight">
//             <div className="subjectBubblesGrid">
//               {subjectRows.map((row, rowIdx) => (
//                 <div
//                   key={rowIdx}
//                   data-scroll
//                   data-scroll-class="is-inview"
//                   data-scroll-repeat="true"
//                   className={`fade-in-section subjectBubbleRow`}
//                   style={{ animationDelay: `${0.4 + rowIdx * 0.12}s` }}
//                 >
//                   {row.map((subj) => (
//                     <div key={subj} className="subjectBubble">
//                       {subj}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//       /* Subject Section  */

// .subjectSection {
//   width: 100%;
//   padding: 160px 0 80px 0;
// }

// .subjectSection .subjectSectionInner {
//   background: url(/images/blue-bg.png);
//   background-size: cover;
//   background-position: center;
//   padding: 150px 30px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   border-radius: 40px;
//   position: relative;
//   overflow: hidden;
// }

// .subjectSection .bgRect {
//   position: absolute;
//   width: auto;
//   height: 70px;
//   object-fit: contain;
//   z-index: 0;
// }

// .subjectSection .bgRect:nth-child(1) {
//   width: 350px;
//   top: 10%;
//   left: 0;
// }

// .subjectSection .bgRect:nth-child(2) {
//   top: 25%;
//   left: 20px;
// }

// .subjectSection .bgRect:nth-child(3) {
//   width: 150px;
//   object-fit: fill;
//   object-position: left;
//   border-radius: 0 20px 20px 0;
//   bottom: 15%;
//   left: 20px;
// }

// .subjectSection .subjectLeft {
//   min-width: 320px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   margin-left: 40px;
//   gap: 18px;
//   padding-left: 30px;
//   position: relative;
//   z-index: 1;
// }

// .subjectSection .subjectLeft span {
//   font-size: 1.3vw;
//   -webkit-text-fill-color: white;
//   margin-bottom: 30px;
// }

// .subjectSection .subjectLeft span::before,
// .subjectSection .subjectLeft span:after {
//   filter: contrast(0) brightness(2);
// }

// .subjectSection .subjectTitle {
//   color: var(--white-color);
//   font-size: 1.8vw;
//   font-weight: 800;
//   line-height: 1.2;
//   text-transform: uppercase;
//   max-width: 500px;
// }

// .subjectSection .subjectTitle .subjectHighlight {
//   font-size: 1.8vw;
//   background: linear-gradient(to right, #A6EAC7 0%, #A6EAC7 60%, #FFFFFF 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .subjectSection .subjectDesc {
//   color: #7285a8;
//   font-size: 1vw;
//   max-width: 80%;
//   line-height: 1.2;
//   opacity: 0.4;
// }

// .subjectSection .subjectRight {
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   position: relative;
//   z-index: 1;
// }

// .subjectSection .subjectBubblesGrid {
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   position: relative;
//   z-index: 1;
// }

// .subjectSection .subjectBubbleRow {
//   display: flex;
//   gap: 30px;
//   align-items: center;
//   justify-content: flex-start;
//   position: relative;
//   z-index: 1;
// }

// .subjectSection .subjectBubble {
//   border-radius: 40px;
//   color: var(--green-text);
//   font-size: 1.4vw;
//   font-weight: 400;
//   padding: 10px 55px;
//   cursor: pointer;
//   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//   box-shadow: none;
//   margin-bottom: 0;
//   user-select: none;
//   min-width: 120px;
//   text-align: center;
//   letter-spacing: 0.02em;
//   outline: none;
//   position: relative;
//   z-index: 1;
// }

// .subjectSection .subjectBubble:hover {
//   color: var(--white-color);
//   background-color: #ffffff4d;
//   box-shadow: 2px 2px 5px 0 var(--blue-text);
// }

// @media (max-width: 1280px) {
//   .subjectSection .subjectBubble {
//     padding: 10px 45px;
//   }
// }

// @media (max-width: 1199px) {
//   .subjectSection .subjectLeft span {
//     font-size: 18px;
//   }

//   .subjectSection .subjectTitle,
//   .subjectSection .subjectTitle .subjectHighlight {
//     font-size: 24px;
//     line-height: 1.4;
//   }

//   .subjectSection .subjectSectionInner {
//     padding: 140px 30px;
//   }

//   .subjectSection .subjectLeft {
//     gap: 5px;
//   }

//   .subjectSection .subjectRight .subjectBubblesGrid {
//     gap: 10px;
//   }

//   .subjectSection .subjectRight .subjectBubblesGrid .subjectBubbleRow {
//     gap: 10px;
//   }

//   // .subjectSection .subjectRight .subjectBubblesGrid .subjectBubbleRow .subjectBubble {
//   //   padding: 10px 30px;
//   // }
// }

// @media (max-width: 1100px) {
//   .subjectSection .subjectSectionInner {
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 32px;
//     padding: 70px 20px;
//   }

//   .subjectSection .subjectLeft span {
//     margin-bottom: 10px;
//   }

//   .subjectSection .subjectDesc {
//     font-size: 1rem;
//   }

//   .subjectSection .subjectBubble {
//     font-size: 1rem;
//   }

//   .subjectSection .bgRect:nth-child(1) {
//     width: 100%;
//     top: 40px;
//     left: 0;
//   }

//   .subjectSection .subjectLeft {
//     margin-left: 0;
//     width: 100%;
//     align-items: center;
//     text-align: center;
//     gap: 15px;
//     padding: 0 !important;
//   }

//   .subjectSection .subjectRight {
//     width: 100%;
//     padding: 0 !important;
//   }

//   .subjectSection .subjectBubblesGrid {
//     width: 100%;
//     gap: 14px;
//   }

//   .subjectSection .subjectBubbleRow {
//     gap: 12px;
//   }
// }

// @media (max-width: 767px) {
//   .subjectSection .subjectBubbleRow .subjectBubble {
//     padding: 5px 15px 10px 15px;
//     font-size: 16px;
//   }
// }

// @media (max-width: 575px) {
//   .subjectSection .bgRect:nth-child(2) {
//     top: 42%;
//     left: 0;
//     width: 15%;
//     height: 55px;
//     object-fit: cover;
//     border-radius: 0 20px 20px 0;
//   }

//   .subjectSection .bgRect:nth-child(3) {
//     bottom: 8%;
//     left: auto;
//     right: 0;
//     width: 22%;
//     height: 55px;
//     rotate: 180deg;
//   }

//   .subjectSection .subjectLeft {
//     min-width: auto;
//   }

//   .subjectSection .subjectBubbleRow {
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// }

// @media (max-width: 420px) {
//   .subjectSection .subjectRight .subjectBubblesGrid .subjectBubbleRow .subjectBubble {
//     padding: 10px 35px;
//   }

//   .subjectSection .bgRect:nth-child(2) {
//     top: 40%;
//   }

//   .subjectSection .bgRect:nth-child(3) {
//     bottom: 14%;
//   }
// }
//       `}</style>
//     </section>

//   );
// }


"use client";
import React from "react";

export default function SubjectsCard() {
  return (
    <div className="subjectSection fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}
    >
      <div className="subjectSectionInner">
        {/* Background decorative rectangles */}
        <img src="/assets/Rectangle140.png" alt="bg-shape" className="testimonialRect rect-1" />
        <img src="/assets/Rectangle140.png" alt="bg-shape" className="testimonialRect rect-2" />
        <img src="/assets/Rectangle141.png" alt="bg-shape" className="testimonialRect rect-3" />
        {/* LEFT COLUMN */}
        <div className="subjectLeft fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: '0.3s' }}
        >
          {/* Header */}
          <span
            className="fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              fontSize: "1.3vw",
              color: "white",
              letterSpacing: "2px",
              opacity: 0.9,
              fontWeight: 600,
              textTransform: "uppercase",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "200px",
              animationDelay: '0.35s'
            }}
          >
            <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
            <span>Subjects</span>
            <span style={{ fontSize: "1.2rem", lineHeight: "1" }}>≡</span>
          </span>

          {/* Heading */}
          <h2 className="subjectTitle fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: '0.4s' }}
          >
            LOREM IPSUM DOLOR SIT AMET, <br />
            <span className="subjectHighlight fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: '0.45s' }}
            >
              CONSECTETUR ADIPISCING
            </span>
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="subjectRight fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: '0.5s' }}
        >
          <div className="subjectBubblesGrid">
            <div className="subjectBubbleRow fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: '0.55s' }}
            >
              <div className="subjectBubble" style={{ opacity: 0.5 }}>
                IGCSE Environmental Management (EVM)
              </div>
            </div>
            <div className="subjectBubbleRow fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: '0.6s' }}
            >
              <div className="subjectBubble" style={{ opacity: 0.7 }}>
                IGCSE/GCSE Double Award Science
              </div>
            </div>
            <div className="subjectBubbleRow fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: '0.65s' }}
            >
              <div
                className="subjectBubble"
                style={{
                  background: "linear-gradient(90deg, #d0e8ff, #a8cfff)",
                  color: "#0d2344",
                  fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  border: "2px solid #a8cfff",
                  opacity: 1
                }}
              >
                IGCSE/GCSE Double Award Science
              </div>
            </div>
            <div className="subjectBubbleRow fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: '0.7s' }}
            >
              <div className="subjectBubble" style={{ opacity: 0.5 }}>
                Combined Science
              </div>
            </div>
            <div className="subjectBubbleRow fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{ animationDelay: '0.75s' }}
            >
              <div className="subjectBubble" style={{ opacity: 0.5 }}>
                IGCSE Further Math
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .subjectSection {
          width: 100%;
          padding: 0px 0 80px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .subjectSection.is-inview {
          opacity: 1;
          transform: translateY(0);
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
        
        .subjectSectionInner {
          background: linear-gradient(135deg, #1F3C68, #265A90);
          background-size: cover;
          background-position: center;
          padding: 150px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 90vw;
          margin: 0 auto;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
          min-height: 350px;
        }

        .bgRect {
          position: absolute;
          width: auto;
          height: 70px;
          object-fit: contain;
          z-index: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .bgRect.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        .subjectLeft {
          min-width: 320px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-left: 40px;
          gap: 18px;
          padding-left: 30px;
          position: relative;
          z-index: 1;
        }

        .subjectTitle {
          color: white;
          font-size: 1.8vw;
          font-weight: 800;
          line-height: 1.2;
          text-transform: uppercase;
          max-width: 500px;
          margin: 0;
        }

        .subjectHighlight {
          font-size: 1.8vw;
          background: linear-gradient(to right, #b8e0ff 0%, #b8e0ff 60%, #FFFFFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subjectRight {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          z-index: 1;
        }

           .testimonialRect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          z-index: 2;
        }
        .rect-1 {
          top: 3%;
          left: -8%;
          width: 30vw;
          height: 10vh;
        }

        .rect-2 {
          top: 82%;
          left: -5%;
          width: 16vw;
          height: 10vh;
        }

        .rect-3 {
          bottom: 20%;
          right: -9%;
          width: 13vw;
          height: 10vh;
        }

        .subjectBubblesGrid {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .subjectBubbleRow {
          display: flex;
          gap: 30px;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          z-index: 1;
          width: 100%;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .subjectBubbleRow.is-inview {
          opacity: 1;
          transform: translateY(0);
        }

        .subjectBubble {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 40px;
          color: white;
          font-size: 1.4vw;
          font-weight: 500;
          padding: 10px 55px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: none;
          margin-bottom: 0;
          user-select: none;
          min-width: 120px;
          text-align: left;
          letter-spacing: 0.02em;
          outline: none;
          position: relative;
          z-index: 1;
          background: transparent;
        }

        .subjectBubble:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.3);
          box-shadow: 2px 2px 5px 0 rgba(31, 60, 104, 0.3);
        }

        @media (max-width: 1280px) {
          .subjectBubble {
            padding: 10px 45px;
          }
        }

        @media (max-width: 1199px) {
          .subjectLeft span {
            font-size: 18px !important;
          }

          .subjectTitle,
          .subjectHighlight {
            font-size: 24px !important;
            line-height: 1.4;
          }

          .subjectSectionInner {
            padding: 140px 30px;
          }

          .subjectLeft {
            gap: 5px;
          }

          .subjectBubblesGrid {
            gap: 10px;
          }

          .subjectBubbleRow {
            gap: 10px;
          }

          .subjectBubble {
            padding: 10px 30px;
          }
        }

        @media (max-width: 1100px) {
          .subjectSectionInner {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
            padding: 70px 20px;
          }

          .subjectLeft span {
            margin-bottom: 10px;
          }

          .subjectBubble {
            font-size: 1rem !important;
          }

          .subjectLeft {
            margin-left: 0;
            width: 100%;
            align-items: center;
            text-align: center;
            gap: 15px;
            padding: 0 !important;
          }

          .subjectLeft span {
            justify-content: center !important;
          }

          .subjectRight {
            width: 100%;
            padding: 0 !important;
          }

          .subjectBubblesGrid {
            width: 100%;
            gap: 14px;
            align-items: center;
          }

          .subjectBubbleRow {
            gap: 12px;
            justify-content: center;
          }

          .subjectBubble {
            text-align: center;
          }
        }

        @media (max-width: 767px) {
          .subjectBubble {
            padding: 5px 15px 10px 15px !important;
            font-size: 16px !important;
          }
               .rect-1 {
          top: 3%;
          left: -8%;
          width: 30vw;
          height: 7vh;
        }
.rect-2 {
  display: none;
}


        .rect-3 {
          bottom: 3%;
          right: -9%;
          width: 31vw;
          height: 7vh;
        }
        }

        @media (max-width: 575px) {
          .subjectLeft {
            min-width: auto;
          }

          .subjectBubbleRow {
            flex-wrap: wrap;
            justify-content: center;
          }

          .subjectBubble {
            padding: 10px 40px !important;
          }
        }

        @media (max-width: 420px) {
          .subjectBubble {
            padding: 10px 35px !important;
          }
        }
      `}</style>
    </div>
  );
}
