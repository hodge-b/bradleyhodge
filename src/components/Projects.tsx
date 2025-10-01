import { nanoid } from "nanoid";

import Card from "./Card";
import { StyledProjects } from "./styled/Projects.styled";
import { StyledProjectsDark } from "./styled/ProjectsDark.styled";

import { ProjectPageType } from "types";

interface ProjectProps {
  data?: ProjectPageType;
  darkMode: boolean;
}

const Projects = ({ data, darkMode }: ProjectProps) => {
  const title = data?.title ?? "What I've Built";

  // Elements mapped for the card component.
  const showcaseCards = data?.showcasedProjects.map((card) => (
    <Card key={nanoid()} data={card} darkMode={darkMode} />
  ));
  const secondaryCards = data?.projects
    ? data?.projects.map((card) => (
        <Card key={nanoid()} data={card} darkMode={darkMode} />
      ))
    : null;

  const ProjectsTitleElements = () => {
    return (
      <>
        <h2 className="main-title">
          <span className="main-title--number">-01-</span>
          {title}
        </h2>
        <hr className="title--hr title--hr--projects" />
      </>
    );
  };

  return (
    <section id="projects-section">
      <div className="projects-section-container">
        <>
          {!darkMode ? (
            <StyledProjects className="title-container">
              <ProjectsTitleElements />
            </StyledProjects>
          ) : (
            <StyledProjectsDark className="title-container">
              <ProjectsTitleElements />
            </StyledProjectsDark>
          )}
          <h2>{data?.mainHeading ?? "Featured Projects"}</h2>
          {showcaseCards}
          {secondaryCards && (
            <>
              <h2>{data?.subHeading ?? "Other Projects"}</h2>
              {secondaryCards}
            </>
          )}
        </>
      </div>
    </section>
  );
};

export default Projects;
