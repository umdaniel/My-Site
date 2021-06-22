import React from 'react';

import ProfileImg from '../assets/images/profile.jpg';
import PText from './PText';
import Button from './Button';
import ScrollDownArrow from '../assets/images/down.svg';

import styled from 'styled-components';

const HeroStyles = styled.div`
.hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
        display: inline-block;
        width: 100%;
    }
    .hero__name {
        font-size: 7rem;
        font-family: "Montserrat SemiBold";
        color: var(--white);
    }
}
.hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
}
.hero__info {
    margin-top: -18rem;
}
.hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
    p {
        font-size: 1.6rem;
        transform: translateY(-70px) rotate(90deg);
        letter-spacing: .7rem;
        text-transform: uppercase;
    }
    img {
        max-height: 45px;
        width: 16px;
        margin: 0 auto;
        object-fit: contain;
    }
}
.hero__scrollDown {
    right: 50px;
}
@media only screen and (max-width: 768px) {
    .hero {
        min-height: 750px;
    }
    .hero__heading {
        font-size: 1.4rem;
        margin-bottom: -3rem;
        .hero__name {
            font-size: 4.5rem;
        }
    }
    .hero__img {
        height: 300px;
    }
    .hero__info {
        margin-top: 3rem;
    }
    .hero__scrollDown {
        right: 0;
        width: 20px;
        gap: 1rem;
        p {
            font-size: 1.3rem;
        }
    }
}
`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
            <div className="container">
                <h1 className="hero__heading">
                    <span>Hello, This is</span>
                    <span className="hero__name"> Daniel Um</span>
                </h1>
                <div className="hero__img">
                    <img src={ProfileImg} alt="" />
                </div>
                <div className="hero__info">
                    <PText>
                        I am an aspiring Front-End Software Engineer and
                        recent Computer Science graduate from James Madison
                        University. 
                        Passionate about front-end software development, web
                        development, elegant user interfaces, and clean code.
                        I currently reside in Fairfax, Virginia.
                    </PText>
                    <Button btnLink="/projects" btnText="see my work">    
                    </Button>
                </div>
                <div className="hero__scrollDown">
                    <p>Scroll</p>
                    <img src={ScrollDownArrow} alt="" />
                </div>
            </div>
            </div>
        </HeroStyles>
    );
}
