import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectCard from './ProjectCard';

// import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />

          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;
            return (
              <ProjectCard 
                title={title}
                info1={info}
                info2={info2}
                url={url}
                repo={repo}
                img={img}
                alt={id}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
