import { StyledAboutContainer } from "./styled/About.styled";
import { StyledAboutContainerDark } from "./styled/AboutDark.styled";

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
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
            <span className="main-title--number">-02-</span> About Me
          </h2>
          <hr className="title--hr" />
        </div>
        <div className="about-section-main-wrapper">
          <div className="about-section-main-text">
            <p>
              Hi, my name is Bradley Hodge and this is my story. I have spent
              the last ten years creating and building programs using various
              languages (ie. Javascript, PHP, C++, C#, Java, etc) as a hobbyist
              programmer. This was all thanks to my facination with video games
              and a creative spark.
            </p>
            <p>
              Today, I have a terrific grasp of programming fundamentals and
              coding practices from different outlets like University, websites,
              and Textbooks. I love the satisfaction of telling the computer
              what to do and to see the final result after all the hard work and
              late nights--with caffeine--in a working program.
            </p>
            <p>
              When I'm not coding, I enjoy going for hikes, mountain biking,
              playing the guitar, playing Phasmophobia with my girlfriend, and
              playing boardgames.
            </p>
            <p>
              Here are a few of the technologies I've recently been working
              with:
            </p>
            <div className="about-section-tech-container">
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
            </div>
          </div>
          <div className="about-section-image-container">
            <div className="about-section-image">
              <img src="/images/myself.jpg" alt="myself.jpg" />
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
