import React from 'react'

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SectionTitle from './SectionTitle';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
padding: 10rem 0;
.projects_allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
}
.swiper-container {
    padding-top: 8rem;
    max-width: 100%;
}
.swiper-button-prev,
.swiper-button-next
{
    position: abolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
}
.swiper-button-next {
    right: 0;
}
.swiper-button-prev::after,
.swiper-button-next::after {
    font-size: 2rem;
}
@media only screen and (max-width: 768px) {
    .projects_allItems {
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    gap: 5rem;
    .projectItem__img {
        width: 100%;
    }
  }
}
`;

export default function ProjectsSection() {
    return (
        <ProjectSectionStyle>
            <div className="container">
                <SectionTitle heading="Projects"
                subheading="my recent works"
                />
                <div className="projects__allItems">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    >
                        {projects.map((project, index) => {
                        if (index >= 5) return;
                        return (
                            <SwiperSlide key={project.id}>
                                <ProjectItem
                                    title={project.name}
                                    img={project.img}
                                    desc={project.desc}
                                />
                            </SwiperSlide>
                        );
                        })}
                    </Swiper>
                </div>
            </div>
        </ProjectSectionStyle>
    )
}