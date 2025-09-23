import styled from "styled-components";

import { themedColors } from "./styledColors";

export const StyledContact = styled.section`
  .main-title {
    color: ${themedColors.primary};
  }
  span {
    color: ${themedColors.accent};
  }
  .contact-section-subtitle {
    color: ${themedColors.primary};
  }
  .contact-section-main-container > p {
    color: ${themedColors.primary};
  }
  .btn--say-hi {
    border: 1px solid ${themedColors.secondaryAccent};
    background-color: ${themedColors.secondaryAccent};
    color: #000000;
  }
`;

