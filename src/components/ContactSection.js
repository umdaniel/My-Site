import React from 'react'

import { MdLocalPhone, MdEmail } from 'react-icons/md'
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import Footer from './Footer';
import styled from 'styled-components';

const ContactSectionStyle = styled.div`
padding: 10rem 0;
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
