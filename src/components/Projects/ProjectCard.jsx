import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import PortfolioContext from '../../context/context';

const ProjectCard = (props) => {
  const { projectCard } = useContext(PortfolioContext);

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
    <div className="cardContainer">
      <div className="cardInfo">
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{props.title}</h3>
            <div>
              <p>{props.info1}</p>
              <h2>👨🏻‍💻 Stack: </h2>
              <p className="mb-4">{props.info2}</p>
            </div>
            {props.url && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href={props.url}
              >
                Check out more project info!
              </a>
            )}
            {props.repo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main mt-4"
                href={props.repo}
              >
                Source Code
              </a>
            )}
          </div>
        </Fade>
      </div>
      <div className="cardInfo">
        <Fade
          right={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="project-wrapper__image">
            <a
              href={props.url}
              target="_blank"
              aria-label="Project Link"
              rel="noopener noreferrer"
            >
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div data-tilt className="thumbnail rounded">
                  {/* <ProjectImg alt={title} filename={img} /> */}
                  <img src={props.img} alt={props.alt} />
                </div>
              </Tilt>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default ProjectCard;