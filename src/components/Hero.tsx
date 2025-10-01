import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { StyledHero } from "./styled/Hero.styled";
import { StyledHeroDark } from "./styled/HeroDark.styled";

import type { HeroPageType } from "types";

interface HeroProps {
  data?: HeroPageType;
  darkMode: boolean;
}

const Hero = ({ data, darkMode }: HeroProps) => {
  // TODO: Handle fallbacks with a json file instead of hardcoded.
  const overline = data?.overline ?? "hello, my name is";
  const mainHeading = data?.mainHeading ?? "Bradley Hodge.";
  const subHeading = data?.subHeading ?? "I'm a Full-Stack Web Developer.";
  const ctaButton = {
    label: data?.ctaButton.config.label ?? "Let's get started!",
    link: data?.ctaButton.config.link ?? "#contact-section",
  };

  // component to hold elements of hero page
  const HeroElements = () => {
    return (
      <>
        <p className="hero-subtitle-upper">{overline}</p>
        <h1 className="hero-title">{mainHeading}</h1>
        <h3 className="hero-subtitle-lower">{subHeading}</h3>
        {data ? documentToReactComponents(data.description) : ""}
        <a href={ctaButton.link} className="btn btn--get-started">
          {ctaButton.label}
        </a>
      </>
    );
  };

  return (
    <>
      {!darkMode ? (
        <StyledHero id="hero-section">
          <HeroElements />
        </StyledHero>
      ) : (
        <StyledHeroDark id="hero-section">
          <HeroElements />
        </StyledHeroDark>
      )}
    </>
  );
};

export default Hero;
