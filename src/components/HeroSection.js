import React from 'react';

import ProfileImg from '../assets/images/profile.jpg';
import PText from './PText';
import Button from './Button';

export default function HeroSection() {
    return (
        <div>
            <div className="container">
                <h1 className="hero__heading">
                    <span>Hello, This is</span>
                    <span> Daniel Um</span>
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
                    <Button btnLink="/projects" btnText="see my work"></Button>
                </div>
            </div>
        </div>
    );
}
