import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { StyledAboutContainer } from "./styled/About.styled";
import { StyledAboutContainerDark } from "./styled/AboutDark.styled";

import { AboutPageType } from "types";

interface AboutProps {
  data?: AboutPageType;
  darkMode: boolean;
}

const About = ({ data, darkMode }: AboutProps) => {
  const title = data?.title ?? "About Me";
  const techTitle =
    "Here are a few of the technologies I've recently been working with:";
  const TechItemElement = ({ name }: { name: string }) => {
    return (
      <div className="about-section-tech-item-container">
        <i className="ri-tools-line"></i>
        <p>{name}</p>
      </div>
    );
  };

  const AboutElements = () => {
    return (
      <>
        <div className="title-container">
          <h2 className="main-title">
            <span className="main-title--number">-02-</span>
            {title}
          </h2>
          <hr className="title--hr" />
        </div>
        <div className="about-section-main-wrapper">
          <div className="about-section-main-text">
            {data?.description
              ? documentToReactComponents(data.description)
              : ""}
            <p>{techTitle}</p>
            <div className="about-section-tech-container">
              {data && data?.tech?.length > 0 ? (
                <>
                  {data.tech.map((item) => (
                    <TechItemElement name={item.label} />
                  ))}
                </>
              ) : (
                <>
                  <TechItemElement name={"HTML"} />
                  <TechItemElement name={"CSS"} />
                  <TechItemElement name={"Javascript(ES6+)"} />
                  <TechItemElement name={"SCSS"} />
                  <TechItemElement name={"React"} />
                  <TechItemElement name={"Styled-Components"} />
                  <TechItemElement name={"Bootstrap"} />
                  <TechItemElement name={"PHP"} />
                  <TechItemElement name={"MySQL"} />
                  <TechItemElement name={"Node.js"} />
                  <TechItemElement name={"Express"} />
                  <TechItemElement name={"Axios"} />
                </>
              )}
            </div>
          </div>
          <div className="about-section-image-container">
            <div className="about-section-image">
              {data && data?.image?.url ? (
                <img src={data.image.url} alt={data.image.title} />
              ) : (
                <img src="/images/myself.jpg" alt="myself.jpg" />
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section id="about-section">
      {!darkMode ? (
        <StyledAboutContainer className="about-section-info-container">
          <AboutElements />
        </StyledAboutContainer>
      ) : (
        <StyledAboutContainerDark className="about-section-info-container">
          <AboutElements />
        </StyledAboutContainerDark>
      )}
    </section>
  );
};

export default About;
