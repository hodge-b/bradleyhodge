import styled from "styled-components";

import { themedColorsDark } from "./styledColors";

export const StyledAboutContainerDark = styled.div`
  h2 {
    color: ${themedColorsDark.primary};
  }
  span {
    color: ${themedColorsDark.accent};
  }
  .about-section-main-text > p {
    color: ${themedColorsDark.primary};
  }
  .about-section-tech-item-container > i {
    color: ${themedColorsDark.accent};
  }
`;

