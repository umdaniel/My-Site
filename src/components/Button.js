import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
background-color: red;
`;

export default function Button({ btnLink, btnText }) {
    return (
        <ButtonStyle>
            <Link className="button" to={btnLink}>{btnText}</Link>
        </ButtonStyle>
    );
}
