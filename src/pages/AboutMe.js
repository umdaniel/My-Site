import React from 'react'

import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import PText from '../components/PText';
import AboutImg from '../assets/images/profile3.PNG';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

const AboutPageStyles = styled.div`
padding: 20rem 0 10rem 0;
.top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
.resume {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    border-style: solid;
    padding: 2rem;
    border-color: white;
}
a:hover {
    color: blue;
}
.left {
    flex: 3;
}
.right {
    flex: 2;
}
.about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
        background-color: var(--deep-dark);
        padding: 0.5rem;
        border-radius: 8px;
    }
}
.about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
}
.about__info {
    margin-bottom: 4rem;
    .para {
        max-width: 100%;
    }
}
.right {
    img {
        border: 2px solid var(--gray-1);
    }
}
.about__info__items {
    margin-top: 15rem;
}
.about__info__item {
    margin-bottom: 10rem;
}
.about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
}
@media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
        flex-direction: column;
        gap: 5rem;
    }
    .about__subheading {
        font-size: 1.8rem;
    }
    .about__heading {
        font-size: 2.8rem;
    }
    .about__info__heading {
        font-size: 3rem;
    }
}
`;

export default function AboutMe() {
    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <p className="about__subheading">
                            Hi, I am <span>Daniel Um</span>
                        </p>
                        <h2 className="about__heading">
                            A Front-End Software Engineer
                        </h2>
                        <div className="about__info">
                            <PText>
                                Originally from Flushing, New York, now situated in 
                                Fairfax, Virginia.
                                <br /><br />
                                I started coding Junior year at James Madison University
                                after switching from Health Sciences. I immediately fell
                                in love with what Computer Science had to offer.
                                <br /><br />
                                My vision is to create elegant user friendly interfaces
                                for all individuals to enjoy and admire.
                            </PText>
                        </div>
                        <div className="resume">
                            <a href="../assets/resume/DanielUmResume2021.pdf" download="DanielUmResume2021.pdf">Download Resume</a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={AboutImg} alt="my profile"/>
                    </div>
                </div>
                <div className="about__info__items">
                    <div className="about__info__item">
                        <h1 className="about__info__heading">Education</h1>
                        <AboutInfoItem 
                        title="School"
                        items={['Oakton High School, Vienna']}
                        />
                        <AboutInfoItem 
                        title="University"
                        items={['James Madison University, Harrisonburg']}
                        />
                    </div>
                    <div className="about__info__item">
                        <h1 className="about__info__heading">My Skills</h1>
                        <AboutInfoItem 
                        title="Languages"
                        items={['HTML', 'CSS', 'Java', 'JavaScript', 'C', 'Python', 'RUST']}
                        />
                        <AboutInfoItem 
                        title="Front-End + Back-End"
                        items={['REACT', 'Node', 'Express', 'Firebase']}
                        />
                    </div>
                </div>
            </div>
            <ContactBanner />
            <Footer />
        </AboutPageStyles>
    );
}
