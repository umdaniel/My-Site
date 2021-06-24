import React from 'react'

import { MdDesktopMac } from 'react-icons/md';
import PText from './PText';
import styled from 'styled-components';

const ItemStyles = styled.div`
text-align: center;
.servicesItem__icon {
    svg {
        width: 3rem;
    }
}
.servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
}
.para {
    margin-top: 2rem;
}
`;

export default function ServiceSectionItem({
    icon = <MdDesktopMac />,
    title= 'web design',
    desc='creating elegant user interfaces on the web'
}) {
    return (
        <ItemStyles>
            <div className="servicesItem__icon">{icon}</div>
            <div className="servicesItem__title">{title}</div>
            <PText>{desc}</PText>
        </ItemStyles>
    );
}
