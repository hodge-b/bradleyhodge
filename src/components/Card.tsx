import { nanoid } from "nanoid";

import { StyledCardContainer } from "./styled/Card.styled";
import { StyledCardContainerDark } from "./styled/CardDark.styled";

import { ProjectType } from "types";

interface CardProps {
  data: ProjectType;
  darkMode: boolean;
}

const Card = ({ data, darkMode }: CardProps) => {
  // TODO: Rework when refactoring card.
  // Iterate and assign project tech items.
  // const techElements = projectItem.tech.map((item) => (
  //   <p key={nanoid()} className="card-tech-item">
  //     {item}
  //   </p>
  // ));
  //

  const cardContent = () => (
    <>
      {data.images && (
        <div
          className="card-bg-image"
          style={{
            backgroundImage: `url(${data?.images?.[0]?.url})`,
          }}
        ></div>
      )}
      <p className="card-pretitle">Featured Project</p>
      <p className="card-title">{data.title}</p>
      <p className="card-description">{data.description}</p>
      {/* <div className="card-tech-container">{techElements}</div> */}
      <div className="card-link-container">
        {data.ctaButtons && data.ctaButtons.length > 0 && (
          <>
            {data?.ctaButtons?.map((button) => (
              <a
                key={nanoid()}
                className="btn btn--live-link"
                href={button.config.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.config.label}
              </a>
            ))}
          </>
        )}
      </div>
    </>
  );

  return (
    <div className="card-wrapper">
      {!darkMode ? (
        <StyledCardContainer className="card-container">
          {cardContent()}
        </StyledCardContainer>
      ) : (
        <StyledCardContainerDark className="card-container">
          {cardContent()}
        </StyledCardContainerDark>
      )}
    </div>
  );
};

export default Card;
