import { StyledCardContainer } from "./styled/Card.styled";
import { StyledCardContainerDark } from "./styled/CardDark.styled";

import type { ProjectFields } from "api/getContentful";

interface CardProps {
  data: ProjectFields;
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

  const cardContent = () => (
    <>
      {data.images && (
        <div
          className="card-bg-image"
          style={{
            backgroundImage: `url(${data.images[0].src})`,
          }}
        ></div>
      )}
      <p className="card-pretitle">Featured Project</p>
      <p className="card-title">{data.title}</p>
      <p className="card-description">{data.description}</p>
      {/* <div className="card-tech-container">{techElements}</div> */}
      <div className="card-link-container">
        {data?.liveLink && (
          <>
            {data?.liveLink.label !== "https://bradhodge.dev" ? (
              <a
                href={data.liveLink?.link ?? ""}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--live-link"
              >
                {"Live View"}
              </a>
            ) : (
              <a
                href={data.liveLink?.link ?? ""}
                className="btn btn--live-link"
              >
                {"Live View"}
              </a>
            )}
          </>
        )}
        {data?.gitLink && (
          <a
            href={data.gitLink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--live-link"
          >
            {"Live Code"}
          </a>
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
