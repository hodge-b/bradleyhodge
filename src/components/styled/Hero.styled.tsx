import styled from "styled-components";

import { themedColors } from "./styledColors";

export const StyledHero = styled.section`
  p:first-child {
    color: ${themedColors.primary};
  }
  p:nth-child(4) {
    color: ${themedColors.primary};
  }
  h1 {
    color: ${themedColors.accent};
  }
  h3 {
    color: ${themedColors.primary};
  }
  span {
    color: ${themedColors.accent};
  }
  .btn--get-started {
    border: 1px solid ${themedColors.secondaryAccent};
    background-color: ${themedColors.secondaryAccent};
    color: #000000;
  }
`;

