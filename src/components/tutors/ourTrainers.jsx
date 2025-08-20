import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function OurTrainers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Sample trainer data
    const trainers = [
        {
            name: "NIKHIL PAWAR",
            image: "/assets/male.png",
            alt: "Portrait of Asian man with glasses and dark hair wearing denim shirt",
            experience: "4+ YEARS",
            subjects: "Chemistry & Environmental Management",
            color: "blue"
        },
        {
            name: "PRAKSHI SHARMA",
            image: "/assets/female.png",
            alt: "Portrait of smiling woman with curly dark hair wearing orange top",
            experience: "4+ YEARS",
            subjects: "Biology, Chemistry & Physics",
            color: "green"
        },
        {
            name: "NIKHIL PAWAR",
            image: "/assets/male.png",
            alt: "Portrait of Asian man with glasses and dark hair wearing denim shirt",
            experience: "4+ YEARS",
            subjects: "Chemistry & Environmental Management",
            color: "blue"
        },
        {
            name: "PRAKSHI SHARMA",
            image: "/assets/female.png",
            alt: "Portrait of smiling woman with curly dark hair wearing orange top",
            experience: "4+ YEARS",
            subjects: "Biology, Chemistry & Physics",
            color: "green"
        },
        {
            name: "NIKHIL PAWAR",
            image: "/assets/male.png",
            alt: "Portrait of Asian man with glasses and dark hair wearing denim shirt",
            experience: "4+ YEARS",
            subjects: "Chemistry & Environmental Management",
            color: "blue"
        }
    ];

    // Calculate how many cards to show and total slides
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setCardsPerView(1); // Desktop: 1 main card with side previews
            } else {
                setCardsPerView(1); // Mobile: 1 center card with side previews
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = trainers.length;

    const nextSlide = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );

        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );

        setTimeout(() => setIsTransitioning(false), 500);
    };

    const goToSlide = (index) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Get visible cards (center + sides)
    const getVisibleCards = () => {
        const cards = [];
        const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

        cards.push({ ...trainers[prevIndex], position: 'prev', index: prevIndex });
        cards.push({ ...trainers[currentIndex], position: 'center', index: currentIndex });
        cards.push({ ...trainers[nextIndex], position: 'next', index: nextIndex });

        return cards;
    };

    return (
        <>
            <Head>
                <title>Our Trainers</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="page-container">
                                    <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="testimonialHeader">
                                <span className="SubHeading">OUR TRAINERS
                                </span>
                            </div>
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

                <div className="slider-container">
                    {/* Left arrow */}
                    <button
                        aria-label="Previous"
                        className="nav-arrow left-arrow"
                        onClick={prevSlide}
                    >
                        <i className="fas fa-arrow-left"></i>
                    </button>

                    <div className="slider-content">
                        {getVisibleCards().map((trainer) => (
                            <div
                                key={`${trainer.index}-${trainer.position}`}
                                className={`trainer-card ${trainer.color}-card ${trainer.position}`}
                            >
                                <div className="card-content">
                                    <h3 className={`trainer-name ${trainer.color === 'green' ? 'green-name' : ''}`}>
                                        {trainer.name}
                                    </h3>
                                    <div className="image-container">
                                        <img
                                            alt={trainer.alt}
                                            className="trainer-image"
                                            src={trainer.image}
                                        />
                                    </div>
                                    <div className="trainer-details">
                                        <hr className="divider" />
                                        <p className="subjects-text">
                                            Lorem ipsum dolor sit
                                        </p>
                                        <p className={`experience ${trainer.color === 'green' ? 'green-exp' : ''}`}>
                                            12+YEARS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        aria-label="Next"
                        className="nav-arrow right-arrow"
                        onClick={nextSlide}
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>

                <div className="indicators">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>

                <button className="see-more-btn">
                    SEE MORE
                </button>
            </div>

            <style jsx>{`
        .page-container {
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem 1rem;
          font-family: "Montserrat", sans-serif;
          width: 100%;
          overflow: hidden;
        }
        
        .section-heading {
          color: #1B2E5B;
          font-weight: 800;
          text-align: center;
          font-size: 1.125rem;
          letter-spacing: 0.025em;
          margin-bottom: 1rem;
        }
        
        @media (min-width: 768px) {
          .section-heading {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }
        }
        
        .equals-sign {
          color: #2B9D8F;
        }
        
        .main-heading {
          color: #1B2E5B;
          font-weight: 800;
          text-align: center;
          font-size: 1.5rem;
          letter-spacing: 0.025em;
          margin-bottom: 3rem;
          max-width: 56rem;
          line-height: 1.2;
        }
        
        @media (min-width: 768px) {
          .main-heading {
            font-size: 1.875rem;
            margin-bottom: 4rem;
          }
        }
        
        .desktop-only {
          display: none;
        }
        
        @media (min-width: 768px) {
          .desktop-only {
            display: block;
          }
        }
        
        .accent-text {
          color: #2B9D8F;
        }
        
        .slider-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          height: 500px;
        }
        
        @media (min-width: 768px) {
          .slider-container {
            height: 600px;
          }
        }
        
        .slider-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .nav-arrow {
          position: absolute;
          z-index: 20;
          background-color: #1B2E5B;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        @media (min-width: 768px) {
          .nav-arrow {
            width: 4rem;
            height: 4rem;
          }
        }
        
        .nav-arrow:hover {
          background-color: #2B9D8F;
        }
        
        .left-arrow {
          left: 1rem;
        }
        
        .right-arrow {
          right: 1rem;
        }
        
        @media (min-width: 768px) {
          .left-arrow {
            left: 2rem;
          }
          
          .right-arrow {
            right: 2rem;
          }
        }
        
        .nav-arrow i {
          font-size: 1.25rem;
        }
        
        @media (min-width: 768px) {
          .nav-arrow i {
            font-size: 1.5rem;
          }
        }
        
        .trainer-card {
          position: absolute;
          border-radius: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.5s ease-in-out;
          overflow: hidden;
        }
        
        /* Mobile layout */
        .trainer-card {
          width: 280px;
          height: 400px;
        }
        
        .trainer-card.center {
          z-index: 10;
          transform: translateX(0) scale(1);
          opacity: 1;
        }
        
        .trainer-card.prev {
          z-index: 5;
          transform: translateX(-200px) scale(0.8);
          opacity: 0.6;
        }
        
        .trainer-card.next {
          z-index: 5;
          transform: translateX(200px) scale(0.8);
          opacity: 0.6;
        }
        
        /* Desktop layout */
        @media (min-width: 768px) {
          .trainer-card {
            width: 350px;
            height: 500px;
          }
          
          .trainer-card.center {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          
          .trainer-card.prev {
            transform: translateX(-300px) scale(0.7);
            opacity: 0.4;
          }
          
          .trainer-card.next {
            transform: translateX(300px) scale(0.7);
            opacity: 0.4;
          }
        }
        
        .blue-card {
          background: linear-gradient(to bottom, #A9C9FF, #E8F2FF);
        }
        
        .green-card {
          background: linear-gradient(to bottom, #E6F4ED, #9DE0C9);
        }
        
        .card-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        
        .trainer-name {
          color: #1B2E5B;
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.1em;
          margin: 1.5rem 0 1rem 0;
          text-align: center;
        }
        
        @media (min-width: 768px) {
          .trainer-name {
            font-size: 1.5rem;
            margin: 2rem 0 1.5rem 0;
          }
        }
        
        .green-name {
          color: #2B9D8F;
        }
        
        .image-container {
          flex: 1;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 1rem;
        }
        
        .trainer-image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          object-position: center top;
        }
        
        @media (min-width: 768px) {
          .trainer-image {
            width: 250px;
            height: 250px;
          }
        }
        
        .trainer-details {
          width: 100%;
          padding: 1rem 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .divider {
          border-top: 1px solid #D1D5DB;
          width: 80%;
          margin-bottom: 1rem;
        }
        
        .subjects-text {
          color: #9CA3AF;
          font-size: 0.875rem;
          text-align: center;
          margin-bottom: 0.5rem;
          font-weight: 400;
        }
        
        @media (min-width: 768px) {
          .subjects-text {
            font-size: 1rem;
          }
        }
        
        .experience {
          color: #1B2E5B;
          font-weight: 800;
          font-size: 1.5rem;
          text-align: center;
          letter-spacing: 0.05em;
        }
        
        @media (min-width: 768px) {
          .experience {
            font-size: 1.75rem;
          }
        }
        
        .green-exp {
          color: #2B9D8F;
        }
        
        .indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
          margin-bottom: 3rem;
        }
        
        .indicator {
          width: 0.75rem;
          height: 0.25rem;
          border-radius: 9999px;
          background-color: #D1D5DB;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          width: 2rem;
          background-color: #6B7280;
        }
        
        .indicator:hover {
          background-color: #6B7280;
        }
        
        .see-more-btn {
          border: 2px solid #A9C9FF;
          border-radius: 9999px;
          padding: 0.75rem 3rem;
          color: #1B2E5B;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.1em;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        @media (min-width: 768px) {
          .see-more-btn {
            font-size: 1.125rem;
            padding: 1rem 4rem;
          }
        }
        
        .see-more-btn:hover {
          background-color: #A9C9FF;
          color: white;
        }
      `}</style>
        </>
    );
}