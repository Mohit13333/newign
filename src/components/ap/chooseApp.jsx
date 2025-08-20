import React from 'react';

const benefits = [
    {
        title: 'EARN COLLEGE CREDITS',
        icon: '/assets/1lgo.png',
        text: `Missing out on a chance that helps you set foot on your dream campus doesn't seem apt, right? Your AP score fetch you the much-needed advantage over other applicants in the entrance procedure.`,
    },
    {
        title: 'UNIVERSITY READY PROFILES',
        icon: '/assets/2lgo.png',
        text: `Research proves that AP students are better prepared for university. We agree! They're more likely to develop the right skills, get familiar with environment, & stand out with college-ready proficiency.`,
    },
    {
        title: 'DISPLAY SUBJECT PROFICIENCY',
        icon: '/assets/3lgo.png',
        text: `Taking AP exams allow students to study a subject in depth which leads to developing full competency in the discipline. Disconnecting your ideal career path in the due process helps find the right path moving ahead.`,
    },
    {
        title: 'UNIQUE COLLEGE APPLICATION',
        icon: '/assets/4lgo.png',
        text: `Your AP score transcripted in your college application automatically highlights a sense of commitment coming from you. This in turn boosts your chances of securing credit & placement from top universities.`,
    }
];

const APBenefits = () => {
    return (
        <div className='mx-auto' style={{ maxWidth: "90vw", border:"none !important" }}>
            <div className="d-flex align-items-center justify-content-center mb-md-4 mb-3 fade-in-section"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat
                style={{ animationDelay: "0.25s" }}>
                 <div className="SubHeading testSubheading">WHY DO STUDENTS CHOOSE APS?
</div>
            </div>
            <div className="cards">
                {benefits.map((item, index) => (
                    <div 
                        className={`card1 ${index % 2 === 1 ? 'greenBg' : 'blueBg'} fade-in-section`} 
                        key={index}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                        <img src={item.icon} alt="icon" className="icon" />
                        <h3 className="title">{item.title}</h3>
                        <p className="text">{item.text}</p>
                    </div>
                ))}
            </div>
            <style jsx>{`
    .container {
        text-align: center;
        background-color: white;
    }

    .heading {
        font-size: 28px;
        font-weight: bold;
        color: #0d1b2a;
        margin-bottom: 40px;
    }

    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        gap: 28px;
        overflow-x: auto;
        padding-bottom: 20px;
    }

    .card1 {
        border-radius: 24px;
        padding: 36px 30px;
        min-width: 320px;
        width: 100%;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
        text-align: left;
        transition: transform 0.3s ease;
        flex: 1;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .card1.is-inview {
        opacity: 1;
        transform: translateY(0);
    }

    .card1:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    }

    .blueBg {
        background-image: url('/assets/bluebg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .greenBg {
        background-image: url('/assets/greenbg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .icon {
        width: 115px;
        height: 125px;
        margin-bottom: 24px;
    }

    .title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 18px;
        background: linear-gradient(to right, #3F88BA, #161664);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        line-height: 1.3;
    }

    .text {
        font-size: 16px;
        line-height: 1.7;
        color: #333;
        font-weight: 400;
    }

    /* Specific optimizations for 1366×768 and similar resolutions */
    @media (max-width: 1400px) and (min-width: 1200px) {
        .cards {
            gap: 24px;
        }
        
        .card1 {
            min-width: 300px;
            padding: 32px 26px;
        }
        
        .title {
            font-size: 20px;
            margin-bottom: 16px;
        }
        
        .text {
            font-size: 15px;
        }
        
        .icon {
            width: 110px;
            height: 120px;
            margin-bottom: 22px;
        }
    }

    @media (max-width: 1200px) {
        .cards {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }
        .card1 {
            min-width: 280px;
            max-width: 340px;
            padding: 30px 25px;
        }
        
        .title {
            font-size: 19px;
        }
        
        .text {
            font-size: 14px;
        }
        
        .icon {
            width: 100px;
            height: 110px;
        }
    }

    @media (max-width: 768px) {
        .card1 {
            min-width: 260px;
            max-width: 300px;
            padding: 25px 20px;
        }
        
        .title {
            font-size: 17px;
            margin-bottom: 15px;
        }
        
        .text {
            font-size: 13px;
            line-height: 1.6;
        }
        
        .icon {
            width: 90px;
            height: 100px;
            margin-bottom: 18px;
        }
    }
`}</style>
        </div>
    );
};

export default APBenefits;