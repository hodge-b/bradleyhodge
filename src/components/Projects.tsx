import React from "react";

import Card from "./Card";
import { StyledProjects } from "./styled/Projects.styled";
import { StyledProjectsDark } from "./styled/ProjectsDark.styled";
import { projects } from "./ProjectList";

export default function Projects({ darkMode }) {
  // elements mapped for the card component
  const cardElements = projects.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      description={item.description}
      techs={item.tech}
      link={item.link}
      codeLink={item.codeLink}
      background={item.background}
      darkMode={darkMode}
    />
  ));

  const ProjectsTitleElements = () => {
    return (
      <>
        <h2 className="main-title">
          <span className="main-title--number">-01-</span> What I've Built
        </h2>
        <hr className="title--hr title--hr--projects" />
      </>
    );
  };

  return (
    <section id="projects-section">
      <div className="projects-section-container">
        {darkMode === "false" ? (
          <StyledProjects className="title-container">
            <ProjectsTitleElements />
          </StyledProjects>
        ) : (
          <StyledProjectsDark className="title-container">
            <ProjectsTitleElements />
          </StyledProjectsDark>
        )}

        {cardElements}
      </div>
    </section>
  );
}

