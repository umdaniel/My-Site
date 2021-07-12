import React from 'react'

import PText from './PText';
import FooterCol from './FooterCol';
import styled from 'styled-components';

const FooterStyles = styled.div`
padding-top: 10rem;
background-color: var(--deep-dark);
.container {
    display: flex;
    gap: 3rem;
}
.footer__col1 {
    flex: 2;
}
.footer__col2,
.footer__col3,
.footer__col4 {
    flex: 1;
}
.footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}
.copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
        margin-left: 0;
    }
}
@media only screen and (max-width: 768px) {
    .container {
        flex-direction: column;
        gap: 0rem;
        & > div {
            margin-top: 5rem;
        }
    }
    .footer__col1 .para {
        max-width: 100%;
    }
    .copyright {
        .container {
            div {
                margin-top: 0;
            }
        }
    }
}
`;

export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Daniel Um</h1>
                    <PText>
                        An aspiring Front-End Software Engineer and
                        recent Computer Science graduate from James Madison
                        University. 
                        Passionate about front-end software development, web
                        development, elegant user interfaces, and clean code.
                        Currently residing in Fairfax, Virginia.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol heading="Important Links"
                    links = {[
                        {
                            title: 'Home',
                            path: '/',
                            type: 'Links'
                        },
                        {
                            title: 'About',
                            path: '/about',
                            type: 'Links'
                        },
                        {
                            title: 'Projects',
                            path: '/projects',
                            type: 'Links'
                        },
                        {
                            title: 'Contact',
                            path: '/contact',
                            type: 'Links'
                        },
                    ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol heading="Contact Info"
                    links = {
                        [
                            {
                                title: '669-294-7993',
                                path: 'tel:+6692947993',
                                type: 'Links'
                            },
                            {
                                title: 'umdaniel12@gmail.com',
                                path: 'umdaniel12@gmail.com',
                                type: 'Links'
                            },
                        ]
                    }
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol heading="Social Links"
                    links = {
                        [
                            {
                                title: 'GitHub',
                                path: 'https://github.com/umdaniel',
                                type: 'Links'
                            },
                        ]
                    }
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <PText>2021 - Daniel Um | Desgined By Daniel Um</PText>
                </div>
            </div>
        </FooterStyles>
    )
}
