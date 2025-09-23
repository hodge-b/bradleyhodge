import styled from "styled-components";

import { themedColorsDark } from "./styledColors";

export const StyledCardContainerDark = styled.div`
  .card-pretitle {
    color: ${themedColorsDark.accent};
  }
  .card-title {
    color: ${themedColorsDark.primary};
  }
  .card-description {
    color: ${themedColorsDark.primary};
    background-color: ${themedColorsDark.secondaryBackground};
  }
  .card-tech-container > p {
    color: ${themedColorsDark.primary};
    background-color: ${themedColorsDark.secondaryBackground};
    border-radius: 5px;
  }
  .btn--live-link {
    border: 1px solid ${themedColorsDark.accent};
    background-color: ${themedColorsDark.background};
    color: ${themedColorsDark.accent};
  }
`;

