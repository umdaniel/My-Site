import React from 'react'

import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';
import styled from 'styled-components';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';

const ServicesItemStyles = styled.div`
padding: 10rem 0;
.services_allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
}
@media only screen and (max-width: 768px) {
    .services__allItems {
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;
    }
}
`;

export default function ServiceSection() {
    return (
        <ServicesItemStyles>
            <div className="container">
                <SectionTitle heading="Services"
                    subheading="my passions" />
                <div className="services__allItems">
                    <ServiceSectionItem 
                    icon={<MdDesktopMac />}
                    title="Website Design"
                    desc="I do ui/ux design for websites to help
                    create a unique and elegant look."
                    />

                    <ServiceSectionItem
                    icon={<MdCode />}
                    title="Web Development"
                    desc="I develop clean user friendly websites
                    with high performance speeds."                    
                    />
                    
                    <ServiceSectionItem 
                    icon={<MdPhonelinkSetup />}
                    title="App Development"
                    desc="I develop mobile applications with beautiful
                    interfaces that solve the niche of simple tasks and
                    personal interests."
                    />
                </div>
            </div>
        </ServicesItemStyles>
    );
}