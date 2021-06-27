import React from 'react'

import { MdLocalPhone, MdEmail } from 'react-icons/md'
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import Footer from './Footer';
import styled from 'styled-components';

const ContactSectionStyle = styled.div`
padding: 10rem 0;
.contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
}
.contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
}
.left {
    width: 100%;
    max-width: 500px;
}
.right {
    max-width: 500px;
    width: 100%;
}
@media only screen and (max-width: 768px) {
    .contactSection__wrapper {
        flex-direction: column;
    }
    .contactSeciton__wrapper::after {
        display: none;
    }
    .left,
    .right {
        max-width: 100%;
    }
    .right {
        paddding: 4rem 2rem 2rem 2rem;
    }
}
`;

export default function ContactSection() {
    return (
        <ContactSectionStyle>
            <div className="container">
                <SectionTitle heading="Contact"
                subheading="Get in touch"
                />
                <div className="contactSection__wrapper">
                    <div className="left">
                        <ContactInfoItem 
                        icon={<MdLocalPhone />}
                        text="669-294-7993"
                        />
                        <ContactInfoItem 
                        icon={ <MdEmail />}
                        text="umdaniel12@gmail.com"
                        />
                        <ContactInfoItem text="Fairfax, Virginia"/>
                    </div>
                    <div className="right">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </ContactSectionStyle>
    );
}
