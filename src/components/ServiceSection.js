import React from 'react'

import SectionTitle from './SectionTitle';
import ServiceSectionItem from './ServiceSectionItem';

export default function ServiceSection() {
    return (
        <div>
            <SectionTitle heading="Services"
            subheading="my passions" />
            <div className="services__allItems">
                <ServiceSectionItem />
            </div>
        </div>
    );
}
