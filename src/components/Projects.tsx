import { nanoid } from "nanoid";

import Card from "./Card";
import { StyledProjects } from "./styled/Projects.styled";
import { StyledProjectsDark } from "./styled/ProjectsDark.styled";

import type { ProjectFields } from "api/getContentful";

interface ProjectProps {
  projectData: Array<ProjectFields>;
  darkMode: boolean;
}

const Projects = ({ projectData = [], darkMode }: ProjectProps) => {
  // Elements mapped for the card component.
  const cardElements = projectData?.map((item: ProjectFields) => (
    <Card key={nanoid()} data={item} darkMode={darkMode} />
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
        {!darkMode ? (
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
};

export default Projects;
