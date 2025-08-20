"use client";
import { useState } from "react";

export default function LifeAtIgniteCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Modern library with bookshelves and seating area",
    },
    {
      url: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Modern office workspace with computers",
    },
    {
      url: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Collaborative meeting room",
    },
    {
      url: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Creative workspace with plants",
    },
    {
      url: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Modern break room and lounge area",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () =>
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
  const getNextIndex = () =>
    currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

  return (
    <div className=" py-5 overflow-hidden fade-in-section" data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{ animationDelay: "0.1s" }}>
      <div className="container fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{ maxWidth: '1140px', animationDelay: "0.15s" }}>
        {/* Updated Header Section */}
        <div className="alumniSubSection" style={{ padding: '30px 0' }}>
          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section SubHeading alumniSubHeading"
            style={{ animationDelay: "0.2s" }}
          >
            LIFE AT IGNITE
          </h3>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section alumniTitle"
            style={{ margin: "24px 0 0 0", animationDelay: "0.3s" }}
          >
            LOREM IPSUM DOLOR SIT AMET, consectetur
            <span className="alumniHighlight"> ADIPISCING</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="position-relative d-flex align-items-center justify-content-center mx-auto fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ maxWidth: '800px', height: '400px', animationDelay: "0.4s" }}>
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="position-absolute btn btn-primary rounded-circle d-flex align-items-center justify-content-center fade-in-section arrow-btn"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              zIndex: 10,
              left: '-8rem',
              width: '3rem',
              height: '3rem',
              transition: 'background-color 0.3s ease',
              animationDelay: "0.45s"
            }}
          >
            <img src="/assets/lar.png" alt="leftarr" width={50} height={50} />
          </button>

          {/* Stacked Images */}
          <div className="position-relative d-flex justify-content-center align-items-center carousel-images">
            <img
              src={images[getPrevIndex()].url}
              alt={images[getPrevIndex()].alt}
              className="position-absolute rounded shadow-sm fade-in-section prev-img"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
            />
            <img
              src={images[getNextIndex()].url}
              alt={images[getNextIndex()].alt}
              className="position-absolute rounded shadow-sm fade-in-section next-img"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
            />
            <img
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              className="position-relative rounded shadow-lg fade-in-section main-img"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="position-absolute btn btn-primary rounded-circle d-flex align-items-center justify-content-center fade-in-section arrow-btn"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat
            style={{
              zIndex: 10,
              right: '-8rem',
              width: '3rem',
              height: '3rem',
              transition: 'background-color 0.3s ease',
              animationDelay: "0.65s"
            }}
          >
            <img src="/assets/rar.png" alt="rightarr" width={50} height={50} />
          </button>
        </div>

        {/* Caption */}
        <div className="mt-4 text-center fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.7s" }}>
          <p className="text-muted small mx-auto" style={{ maxWidth: '32rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
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

        /* Alumni Section Styles */
        .alumniSubSection {
          text-align: center;
          position: relative;
          margin-bottom:1rem;
        }
        .alumniSubSection:before {
          content: "";
          width: 130%;
          height: 100%;
          position: absolute;
          top: 0;
          right: -50%;
          border: 3px solid black;
          border-radius: 30px;
          background-color: var(--white-color);
          background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, var(--border-color), #e7f6ff) border-box;
          border: 2px solid transparent;
          z-index: -1;
        }
        .alumniSubHeading {
          font-size: 1.6vw;
          color: #1a2a49;
          text-transform: uppercase;
        }
        .alumniTitle {
          font-size: 2vw;
          font-weight: 700;
          max-width: 50%;
          margin: 30px auto 0 !important;
          line-height: 1.1;
          text-transform: uppercase;
          color: #1a2a49;
        }
        .alumniHighlight {
          background: linear-gradient(to left, #00A491, #003E37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Desktop defaults */
        .carousel-images {
          height: 400px;
          width: 700px;
        }
        .prev-img, .next-img {
          width: 450px;
          height: 350px;
          object-fit: cover;
          opacity: 0.8;
          transition: all 0.5s ease;
          border-radius: 1rem;
          top: 25px;
        }
        .prev-img { left: 20px; }
        .next-img { right: 20px; }
        .main-img {
          width: 500px;
          height: 400px;
          object-fit: cover;
          border-radius: 1rem;
          transition: all 0.5s ease;
        }

        /* Mobile fixes */
         @media (max-width: 1199px) {
          .alumniSubHeading {
            font-size: 1.5rem;
          }
          .alumniTitle {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 768px) {
          .carousel-images {
            width: 100%;
            height: 300px;
          }
          .prev-img, .next-img {
            display: block;
            width: 200px;
            height: 180px;
            top: 60px;
          }
          .prev-img { left: 16vw; }
          .next-img { right: 16vw; }
          .main-img {
            width: 250px;
            height: 250px;
          }
          .arrow-btn {
            top: 50%;
            transform: translateY(-50%);
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .arrow-btn:first-child {
            left: 0.5rem !important;
            right: auto !important;
          }
          .arrow-btn:last-child {
            right: 0.5rem !important;
            left: auto !important;
          }
          .alumniSubSection:before {
            right: -30%;
            border-radius: 20px;
          }
          .alumniTitle {
            max-width: 100%;
          }
        }
        @media (max-width: 575px) {
          .alumniSubHeading {
            font-size: 1.2rem;
          }
          .alumniTitle {
            font-size: 1.6rem;
          }
          .carousel-images {
            height: 250px;
          }
          .prev-img, .next-img {
            width: 150px;
            height: 130px;
          }
          .main-img {
            width: 200px;
            height: 200px;
          }
        
        }
      `}</style>
    </div>
  );
}