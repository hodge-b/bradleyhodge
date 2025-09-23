import React from "react";
import { nanoid } from "nanoid";

import { ProjectItem } from "./ProjectList";
import { StyledCardContainer } from "./styled/Card.styled";
import { StyledCardContainerDark } from "./styled/CardDark.styled";

interface CardProps {
  projectItem: ProjectItem;
  darkMode: boolean;
}

const Card = ({ projectItem, darkMode }: CardProps) => {
  // Iterate and assign project tech items.
  const techElements = projectItem.tech.map((item) => (
    <p key={nanoid()} className="card-tech-item">
      {item}
    </p>
  ));

  return (
    <div className="card-wrapper">
      {!darkMode ? (
        <StyledCardContainer className="card-container">
          <div
            className="card-bg-image"
            style={{ backgroundImage: `url(${projectItem.background})` }}
          ></div>
          <p className="card-pretitle">Featured Project</p>
          <p className="card-title">{projectItem.title}</p>
          <p className="card-description">{projectItem.description}</p>
          <div className="card-tech-container">{techElements}</div>
          <div className="card-link-container">
            {projectItem.link !== "https://bradhodge.dev" ? (
              <a
                href={projectItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--live-link"
              >
                Live View
              </a>
            ) : (
              <a href={projectItem.link} className="btn btn--live-link">
                Live View
              </a>
            )}
            <a
              href={projectItem.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--live-link"
            >
              View Code
            </a>
          </div>
        </StyledCardContainer>
      ) : (
        <StyledCardContainerDark className="card-container">
          <div
            className="card-bg-image"
            style={{ backgroundImage: `url(${projectItem.background})` }}
          ></div>
          <p className="card-pretitle">Featured Project</p>
          <p className="card-title">{projectItem.title}</p>
          <p className="card-description">{projectItem.description}</p>
          <div className="card-tech-container">{techElements}</div>
          <div className="card-link-container">
            {projectItem.link !== "https://bradhodge.dev" ? (
              <a
                href={projectItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--live-link"
              >
                Live View
              </a>
            ) : (
              <a href={projectItem.link} className="btn btn--live-link">
                Live View
              </a>
            )}
            <a
              href={projectItem.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--live-link"
            >
              View Code
            </a>
          </div>
        </StyledCardContainerDark>
      )}
    </div>
  );
};

export default Card;

