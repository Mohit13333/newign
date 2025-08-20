// "use client";
// import React from "react";

// const ImageCard = () => {
//   return (
//     <div className="card1 mx-auto fade-in-section" 
//       data-scroll 
//       data-scroll-class="is-inview" 
//       data-scroll-repeat
//       style={{ animationDelay: "0.1s" }}
//     >
//       <div className="images-container">
//         <div className="image-wrapper fade-in-section" 
//           data-scroll 
//           data-scroll-class="is-inview" 
//           data-scroll-repeat
//           style={{ animationDelay: "0.15s" }}>
//           <img src="/assets/uni1.png" alt="University 1" className='img' />
//         </div>
//         <div className="image-wrapper fade-in-section" 
//           data-scroll 
//           data-scroll-class="is-inview" 
//           data-scroll-repeat
//           style={{ animationDelay: "0.2s" }}>
//           <img src="/assets/uni2.png" alt="University 2" className='img' />
//         </div>
//         <div className="image-wrapper fade-in-section" 
//           data-scroll 
//           data-scroll-class="is-inview" 
//           data-scroll-repeat
//           style={{ animationDelay: "0.25s" }}>
//           <img src="/assets/uni3.png" alt="University 3" className='img' />
//         </div>
//       </div>
//       <style jsx>{`
//         /* Fade-in animation styles */
//         .fade-in-section {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//         }
//         .fade-in-section.is-inview {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         .card1 {
//           max-width: 90vw;
//         }
        
//         .images-container {
//           display: flex;
//           justify-content: space-between;
//           gap: 20px;
//         }
        
//         .image-wrapper {
//           flex: 1;
//           min-width: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
        
//         .image-wrapper img {
//           width: 70vh;
//           height: 40vh;
//           object-fit: contain;
//           max-width: 100%;
//           max-height: 100%;
//         }
        
//         @media (max-width: 768px) {
//           .images-container {
//             flex-direction: column;
//             gap: 10px;
//           }
          
//           .image-wrapper {
//             opacity: 0;
//             transform: translateX(-20px);
//             transition: opacity 0.5s ease-out, transform 0.5s ease-out;
//             height: 30vh;
//           }
          
//           .image-wrapper.is-inview {
//             opacity: 1;
//             transform: translateX(0);
//           }
          
//           .image-wrapper:nth-child(1) {
//             transition-delay: 0.15s;
//           }
//           .image-wrapper:nth-child(2) {
//             transition-delay: 0.25s;
//           }
//           .image-wrapper:nth-child(3) {
//             transition-delay: 0.35s;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageCard;




import React from "react";

const UniversityLogosCard = () => {
  return (
    <>
      <div
        className="container-fluid py-4 d-flex justify-content-center align-items-center university-logos-container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          maxWidth: "90vw",
          margin: "0 auto",
          animationDelay: "0.3s"
        }}
      >
        {/* Desktop Layout - Horizontal */}
        <div className="d-none d-md-flex justify-content-between align-items-center w-100">
          <div className="text-center flex-fill fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.2s" }}>
            <img
              src="/assets/uni1.png"
              alt="Pearson Edexcel"
              className="img-fluid"
              style={{ maxHeight: "150px", maxWidth: "350px" }}
            />
          </div>
          <div className="text-center flex-fill mx-3 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}>
            <img
              src="/assets/uni2.png"
              alt="University of Cambridge"
              className="img-fluid"
              style={{ maxHeight: "150px", maxWidth: "350px" }}
            />
          </div>
          <div className="text-center flex-fill fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.4s" }}>
            <img
              src="/assets/uni3.png"
              alt="AQA Realising Potential"
              className="img-fluid"
              style={{ maxHeight: "150px", maxWidth: "350px" }}
            />
          </div>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="d-md-none w-100">
          <div className="text-center mb-4 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.2s" }}>
            <img
              src="/assets/uni1.png"
              alt="Pearson Edexcel"
              className="img-fluid"
              style={{ maxHeight: "120px", maxWidth: "280px" }}
            />
          </div>
          <div className="text-center mb-4 fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.3s" }}>
            <img
              src="/assets/uni2.png"
              alt="University of Cambridge"
              className="img-fluid"
              style={{ maxHeight: "120px", maxWidth: "280px" }}
            />
          </div>
          <div className="text-center fade-in-section"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{ animationDelay: "0.4s" }}>
            <img
              src="/assets/uni3.png"
              alt="AQA Realising Potential"
              className="img-fluid"
              style={{ maxHeight: "120px", maxWidth: "280px" }}
            />
          </div>
        </div>
      </div>

      {/* ✅ Scoped responsive styles */}
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
        .university-logos-container {
          height: 30vh; /* PC/Desktop */
        }
        @media (max-width: 767px) {
          .university-logos-container {
            height: 50vh; /* Mobile */
          }
        }
      `}</style>
    </>
  );
};

export default UniversityLogosCard;


